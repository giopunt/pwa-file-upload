import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.div`
  background: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 15px;
  padding: 5px 10px;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }
`;

const Img = styled.img`
  background: #eee;
  display: block;
  height 100px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Frame = styled.div`
  background: #ecf;
  border: 2px solid #333;
  padding: 10px 15px;
  margin: 10px 0;
`;

const FilePreview = ({ discard, files, upload }) => (
  <div>
    {files &&
      files.map(file => (
        <Frame key={file.id}>
          <Img
            src={window.URL.createObjectURL(file)}
            onLoad={() => {
              window.URL.revokeObjectURL(this.src);
            }}
            alt=""
          />
          <div>{file.name}</div>
          <Label onClick={() => upload(file)}>
            Upload{" "}
            <span role="img" aria-label="picture confirm upload">
              ⬆️
            </span>
          </Label>
          <Label onClick={() => discard(file)}>
            Discard{" "}
            <span role="img" aria-label="picture discard upload">
              ❌
            </span>
          </Label>
        </Frame>
      ))}
  </div>
);

FilePreview.propTypes = {
  discard: PropTypes.func,
  files: PropTypes.array,
  upload: PropTypes.func
};

export default FilePreview;
