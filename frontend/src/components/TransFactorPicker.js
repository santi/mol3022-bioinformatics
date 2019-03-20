import React, { Component } from "react";
import { ClipLoader } from "react-spinners";

class TransFactorPicker extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="container transFactor">
        <select
          onChange={this.onChange}
          className="transFactorSelect"
          defaultValue=""
        >
          <option value="" disabled className="transFactorOption">
            Choose a transcription factor
          </option>
          {this.props.factors.map(factor => (
            <option
              value={factor.matrix_id}
              key={factor.matrix_id}
              className="transFactorOption"
            >
              {factor.matrix_id}-{factor.name}
            </option>
          ))}
        </select>
        <ClipLoader color={"#673AB7"} loading={this.props.loading} />
      </div>
    );
  }
}

export default TransFactorPicker;
