import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 6px;
  cursor: pointer;
`;

const Figure = styled.figure`
  width: 100px;
  height: 120px;
  position: relative;
`;

function PresetImage({ preset, filter, imageUrl, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <Figure style={{ filter }}>
        <div
        // style={{
        //   dispaly: "block",
        //   mixBlendMode: "overlay",
        //   height: "100%",
        //   width: "100%",
        //   position: "absolute",
        //   opacity: 1,
        //   background: "rgba(127, 187, 227, 0.2)",
        // }}
        >
          <img src={imageUrl} alt="preset" />
          <span> {preset.name}</span>
        </div>
      </Figure>
    </Wrapper>
  );
}

export default PresetImage;
