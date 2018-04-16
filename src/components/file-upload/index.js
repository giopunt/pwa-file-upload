import React, { Component } from "react";
import { deleteFile, saveFile, getAllCachedFiles, getFileFromCache } from "../../api/cache";
import styled from "styled-components";

import FilePreview from "./components/file-preview";

const Input = styled.input.attrs({
  accept: "image/*",
  id: "file-upload",
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
    this.state = { files: [], cachedFiles: [], cachedFile: undefined };

    this.onChange = this.onChange.bind(this);
    this.upload = this.upload.bind(this);
    this.discard = this.discard.bind(this);
    this.fileInput = React.createRef();
  }

  async componentDidMount() {
    const cachedFiles = await getAllCachedFiles();
    if(cachedFiles.length){
      const file = await getFileFromCache(cachedFiles[0]);
      console.log(file);
      this.setState({ cachedFile: file.url })
    }
    this.setState({ cachedFiles: cachedFiles })
  }

  onChange(event) {
    this.setState({
      files: [
        ...this.state.files,
        ...Array.from(event.target.files).map(file => {
          file.id = `${new Date().getTime()}-${file.name}`;
          return file;
        })
      ]
    });
    this.fileInput.value = "";
  }

  upload(file) {
    console.log(this.state);
    saveFile(file);
  }

  discard(file) {
    deleteFile(file);
    this.setState({
      files: this.state.files.filter(fileInState => {
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
          onChange={this.onChange}
          innerRef={comp => (this.fileInput = comp)}
        />
        <FilePreview
          files={this.state.files}
          cachedFiles={this.state.cachedFiles}
          upload={this.upload}
          discard={this.discard}
        />
        <div id="cached-file">
        {
          this.state.cachedFile && <img src={this.state.cachedFile} alt="" />
        }
        </div>
      </div>
    );
  }
}

export default FileUpload;
