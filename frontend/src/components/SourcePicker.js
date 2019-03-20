import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";

const sources = [
  {
    value: "jaspar",
    label: "Jaspar Database",
    key: "jaspar",
  },
  {
    value: "uniprobe",
    label: "UniProbe Database",
    key: "uniprobe",
  },
];

class SourcePicker extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(values) {
    this.props.onChange(values);
  }

  render() {
    return (
      <div className="container">
        <Select
          options={sources}
          onChange={this.onChange}
          components={makeAnimated()}
          isMulti
          placeholder="Choose databases you want to search in"
        />
      </div>
    );
  }
}

export default SourcePicker;
