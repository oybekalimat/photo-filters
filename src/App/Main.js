import React, { useEffect, createRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { convertColorToString } from "../helpers";

const Wrapper = styled.div`
  width: 66%;
  background-color: #2f2f2f;
  padding: 24px;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

function Main(props) {
  const { imageUrl, filters, overlay, ...rest } = props;

  const ref = createRef(null);
  const parentRef = createRef(null);

  const [parentSize, setParentSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    reRenderCanvas();
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (parentRef.current) {
      setParentSize({
        width: parentRef.current.offsetWidth,
        height: parentRef.current.offsetHeight,
      });
    }
  }, [imageUrl, windowSize.width]);

  function convertFiltersToCanvas() {
    return filters
      .map((filter) => `${filter.name}(${filter.value}${filter.unit})`)
      .join(" ")
      .toString();
  }

  function reRenderCanvas() {
    const canvas = ref.current;
    const context = canvas.getContext("2d");
    context.filter = convertFiltersToCanvas();

    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      if (image.width > canvas.width || image.height > canvas.height) {
        return scaleToFit(image, canvas);
      }

      context.drawImage(
        image,
        canvas.width / 2 - image.width / 2,
        canvas.height / 2 - image.height / 2
      );

      if (overlay.type) applyOverlay(canvas, context, image, overlay);
    };
  }

  function applyOverlay(canvas, context, image, overlay) {
    const { type, color1, color2, color1Stop, color2Stop, blend } = overlay;

    context.globalCompositeOperation = blend;

    let fill = convertColorToString(color1);

    if (type === "linear") {
      const gradient = applyGradientDirection(
        overlay.direction,
        context,
        canvas
      );

      gradient.addColorStop(color1Stop / 100, convertColorToString(color1));
      gradient.addColorStop(color2Stop / 100, convertColorToString(color2));
      fill = gradient;
    }

    context.fillStyle = fill;

    context.fillRect(
      canvas.width / 2 - image.width / 2,
      canvas.height / 2 - image.height / 2,
      image.width,
      image.height
    );
  }

  function applyGradientDirection(direction, context, canvas) {
    if (direction === "to left") {
      return context.createLinearGradient(canvas.width, 0, 0, 0);
    }
    if (direction === "to right") {
      return context.createLinearGradient(0, 0, canvas.width, 0);
    }
    if (direction === "to bottom") {
      return context.createLinearGradient(0, 0, 0, canvas.height);
    }
    if (direction === "to top") {
      return context.createLinearGradient(0, canvas.height, 0, 0);
    }
  }

  function scaleToFit(img, canvas) {
    const context = canvas.getContext("2d");
    // get the scale
    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );
    // get the top left position of the image
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  }

  return (
    <Wrapper>
      <ImageContainer ref={parentRef}>
        <canvas
          ref={ref}
          {...rest}
          width={parentSize.width}
          height={parentSize.height}
        />
      </ImageContainer>
    </Wrapper>
  );
}

export default Main;
