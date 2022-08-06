import Theme from "@definitions/chakra/theme";

// Excluded colors
const excludes = [
  "current",
  "transparent",
  "white",
  "black",
  "whiteAlpha",
  "blackAlpha",
  "brand",
  "header",
  "main",
  "github",
  "discord",
];

const randomColor = (arg = -1): string => {
  const colors = Object.keys(Theme.colors)
    .map((color) => color)
    .filter((c) => (excludes.indexOf(c) === -1 ? c : false));

  if (arg > -1) return colors[arg];

  return colors[Math.floor(Math.random() * colors.length)];
};

export default randomColor;
