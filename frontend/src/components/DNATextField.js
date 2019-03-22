import React, { Component } from "react";

class DNATextField extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    if (value.match(/^[acgtACGT]*$/)) {
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <div className="container">
        <input
          className="DNAText"
          type="text"
          value={this.props.text}
          onChange={this.onChange}
          placeholder="Please enter DNA sequence for analysis (Characters acgt or ACGT)"
        />
      </div>
    );
  }
}

export default DNATextField;
