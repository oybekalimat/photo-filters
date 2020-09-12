export const presets = [
  {
    name: "1977",
    filters: {
      contrast: 110,
      brightness: 110,
      saturate: 130,
    },
    overlay: {
      type: "solid",
      blend: "screen",
      color1: { a: 0.3, b: 188, g: 106, r: 243 },
    },
  },
  {
    name: "aden",
    filters: {
      "hue-rotate": 20,
      contrast: 90,
      saturate: 85,
      brightness: 120,
    },
    overlay: {
      type: "linear",
      direction: "to right",
      color1: { a: 0.2, b: 14, g: 10, r: 66 },
      color1Stop: 1,
      color2: { a: 0, b: 14, g: 10, r: 66 },
      color2Stop: 100,
    },
  },
];
