export const hexToRGB = (hex: string): string => {
  let rgb = [];
  if (hex.charAt(0) === "#") {
    rgb = hex.substring(1).match(/.{1,2}/g);
  } else {
    rgb = hex.match(/.{1,2}/g);
  }
  return [
    parseInt(rgb[0], 16),
    parseInt(rgb[1], 16),
    parseInt(rgb[2], 16),
  ].join(", ");
};

export const ColorMatch = (colorScheme: string): string[] => {
  let acc1, acc2;
  switch (colorScheme) {
    case "red":
      acc1 = "pink";
      acc2 = "orange";
      break;
    case "pink":
      acc1 = "purple";
      acc2 = "orange";
      break;
    case "purple":
      acc1 = "deepOrange";
      acc2 = "cyan";
      break;
    case "deepPurple":
      acc1 = "pink";
      acc2 = "teal";
      break;
    case "indigo":
      acc1 = "deepPurple";
      acc2 = "pink";
      break;
    case "blue":
      acc1 = "cyan";
      acc2 = "indigo";
      break;
    case "deepBlue":
      acc1 = "teal";
      acc2 = "purple";
      break;
    case "lightBlue":
      acc1 = "indigo";
      acc2 = "green";
      break;
    case "cyan":
      acc1 = "blue";
      acc2 = "lightGreen";
      break;
    case "teal":
      acc1 = "deepBlue";
      acc2 = "yellow";
      break;
    case "green":
      acc1 = "lightBlue";
      acc2 = "amber";
      break;
    case "lightGreen":
      acc1 = "cyan";
      acc2 = "yellow";
      break;
    case "lime":
      acc1 = "teal";
      acc2 = "orange";
      break;
    case "yellow":
      acc1 = "green";
      acc2 = "deepOrange";
      break;
    case "amber":
      acc1 = "lightGreen";
      acc2 = "brown";
      break;
    case "orange":
      acc1 = "yellow";
      acc2 = "lime";
      break;
    case "deepOrange":
      acc1 = "lime";
      acc2 = "yellow";
      break;
    case "brown":
      acc1 = "gray";
      acc2 = "blueGray";
      break;
    case "gray":
      acc1 = "indigo";
      acc2 = "blueGray";
      break;
    case "blueGray":
      acc1 = "indigo";
      acc2 = "deepPurple";
      break;
    default:
      acc1 = "orange";
      acc2 = "green";
  }
  return [acc1, acc2];
};
