import React, { Component } from "react";
import { ClipLoader } from "react-spinners";

class TransFactorPicker extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = JSON.parse(event.target.value);
    console.log(`chose factor: ${value}`);
    console.log(value);

    this.props.onChange(value);
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
              value={JSON.stringify({
                id: factor.matrix_id,
                type: factor.type,
              })}
              key={factor.matrix_id}
              className="transFactorOption"
            >
              {factor.matrix_id}
            </option>
          ))}
        </select>
        <ClipLoader color={"#673AB7"} loading={this.props.loading} />
      </div>
    );
  }
}

export default TransFactorPicker;
