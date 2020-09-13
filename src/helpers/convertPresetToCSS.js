function convertPresetToCSS(preset) {
  const cssValue = [];
  for (const filter in preset.filters) {
    if (filter === "hue-rotate") {
      cssValue.push(`${filter}(${preset.filters[filter]}deg)`);
    } else if (filter === "blur") {
      cssValue.push(`${filter}(${preset.filters[filter]}px)`);
    } else cssValue.push(`${filter}(${preset.filters[filter]}%)`);
  }
  return cssValue.join(" ").toString();
}

export default convertPresetToCSS;
