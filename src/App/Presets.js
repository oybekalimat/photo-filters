import React from "react";
import styled from "styled-components";
import { presets } from "../constants/presets";
import PresetImage from "../components/PresetImage";
import { convertPresetToCSS } from "../helpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12%;
  overflow-y: overlay;
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

export default Presets;
