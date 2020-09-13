import React from "react";
import styled from "styled-components";
import { presets } from "../constants/presets";
import PresetImage from "../components/PresetImage";
import { convertPresetToCSS } from "../helpers";

const Wrapper = styled.div`
  width: 14%;
  overflow-y: auto;
  max-height: 100vh;
  background-color: #2b2b2b;
  border-right: 1px solid #363636;

  img {
    width: 100%;
    border-radius: 6px;
  }
`;

function Presets({ applyPresetToFilters, imageUrl }) {
  return (
    <Wrapper>
      {presets.map((preset, index) => (
        <PresetImage
          key={index}
          preset={preset}
          imageUrl={imageUrl}
          filter={convertPresetToCSS(preset)}
          onClick={() => applyPresetToFilters(preset)}
        />
      ))}
    </Wrapper>
  );
}

export default Presets;
