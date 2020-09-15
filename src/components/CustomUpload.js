import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Label = styled.label`
  width: 100%;
  font-size: 14px;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: #4e4d50;
  border: 1px solid transparent;
  border-radius: 6px;
  color: #dbd9d9;
  margin-top: 12px;
  cursor: pointer;
  box-shadow: 0px 1px 3px -1px rgb(0 0 0 / 60%);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #605f63;
  }
  &:focus {
    outline: none;
  }
`;

function CustomUpload({ onChange }) {
  return (
    <>
      <Label htmlFor="file-upload">Upload New</Label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </>
  );
}

CustomUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CustomUpload;
