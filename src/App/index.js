import React, { useState } from "react";
import Main from "./Main";
import styled from "styled-components";

import { initialOverlayState } from "../constants/initialOverlayState";
import { initialFilterState } from "../constants/initialFilterState";

import Presets from "./Presets";
import Sidebar from "./Sidebar";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: flex;
`;

function App() {
  const [filters, setFilters] = useState(initialFilterState);
  const [overlay, setOverlay] = useState(initialOverlayState);
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

  function handleFiltersChange(name, value) {
    setFilters(
      filters.map((filter) =>
        filter.name === name ? { ...filter, value: Number(value) } : filter
      )
    );
  }

  function applyPresetToFilters(preset) {
    setFilters(
      filters.map((filter) => {
        console.log(filter);
        console.log(preset.filters);
        return { ...filter, value: preset.filters[filter.name] };
      })
    );

    if (preset.overlay) {
      setOverlay(preset.overlay);
    } else setOverlay(initialOverlayState);
  }

  function handleOverlayChange(event) {
    setOverlay({ ...overlay, color1: event.target.value });
  }

  function handleBlendingModeChange(event) {
    setOverlay({ ...overlay, blendMode: event.target.value });
  }

  function resetFilters() {
    setFilters(initialFilterState);
    setOverlay(initialOverlayState);
  }

  return (
    <Container>
      <Presets
        applyPresetToFilters={applyPresetToFilters}
        imageUrl={imageUrl}
      />
      <Main imageUrl={imageUrl} filters={filters} overlay={overlay} />
      <Sidebar
        filters={filters}
        resetFilters={resetFilters}
        handleUpload={handleUpload}
        handleFiltersChange={handleFiltersChange}
      />
    </Container>
  );
}

export default App;
