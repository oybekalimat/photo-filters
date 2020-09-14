export const presets = [
  {
    name: "1977",
    filters: {
      contrast: 110,
      brightness: 110,
      saturate: 130,
      "hue-rotate": 0,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 0,
    },
    overlay: {
      type: "solid",
      blend: "screen",
      color1: { a: 0.3, b: 188, g: 106, r: 243 },
    },
  },

  {
    name: "Aden",
    filters: {
      "hue-rotate": 20,
      contrast: 90,
      saturate: 85,
      brightness: 120,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 0,
    },
    overlay: {
      type: "linear",
      blend: "darken",
      direction: "to right",
      color1: { a: 0.2, b: 14, g: 10, r: 66 },
      color1Stop: 1,
      color2: { a: 0, b: 14, g: 10, r: 66 },
      color2Stop: 100,
    },
  },

  {
    name: "Amaro",
    filters: {
      contrast: 90,
      saturate: 150,
      brightness: 110,
      "hue-rotate": -10,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 0,
    },
  },

  {
    name: "Brannan",
    filters: {
      sepia: 50,
      contrast: 140,
      saturate: 100,
      brightness: 100,
      "hue-rotate": 0,
      invert: 0,
      blur: 0,
      grayscale: 0,
    },
    overlay: {
      type: "solid",
      blend: "lighten",
      color1: { a: 0.31, b: 199, g: 44, r: 161 },
    },
  },

  {
    name: "Clarendon",
    filters: {
      contrast: 120,
      saturate: 125,
      brightness: 100,
      "hue-rotate": 0,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 0,
    },
    overlay: {
      type: "solid",
      blend: "overlay",
      color1: { a: 0.2, b: 227, g: 187, r: 127 },
    },
  },

  {
    name: "Gingham",
    filters: {
      contrast: 100,
      saturate: 100,
      brightness: 105,
      "hue-rotate": 350,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 0,
    },
    overlay: {
      type: "linear",
      blend: "darken",
      direction: "to right",
      color1: { a: 0.2, b: 14, g: 10, r: 66 },
      color1Stop: 1,
      color2: { a: 0, b: 0, g: 0, r: 0 },
      color2Stop: 100,
    },
  },

  {
    name: "Inkwell",
    filters: {
      contrast: 110,
      saturate: 100,
      brightness: 110,
      "hue-rotate": 0,
      invert: 0,
      blur: 0,
      grayscale: 100,
      sepia: 30,
    },
    overlay: {
      type: "solid",
      blend: "darken",
      color1: { a: 0, b: 0, g: 0, r: 0 },
    },
  },

  {
    name: "Maven",
    filters: {
      contrast: 95,
      saturate: 150,
      brightness: 95,
      "hue-rotate": 0,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 25,
    },
    overlay: {
      type: "solid",
      blend: "hue",
      color1: { a: 0.2, b: 26, g: 230, r: 3 },
    },
  },

  {
    name: "Perpetua",
    filters: {
      contrast: 100,
      saturate: 100,
      brightness: 100,
      "hue-rotate": 0,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 0,
    },
    overlay: {
      type: "linear",
      blend: "soft-light",
      direction: "to bottom",
      color1: { a: 0.5, b: 154, g: 91, r: 0 },
      color1Stop: 1,
      color2: { a: 0, b: 230, g: 193, r: 61 },
      color2Stop: 100,
    },
  },

  {
    name: "Reyes",
    filters: {
      contrast: 85,
      saturate: 75,
      brightness: 110,
      "hue-rotate": 0,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 22,
    },
    overlay: {
      type: "solid",
      blend: "soft-light",
      color1: { a: 0.5, b: 239, g: 205, r: 173 },
    },
  },

  {
    name: "Stinson",
    filters: {
      contrast: 75,
      saturate: 85,
      brightness: 115,
      "hue-rotate": 0,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 0,
    },
    overlay: {
      type: "solid",
      blend: "soft-light",
      color1: { a: 0.2, b: 128, g: 149, r: 240 },
    },
  },

  {
    name: "Walden",
    filters: {
      contrast: 100,
      saturate: 160,
      brightness: 110,
      "hue-rotate": 350,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 30,
    },
    overlay: {
      type: "solid",
      blend: "screen",
      color1: { a: 0.3, b: 0, g: 68, r: 204 },
    },
  },

  {
    name: "Valencia",
    filters: {
      contrast: 108,
      saturate: 100,
      brightness: 108,
      "hue-rotate": 0,
      invert: 0,
      blur: 0,
      grayscale: 0,
      sepia: 8,
    },
    overlay: {
      type: "solid",
      blend: "exclusion",
      color1: { a: 0.5, b: 57, g: 3, r: 58 },
    },
  },
];
