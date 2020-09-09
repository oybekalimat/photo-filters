import React, { useState, createRef, useEffect } from "react";
import Main from "./Main";
import styled from "styled-components";

import Presets from "./Presets";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Sidebar = styled.div`
  width: 15%;
  background-color: #ccc;
`;

const Adjustments = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: green;
`;

function App() {
  const [filters, setFilters] = useState([
    {
      name: "brightness",
      value: 100,
      maxValue: 200,
      unit: "%",
    },
    {
      name: "contrast",
      value: 100,
      maxValue: 200,
      unit: "%",
    },
    {
      name: "saturate",
      value: 100,
      maxValue: 200,
      unit: "%",
    },
    {
      name: "sepia",
      value: 0,
      maxValue: 100,
      unit: "%",
    },
    {
      name: "grayscale",
      value: 0,
      maxValue: 100,
      unit: "%",
    },
    {
      name: "invert",
      value: 0,
      maxValue: 100,
      unit: "%",
    },
    {
      name: "hue-rotate",
      value: 0,
      maxValue: 360,
      unit: "deg",
    },
    {
      name: "blur",
      value: 0,
      maxValue: 10,
      unit: "px",
    },
  ]);

  const [overlay, setOverlay] = useState({
    name: "none",
    color1: "",
    color2: "",
    color1Stop: 10,
    color2Stop: 100,
    direction: "",
    position: "",
    size: "",
    blendMode: "normal",
    opacity: 100,
  });

  const [imageUrl, setImageUrl] = useState(undefined);

  function handleUpload(e) {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];

    if (file.type === "image/png" || file.type === "image/jpeg") {
      const imageUrl = URL.createObjectURL(file).toString();
      setImageUrl(imageUrl);
    } else return alert("Invalid File Type");
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFilters(
      filters.map((filter) =>
        filter.name === name ? { ...filter, value: Number(value) } : filter
      )
    );
  }

  function handleOverlayChange(event) {
    setOverlay({ color1: event.target.value });
  }

  return (
    <Container>
      <Presets />
      <Main imageUrl={imageUrl} filters={filters} overlay={overlay} />
      <Adjustments>
        <input type="file" accept="image/*" onChange={handleUpload} />
        {filters.map((filter) => (
          <input
            key={filter.name}
            type="range"
            name={filter.name}
            value={filter.value}
            min="0"
            max={filter.maxValue}
            step="1"
            onChange={handleChange}
          />
        ))}
        <input type="color" onChange={handleOverlayChange} />
      </Adjustments>
    </Container>
  );
}

export default App;
