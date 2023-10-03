const { build } = require("esbuild");

// import watch from "node-watch";
const watch = require("node-watch");
console.log(process.cwd());
function runEsBuild() {
  build({
    entryPoints: ["./theme.tsx"],

    bundle: true,
    outfile: "./theme.expanded.js",
    loader: { ".js": "jsx" },
    minify: false,
    legalComments: "none",
    jsxFactory: "h",
    jsx: "transform",
    jsxImportSource: "preact",
    jsxSideEffects: true,
    keepNames: true,
  })
    .then((e) => {
      console.log("theme.expanded.js - bundled");
    })
    .catch((error) => {
      console.error(error);
    });

  build({
    entryPoints: ["./theme.tsx"],
    metafile: true,
    // sourcemap: "external",
    treeShaking: true,
    bundle: true,
    outfile: "./theme.js",
    loader: { ".js": "jsx" },
    minify: true,
    // packages: "external",
    format: "iife",
    minifySyntax: true,
    minifyWhitespace: true,
    minifyIdentifiers: true,
    legalComments: "none",
    jsxFactory: "h",
    jsx: "transform",
    jsxImportSource: "preact",
    jsxSideEffects: false,
    keepNames: false,
  })
    .then((e) => {
      console.log("theme.js - bundled");
    })
    .catch((error) => {
      console.error(error);
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    });
}
watch(process.cwd(), { recursive: true }, async (evt, name) => {
  if (!name.match(/\.(ts)x?$/)) return;

  console.log(name);
  runEsBuild();
});
runEsBuild();
