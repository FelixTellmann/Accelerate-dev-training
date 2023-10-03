# Shopify Theme Development

Typesafe Shopify Theme development to help you build your next Shopify theme.

## Installation

1. Install the project using `pnpm install`. (`npm` and `yarn` will also work)
2. Copy the [shopify.theme.toml.example](shopify.theme.toml.example) into the project directory as `shopify.theme.toml` and the [.env.example](.env.example) as `.env`.
3. Configure the two files with your Shopify Store details: `store-handle.myshopify.com` and your development & production `theme_id`, if you haven't got the Theme installed yet, leave the `theme_id` blank and continue with step 4.
4. Next, if you **haven't** created a Theme on the Shopify store yet using the [Release zip](https://github.com/Framework-Labs-D2C/Smart/releases),  run `pnpm run dev` to create a new Theme, using the default template. The process should only take a few seconds, but continuous to be active as it `watches` for changes. You can stop the process using `ctrl + c` and next run `pnpm run dev:create` to create a new Theme on your Shopify store. If you get an error, you have most likely reached the limit of Themes on your store. If that is the case, remove an unused theme and try again. Once the the theme is created, add the `theme_id` for the new theme into your `shopify.theme.toml` that you created in step 2.
5. For best practices, we highly advice to create a separate `git` repository for the `themes/development` and `themes/production` output directories which are both ignored by the devtool repository. Follow the steps below in your terminal to get it setup:
   - `cd themes/development && git init`
   - `git add .`
   - `git commit -m "init"`
   - If you are using a Jetbrains IDE (Webstorm, PHPStorm, Intellij IDEa) you can add the added repository in your settings -> version control -> Directory Mappings. This will give you a full visual Git integration.
6. Its time to start developing now. You will need two terminals, one to run the **shopify-cli** process and another for the **dev tools**.
   - `pnpm run dev:serve`
   - `pnpm run dev`

## Upgrading your production environment

If you need to upgrade your production environment with the latest changes of your development, follow the below steps:
1. Check that your `shopify.theme.toml` is configured on the `production environment` with the correct `theme_id`
2. Run `pnpm run prod:pull` to download the Theme
3. If you haven't created a `git` repository for the production theme, now is a good time. It is highly recommended to run a commit  after running the `prod:pull` command to ensure that a backup is available for potential rollback of any settings.
4. Once your Git repo is all set, run `pnpm run prod` which will upgrade your production theme (the dev tools will **not** overwrite any `.json` files). Additionally, you can set the dev tools to ignore any specific files in the `.env` file. A lot of Shopify Apps add custom code into the `theme.liquid` and its always best to run a `git diff` to check if anything has been overwritten. You can also copy in any app related changes back into your `globals/layouts/theme.liquid` to ensure they are copied over correctly each time. 
5. If you made any Theme Editor specific changes in your `development` environment, you can diff the config files form the development & production environments, copying over any settings made.
6. Once your theme is upgraded you can run `pnpm run prod:serve` to upgrade your theme on your Shopify store. Shopify generally auto-formats any `.json` files, even the ones in the `locales` and `assets` folders. Sometimes, the auto-formatted files are not loaded in the correct order by the Shopify CLI, or a settings file is loaded before the actual section that requires the settings. The Shopify CLI does not allow in any way to set the order in which files are uploaded. For that reason, it is best to run the `pnpm run prod` command a few times once the Shopify CLI has uploaded the initial batch of files.

## Upgrading from v2.4.x to v2.5.x

Some of the settings are not 100% compatible between the version `2.4.x` and `v2.5.x`. In order to transform the settings, first ensure you have the latest version of the Theme pulled down from Shopify using the CLI and have created a `commit` as a savepoint. Creating a new `branch` would also work.
1. On GitHub sync the `main` branch for the `forked repo` to get the latest version `v2.5.x`
2. Merge in the `main` branch into your development branch. It is highly likely that there are merge conflicts, for any conflict related to the settings files: `package.json`, `tsconfigs`, `tailwind.config.js`, and the configs in the `asset` folder. Make sure to Accept the new `v2.5.x` version.
3. Next, follow the **installation steps** 1 - 3 above, ensuring that the new local config files are setup correctly.
4. Next, run `pnpm run dev` to create the latest version of the theme output.
5. Now, run `pnpm run upgrade:v2.4-v2.5` The script will upgrade all your `templates/....json` files and `config/settings_data.json` using the old settings for buttons / labels etc, from v2.4.
6. Before running the Shopify Serve command. Its important to create another Commit / branch as a save point.
7. Lastly, run the shopify serve command `pnpm run dev:create` to create a new theme with `v2.5` installed. Pay attention to the terminal for any potential conflicts that might need manual editing of the `.json` templates. Now update your `shopify.theme.toml` with the newly created theme using the `theme_id` and run `pnpm run dev:serve`, again checking the terminal for any issues, rerunning `pnpm run dev` is also advised to avoid any `.json` formatting issues caused by Shopify's auto formatter.



## Git Flow - Best Practices - Team environment

Please checkout our [Documentation](https://docs.platter.co/platter-base/for-developers/getting-started) for the Forking workflow.

## Stack Components

### fx-style
A internally developed ESLint/Prettier configuration for Shopify liquid / Next.js development that gets executed on every save and auto-formats your code and type-checks liquid/js/ts/html/css files. No additional packages or configuration needed to lint your project.

### shopify-ftp-access / shopfiy-cli
The theme can be easily setup to utilize the `Shopify-cli` or `Shopify-ftp-access` to deploy your theme to your Shopify store and live preview your changes. `shopify-ftp-access` is also an internal developed dev tool that allows you to access your theme via your preferred ftp client.

### shopify-theme-dev
This npm package is at the core of the S6 stack and generates your sections in a complete Typesafe manner and produces the `section` file, `snippet` file and the Types for your settings that you can use in your liquid files. It also generates your language files, which really allows you to focus on your development, instead of searching for the right language key.

### ts-node / esbuild
All code for the theme is written in Typescript and we includes a special configuration to automatically compile your Typescript files to Javascript files and also allows you to import your Javascript files as modules. This allows you to use the latest Javascript features and also allows you to import your Javascript files as modules or easily bundle external libraries into your codebase.

### Tailwind CSS
The theme is built with Tailwind CSS and includes a custom configuration to allow you to use the latest Tailwind CSS features. The tailwind config is setup that you can easily pick colors via Shopify and still use Tailwind's opacity variations. The produced CSS is 100% flat and any overrides are done via css variables which means you will never encounter any specificity issues. The added bonus is Tailwinds tiny file size in comparison to traditional CSS.

### shopify-cms
An internally developed codegen package to create `headless` Shopify themes based on Next.js / React to use Shopifys Theme editor & content as a headless-cms.

### Why s6 stack ?
The stack is heavily inspired by the `t3` stack which was created by Theo Ping and is based on his first name T plus three letters, similar to i18n and a11y to abbreviate internationalization and accessibility.

`s6` stands for Shopify, s plus 6 letters and makes up the `6` above mentioned components.
