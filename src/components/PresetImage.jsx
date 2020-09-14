import React from "react";
import styled from "styled-components";
import convertColorToString from "../helpers/convertColorToString";
import { convertPresetToCSS } from "../helpers";

const Wrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-bottom: 12px;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0px 0px 0px 1px #414141;

  span {
    color: #b3b3b3;
    font-size: 13px;
    height: 28px;
    line-height: 28px;
  }
`;

const Figure = styled.figure`
  width: 160px;
  height: 120px;
  position: relative;
  margin: 0;

  img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function PresetImage({ preset, imageUrl, onClick }) {
  const { overlay } = preset;

  return (
    <Wrapper onClick={onClick}>
      <Figure style={{ filter: convertPresetToCSS(preset) }}>
        <div
          style={{
            dispaly: "block",
            mixBlendMode: overlay ? overlay.blend : "screen",
            height: "100%",
            width: "100%",
            position: "absolute",
            opacity: 1,
            background: overlay
              ? overlay.color2
                ? `linear-gradient(${overlay.direction}, ${convertColorToString(
                    overlay.color1
                  )} ${overlay.color1Stop}%, ${convertColorToString(
                    overlay.color2
                  )} ${overlay.color2Stop}%)`
                : convertColorToString(overlay.color1)
              : null,
          }}
        ></div>
        <img src={imageUrl} alt="preset" />
      </Figure>
      <span>{preset.name}</span>
    </Wrapper>
  );
}

export default PresetImage;
