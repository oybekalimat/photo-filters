import React, { useRef, useEffect, createRef } from "react";

function Canvas(props) {
  const ref = createRef(null);
  const { imageUrl, filters, ...rest } = props;

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    context.filter = filters;
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => context.drawImage(image, 0, 0);
  }, [ref, imageUrl, filters]);

  return <canvas ref={ref} {...rest}></canvas>;
}

export default Canvas;
