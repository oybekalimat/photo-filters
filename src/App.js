import React, { useState, createRef, useEffect } from "react";
import Canvas from "./components/Canvas";

function App() {
  const [filters, setFilters] = useState({});
  const [imageUrl, setImageUrl] = useState(undefined);

  const [brightness, setBrightness] = useState(`brightness(${100}%)`);

  function handleUpload(e) {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];

    if (file.type === "image/png" || file.type === "image/jpeg") {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    } else return alert("Invalid File Type");
  }

  console.log(brightness);

  return (
    <div className="App">
      <input type="file" accept="image/*" onChange={handleUpload} />
      <input
        type="range"
        min="0"
        max="200"
        value={brightness}
        onChange={(e) => setBrightness(`brightness(${e.target.value}%)`)}
        step="1"
      />
      <Canvas imageUrl={imageUrl} filters={brightness} />
    </div>
  );
}

export default App;
