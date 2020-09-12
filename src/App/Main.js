import React, {
  useRef,
  useEffect,
  createRef,
  useLayoutEffect,
  useState,
} from "react";
import styled from "styled-components";

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
  const [parentSize, setParentSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const ref = createRef(null);
  const parentRef = createRef(null);
  const { imageUrl, filters, ...rest } = props;

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

  console.log(parentSize);

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
      // if (overlay.name === "Solid Background") {
      //   context.globalCompositeOperation = overlay.blendMode;
      //   context.fillStyle = convertColorToString(overlay.color1);
      //   context.fillRect(0, 0, 600, 600);
      // }
      // if (overlay.name === "Linear Gradient") {
      //   let gradient = context.createLinearGradient(0, 0, 0, 200);
      //   gradient.addColorStop(overlay.color1Stop, overlay.color1);
      //   gradient.addColorStop(overlay.color2Stop, overlay.color2);
      //   context.fillStyle = gradient;
      //   context.fillRect(0, 0, 600, 600);
      // }
      // if (overlay.name === "Radial Gradient") {
      //   let gradient = context.createRadialGradient(0, 0, 0, 200);
      //   gradient.addColorStop(overlay.color1Stop, overlay.color1);
      //   gradient.addColorStop(overlay.color2Stop, overlay.color2);
      //   context.fillStyle = gradient;
      //   context.fillRect(0, 0, 600, 600);
      // }
    };
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

  function convertColorToString(color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
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
