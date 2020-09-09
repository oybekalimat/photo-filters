import React, { useRef, useEffect, createRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 60%;
  background-color: #2f2f2f;
`;

function Main(props) {
  const ref = createRef(null);
  const { imageUrl, filters, overlay, ...rest } = props;

  useEffect(() => {
    reRenderCanvas();
  });

  function convertFiltersToCanvas() {
    return filters
      .map((filter) => `${filter.name}(${filter.value}${filter.unit})`)
      .join(" ")
      .toString();
  }

  function reRenderCanvas() {
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      context.filter = convertFiltersToCanvas();
      context.globalCompositeOperation = "multiply";
      context.clearRect(0, 0, 600, 600);
      context.fillStyle = overlay.color1;
      context.fillRect(0, 0, 600, 600);
      context.drawImage(image, 0, 0);
    };
  }

  return (
    <Wrapper>
      <canvas ref={ref} {...rest} width="600" height="600"></canvas>
    </Wrapper>
  );
}

export default Main;
