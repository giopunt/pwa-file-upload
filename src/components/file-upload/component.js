import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import FilePreview from "./components/file-preview";

const Input = styled.input.attrs({
  accept: "image/*",
  multiple: true,
  type: "file"
})`
  display: none;
`;

const Label = styled.label`
  background: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  padding: 5px 10px;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }
`;

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { files: null };

    this.onFileUpload = this.onFileUpload.bind(this);
  }

  onFileUpload(event) {
    const files = event.target.files;
    this.props.addFile(Array.from(files));
    this.setState({
      files: files
    });
  }

  render() {
    return (
      <div>
        <Label htmlFor="file-upload">
          Choose{" "}
          <span role="img" aria-label="picture upload">
            📷
          </span>
        </Label>
        <Input id="file-upload" onChange={this.onFileUpload} />
        <FilePreview files={this.state.files} />
      </div>
    );
  }
}

FileUpload.propTypes = {
  addFile: PropTypes.func.isRequired
};

export default FileUpload;
