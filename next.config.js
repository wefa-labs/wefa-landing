const withPlugins = require("next-compose-plugins");
// const { i18n } = require("./next-i18next.config");

const optimizedImages = require("next-optimized-images");
const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const plugins = [
  [
    withBundleAnalyzer,
    {
      poweredByHeader: false,
      trailingSlash: true,
      basePath: "",
      // The starter code load resources from `public` folder with `router.basePath` in React components.
      // So, the source code is "basePath-ready".
      // You can remove `basePath` if you don't need it.
      reactStrictMode: true,
    },
  ],
  [
    optimizedImages,
    {
      // these are the default values so you don't have to provide them
      // if they are good enough for your use-case.
      // but you can overwrite them here with any valid value you want.
      inlineImageLimit: 8192,
      // densities: [1, 2],
      // breakpoints: [],
      imagesFolder: "images",
      imagesName: "[name]-[hash].[ext]",
      handleImages: ["jpg", "jpeg", "png", "svg", "webp", "gif"],
      removeOriginalExtension: false,
      optimizeImages: true,
      optimizeImagesInDev: true,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      svgo: {
        // enable/disable svgo plugins here
      },
      webp: {
        preset: "default",
        quality: 75,
      },
      responsive: {
        adapter: require("responsive-loader/sharp"),
        sizes: [300, 320, 640, 960, 1200, 1800, 2400],
        placeholder: true,
        placeholderSize: 40,
      },
    },
  ],
];

const nextConfig = {
  env: {
    TEMPLATE_PURCHASE_LINK: process.env.TEMPLATE_PURCHASE_LINK
      ? process.env.TEMPLATE_PURCHASE_LINK
      : "https://creativemarket.com/themebiotic",
  },
  // i18n,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "custom",
    disableStaticImages: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withPlugins(plugins, nextConfig);
