module.exports = {
  "presets": ["next/babel"],
  "plugins": [
    [
      "i18next-extract",
      {
        "locales": ["en", "de"],
        "outputPath": "public/locales/{{locale}}/{{ns}}.json",
        "customUseTranslationHooks": [["next-i18next", "useTranslation"]],
        "discardOldKeys": false,
        "keyAsDefaultValue": true
      }
    ],
    [
      "import",
      {
        "libraryName": "@react-icons",
        "camel2DashComponentName": false,
        "transformToDefaultImport": false,
        "customName": require('path').resolve(__dirname, './react-icons.js')
      },
      "@react-icons"
    ]
  ],
};
