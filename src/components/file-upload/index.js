import React, { Component } from "react";
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
    this.state = { files: [] };

    this.chooseFile = this.chooseFile.bind(this);
    this.upload = this.upload.bind(this);
    this.discard = this.discard.bind(this);
    this.fileInput = React.createRef();
  }

  chooseFile(event) {
    const files = event.target.files;
    this.setState({
      files: [
        ...this.state.files,
        ...Array.from(files).map(file => {
          file.id = file.name + new Date().getTime();
          return file;
        })
      ]
    });
    this.fileInput.value = "";
  }

  upload(file) {
    console.log(file);
  }

  discard(file) {
    this.setState({
      files: Array.from(this.state.files).filter(fileInState => {
        return fileInState !== file;
      })
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
        <Input
          id="file-upload"
          onChange={this.chooseFile}
          innerRef={comp => (this.fileInput = comp)}
        />
        <FilePreview
          files={this.state.files}
          upload={this.upload}
          discard={this.discard}
        />
      </div>
    );
  }
}

export default FileUpload;
