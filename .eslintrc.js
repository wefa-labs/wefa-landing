module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.tsx", "*.ts"],
      rules: {
        "no-undef": 0,
      },
    },
  ],
  env: {
    node: true,
    browser: true,
    amd: true,
    jest: true,
  },
  globals: {
    React: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "no-undef": 2,
    "no-console": process.env.NODE_ENV !== "production" ? 0 : 2,
    "import/no-unresolved": [
      process.env.NODE_ENV !== "production" ? 0 : 2,
      { ignore: ["@react-icons"] },
    ],
    // "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars":
    //   process.env.NODE_ENV !== "test" ? 0 : 2,
    // "@typescript-eslint/no-explicit-any":
    //   process.env.NODE_ENV !== "test" ? 0 : 2,
  },
};
