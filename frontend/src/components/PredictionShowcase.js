import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const findHighestIndex = l => {
  let max = -99999;
  let maxIndex = -1;
  for (let i in l) {
    if (l[i] > max) {
      max = l[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};

class PredictionShowcase extends Component {
  render() {
    const { DNA, predictions } = this.props;

    const data = {
      labels: DNA.split("").slice(0, predictions.length),
      datasets: [
        {
          label: "Transcription Factor Binding Site Start Score",
          data: predictions,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "rgba(103,58,183,0.8)",
        },
      ],
    };

    const highestIndex = findHighestIndex(predictions);

    return (
      <div className="container">
        {highestIndex < 0 || (
          <div>
            Highest binding score at position: <span>{highestIndex}</span>
          </div>
        )}

        <Line data={data} />
      </div>
    );
  }
}

export default PredictionShowcase;
