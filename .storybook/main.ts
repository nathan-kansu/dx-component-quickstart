import type { StorybookConfig } from "@storybook/react-webpack5";
import { storybookAddonStylingWebpackConfig } from "./addon-styling-webpack-config";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../static"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
    {
      name: "@storybook/addon-styling-webpack",
      options: storybookAddonStylingWebpackConfig,
    },
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
  ],
  typescript: {
    reactDocgen: "react-docgen",
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {},
    },
  },
  docs: {},
  core: {
    disableTelemetry: true,
  },
};
export default config;
