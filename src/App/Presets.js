import React from "react";
import styled from "styled-components";
import { presets } from "../constants/presets";

const Wrapper = styled.div`
  width: 14%;
  background-color: #2b2b2b;
  border-right: 1px solid #363636;
`;

function Presets({ applyPresetToFilters }) {
  return (
    <Wrapper>
      {presets.map((preset) => (
        <div onClick={() => applyPresetToFilters(preset)}>Yess</div>
      ))}
    </Wrapper>
  );
}

export default Presets;
