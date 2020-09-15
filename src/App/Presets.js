import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { presets } from "../constants/presets";
import PresetImage from "../components/PresetImage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12%;
  overflow-y: auto;
  max-height: 100vh;
  background-color: #2b2b2b;
  border-right: 1px solid #363636;
  padding: 16px;
`;

function Presets({ applyPresetToFilters, imageUrl }) {
  return (
    <Wrapper>
      {presets.map((preset, index) => (
        <PresetImage
          key={index}
          preset={preset}
          imageUrl={imageUrl}
          onClick={() => applyPresetToFilters(preset)}
        />
      ))}
    </Wrapper>
  );
}

Presets.propTypes = {
  applyPresetToFilters: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
};

export default Presets;
