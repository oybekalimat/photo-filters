import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";
import { Panel as ColorPickerPanel } from "rc-color-picker";
import "rc-color-picker/assets/index.css";

function Overlay({ overlay, setOverlay }) {
  function handleColor(color) {
    console.log(color);
    setOverlay({ ...overlay, color1: color.rgb });
  }

  function handleBlendMode(event) {
    setOverlay({ ...overlay, blendMode: event.target.value });
  }

  if (overlay.name === "none") {
    return null;
  }

  return (
    <div>
      <div>{overlay.name}</div>

      <ColorPickerPanel
        type="color"
        name="color1"
        color={overlay.color1}
        onChange={handleColor}
      >
        <button>Choose Color</button>
      </ColorPickerPanel>

      {overlay.color2 && (
        <input
          type="color"
          name="color2"
          value={overlay.color2}
          onChange={handleColor}
        />
      )}

      <select onChange={handleBlendMode} value={overlay.blendMode}>
        <option value="normal">Normal</option>
        <option value="multiply">Multiply</option>
      </select>
    </div>
  );
}

Overlay.propTypes = {
  overlay: PropTypes.string.isRequired,
};

export default Overlay;
