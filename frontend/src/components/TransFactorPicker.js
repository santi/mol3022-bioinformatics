import React, { Component } from "react";

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
      <div className="container">
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
      </div>
    );
  }
}

export default TransFactorPicker;
