import React, { Component } from "react";
import {
  getJasparTransFactorList,
  getProbabilityFrequencyMatrix,
  getSequenceProbabilities,
} from "../api";

import AlgorithmPicker from "./SourcePicker";
import TransFactorPicker from "./TransFactorPicker";
import DNATextField from "./DNATextField";
import PredictionShowcase from "./PredictionShowcase";

const initialState = {
  showTransFactors: false,
  showDNA: false,
  showPrediction: false,

  loadingAvailableTransFactors: false,
  errorAvailableTransFactors: false,
  jasparTransFactors: [],
  uniprobeTransFactors: [],

  selectedSources: [],
  selectedTransFactor: "",

  loadingPFM: false,
  errorPFM: false,
  PFM: [],

  DNA: "",

  loadingPredictions: false,
  errorPredictions: false,
  predictions: [],
};

class WorkflowManager extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.onSourceChange = this.onSourceChange.bind(this);
    this.onTransFactorChange = this.onTransFactorChange.bind(this);
    this.onDNAChange = this.onDNAChange.bind(this);
  }

  componentDidMount() {
    console.log("fetching data.");
    this.setState(
      {
        loadingAvailableTransFactors: true,
      },
      () => {
        getJasparTransFactorList().then(
          res => {
            const { jaspar, uniprobe } = res.data;
            this.setState({
              jasparTransFactors: jaspar,
              uniprobeTransFactors: uniprobe,
              loadingAvailableTransFactors: false,
            });
          },
          () =>
            this.setState({
              loadingAvailableTransFactors: false,
              errorAvailableTransFactors: true,
            }),
        );
      },
    );
  }

  onSourceChange(sources) {
    console.log(`Sources are now: ${sources.map(val => val.value)}`);

    this.setState({
      showTransFactors: true,
      selectedSources: sources,
    });
  }

  onTransFactorChange(transfactor) {
    console.log(`TransFactor is now: ${transfactor.id}`);

    this.setState({
      selectedTransFactor: transfactor,
      loadingPFM: true,
      showDNA: false,
      showPrediction: false,
      predictions: [],
    });
    getProbabilityFrequencyMatrix(transfactor.id, transfactor.type).then(
      res => {
        this.setState({
          showDNA: true,
          showPrediction: true,
          loadingPFM: false,
          PFM: res.data,
        });
        if (this.state.DNA) {
          // DNA is already entered
          this.onDNAChange(this.state.DNA);
        }
      },
      () => {
        this.setState({
          errorPFM: true,
          loadingPFM: false,
        });
      },
    );
  }

  onDNAChange(DNA) {
    console.log(`DNA is now: ${DNA}`);

    this.setState({
      DNA: DNA,
      loadingPredictions: true,
    });

    const getSeqProb = () =>
      getSequenceProbabilities(DNA, this.state.PFM).then(
        res => {
          this.setState({
            predictions: res.data,
            loadingPredictions: false,
          });
        },
        () =>
          this.setState({
            loadingPredictions: false,
            errorPredictions: true,
          }),
      );

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      debounceTimer = null;
      getSeqProb();
    }, 500);
  }

  render() {
    let factors = [];

    for (let source of this.state.selectedSources) {
      if (source.value === "jaspar") {
        factors = factors.concat(this.state.jasparTransFactors);
      } else if (source.value === "uniprobe") {
        factors = factors.concat(this.state.uniprobeTransFactors);
      }
    }
    factors.sort((a, b) => a["matrix_id"].localeCompare(b["matrix_id"]));

    return (
      <div className="container">
        <AlgorithmPicker onChange={this.onSourceChange} />
        {!this.state.showTransFactors || (
          <TransFactorPicker
            onChange={this.onTransFactorChange}
            factors={factors}
            loading={this.state.loadingPFM}
          />
        )}
        {!this.state.showDNA || (
          <DNATextField onChange={this.onDNAChange} text={this.state.DNA} />
        )}
        {!this.state.showPrediction || <PredictionShowcase {...this.state} />}
      </div>
    );
  }
}

let debounceTimer = null;

export default WorkflowManager;
