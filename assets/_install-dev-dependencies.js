const { exec, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const startTime = Date.now();

console.log(process.cwd());
const packageJson = fs.readFileSync(path.join(process.cwd(), "package.json"), {
  encoding: "utf-8",
});

const cleanPackageJson = JSON.stringify(JSON.parse(packageJson), null, 2);
fs.writeFileSync(path.join(process.cwd(), "package.json"), cleanPackageJson);

fs.writeFileSync(
  path.join(process.cwd(), "..", "package.json"),
  cleanPackageJson
    .replace("peerDependencies", "dependencies")
    .replace(`./../node_modules/fx-style/`, `./node_modules/fx-style/`)
    .replace(`"install": "node _install-dev-dependencies.js",`, "")
    .replace(`"install":"node _install-dev-dependencies.js",`, "")
    .replace(`"install":"node _install-dev-dependencies.js"`, "")
    .replace(/ ?--path \.\.\/ ?/gi, " ")
    .replace(
      `"esbuild": "node ./esbuild.config.js",`,
      `"esbuild": "cd assets && node ./esbuild.config.js",`
    )
    .replace(
      `"tailwindcss": "npx tailwindcss --config ./_tailwind.config.js --postcss ./_postcss.config.js -i ./_tailwind.css -o ./tailwind.css.liquid --watch",`,
      `"tailwindcss": "cd assets && npx tailwindcss --config ./_tailwind.config.js --postcss ./_postcss.config.js -i ./_tailwind.css -o ./tailwind.css.liquid --watch",`
    )
);

fs.writeFileSync(
  path.join(process.cwd(), "..", ".shopifyignore"),
  `
node_modules
.idea
.vscode
./package.json
package-lock.json
./README.md
!assets/package.json
`
);
fs.writeFileSync(
  path.join(process.cwd(), "..", ".gitignore"),
  `
node_modules
.idea
`
);

/*
const gitIgnore = fs.readFileSync(path.join(process.cwd(), ".gitignore"), { encoding: "utf-8" });
fs.writeFileSync(path.join(process.cwd(), "..", ".gitignore"), gitIgnore);
*/

/*const tsconfig = fs.readFileSync(path.join(process.cwd(), 'tsconfig.json'), { encoding: "utf-8" });
fs.writeFileSync(path.join(process.cwd(), '..', 'tsconfig.json'), tsconfig.replace(`./../node_modules/fx-style/tsconfig-google.json`, `./node_modules/fx-style/tsconfig-google.json`));*/

const child = spawn("cd .. && npm install pnpm --global && pnpm install && cd assets", {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code, signal) => {
  // console.log("child process exited with " + `code ${code} and signal ${signal}`);
  console.log("\x1b[30m", "\x1b[42m", "Installation Complete", "\x1b[0m");
  console.log("\x1b[30m", "\x1b[47m", "Installation Complete", "\x1b[0m");
});

/*

exec(`cd .. && npm install && cd assets`, (error, stdout, stderr) => {
  console.log("stdout", stdout);
  if (error) {
    console.log(`error: ${error.message}`);
  }
  console.log(`${Date.now() - startTime}ms - Dev Dependencies install`);

  /!*exec(
      `ls && npm link ..`,
      (error, stdout, stderr) => {
        console.log("stdout", stdout);
        if (error) {
          console.log(`error: ${error.message}`);
        }
        console.log(`${Date.now() - startTime}ms - Dependencies Linked`);
      },
    );*!/
});
*/
