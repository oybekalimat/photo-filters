function convertFiltersToCanvas(filters) {
  return filters
    .map((filter) => `${filter.name}(${filter.value}${filter.unit})`)
    .join(" ")
    .toString();
}

export default convertFiltersToCanvas;
