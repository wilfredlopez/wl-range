import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

import { OutputTargetWww } from "@stencil/core/internal";

const devTarget = {
  type: "www",
  copy: [
    {
      src: "../css",
      dest: "./css",
    },
  ],
} as OutputTargetWww;

export const config: Config = {
  namespace: "wl-range",
  taskQueue: "async",
  // enableCache: true,
  outputTargets: [
    {
      type: "dist",
      copy: [
        {
          src: "../css",
          dest: "./css",
        },
      ],
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements-bundle",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/themes/wl.skip-warns.scss"],
    }),
  ],
  globalScript: "src/global/wl-global.ts",
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    initializeNextTick: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
  },
};

if (process.env.NODE_ENV === "development") {
  config.outputTargets.push(devTarget);
  config.devMode = true;
  config.devServer = {
    reloadStrategy: "hmr",
  };
}
