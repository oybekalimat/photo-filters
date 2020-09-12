const initialOverlay = {
  name: "none",
  color1: "",
  color2: "",
  color1Stop: null,
  color2Stop: null,
  direction: "",
  position: "",
  size: "",
  blendMode: "normal",
  opacity: 100,
};

const solidOverlay = {
  name: "Solid Background",
  color1: "#2a5984",
  color2: "",
  color1Stop: null,
  color2Stop: null,
  direction: "",
  position: "",
  size: "",
  blendMode: "normal",
  opacity: 100,
};

const linearOverlay = {
  name: "Linear Gradient",
  color1: "#2a5984",
  color2: "#1d2026",
  color1Stop: 0,
  color2Stop: 1,
  direction: "To Bottom",
  position: "",
  size: "",
  blendMode: "normal",
  opacity: 100,
};

const radialOverlay = {
  name: "Radial Gradient",
  color1: "#2a5984",
  color2: "#1d2026",
  color1Stop: 0,
  color2Stop: 1,
  direction: "To Bottom",
  position: "",
  size: "",
  blendMode: "normal",
  opacity: 100,
};

export { initialOverlay, radialOverlay, linearOverlay, solidOverlay };
