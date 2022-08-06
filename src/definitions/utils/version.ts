import json from "@root/package.json";

const version = (): string => {
  if (json && json.version) return json.version;
  return "0";
};

export default version;
