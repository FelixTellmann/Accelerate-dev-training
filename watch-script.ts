import chalk from "chalk";
import fs from "fs";
import path from "path";
import watch from "node-watch";
require("dotenv").config();
const { exec, spawn } = require("child_process");

export const writeCompareFile = (path: string, content: string, successCallback = () => {}) => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, content);
    console.log(
      `[${chalk.gray(new Date().toLocaleTimeString())}]: ${chalk.blueBright(
        `Created: ${path.replace(process.cwd(), "")}`
      )}`
    );
    successCallback();
    return;
  }

  const contentVerification = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  if (contentVerification !== content) {
    console.log(
      `[${chalk.gray(new Date().toLocaleTimeString())}]: ${chalk.blueBright(
        `Updated: ${path.replace(process.cwd(), "")}`
      )}`
    );
    fs.writeFileSync(path, content);
    successCallback();
    return;
  }
};

const typesRootPath = path.join(process.cwd(), "@types");
const typesTargetPath = path.join(process.cwd(), "assets", "_types.d.ts");

const combineTypeFiles = () => {
  const files = fs.readdirSync(typesRootPath);

  let newContent = "";
  files.forEach((file) => {
    const fileName = path.join(typesRootPath, file);

    const content = fs.readFileSync(fileName, { encoding: "utf-8" });
    newContent += content.replace(
      /import(.|\n)*from(.)*"\.\/(shopify|settings|metafields)";?\n?/gi,
      ""
    );
  });
  // fs.writeFileSync(typesTargetPath, newContent);

  writeCompareFile(typesTargetPath, newContent, () => {
    exec(`eslint assets/_types.d.ts --fix`, (error, stdout, stderr) => {
      console.log(
        `[${chalk.gray(new Date().toLocaleTimeString())}]: ${chalk.greenBright(`Types Prettified`)}`
      );
      if (error) {
        console.log(`error: ${error.message}`);
      }
    });
  });
};
watch(path.join(process.cwd(), "@types"), { recursive: true }, async (evt, name) => {
  if (!name.match(/\.(ts)$/)) return;

  combineTypeFiles();
});
combineTypeFiles();

/*
const assetsRootPath = path.join(process.cwd(), "assets");
const assetsTargetPath = path.join(process.cwd(), "globals", "assets");

const copyAssets = () => {
  const files = fs.readdirSync(assetsRootPath);

  files.forEach((file) => {
    const fileName = path.join(assetsRootPath, file);
    const targetFileName = path.join(assetsTargetPath, file);

    const content = fs.readFileSync(fileName, { encoding: "utf-8" });
    writeCompareFile(targetFileName, content);
  });
};

watch(assetsRootPath, { recursive: true }, async (evt, name) => {
  copyAssets();
});

copyAssets();
*/
