# Smart Theme Dev Tools

## Prerequisites:
1. Ideally a code editor that provides coding assistance for TypeScript.
2. Node version >= 16.x..x
3. Npm

## Installation
1. Open a terminal and cd into the `/assets` folder.
2. Run `npm run install` in the terminal. NB: Running `npm install` will do **nothing** :slightly_smiling_face: Depending on internet / hardware, the install will take 1-5 minutes and shows a Success message at the end.

## Development
1. Run the Dev tools (TailwindCSS and Webpack) by running `npm run dev` in the terminal (also in /assets folder). Now all files in the assets folders are watched and can easily be changed, all TS/JS code will be compiled into the theme.js files via the theme.tsx entry file. Any Code that isn't referenced there, will not be generated. Tailwind CSS is compiled into the tailwind.css.liquid file and Shopify handles the minification. 

## Read More
Checkout the `/assets/package.json` to see all available scripts to run processes individually.
There are also easy to configure scripts to run the `Shopify-cli` and sync / update a theme.

If you download the theme as a Zip from Shopify, the package.json will be minified, Any code editor can easily unminify the code to make it more readable. The Install process also unminifies it for you :slightly_smiling_face:, but any subsequent download can minify the file again.
