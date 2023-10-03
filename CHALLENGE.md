# Tech Challenge

Prerequisites:
Shopify CLI Installed on your computer: [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install)

1. Visit this [link](https://github.com/FelixTellmann/Accelerate-dev-challenge) and create a **Fork** of the repository into your GitHub Account and install the project on your local device.

2. Copy the `.env.example` file and rename it to `.env`. Then Copy the `shopify.theme.toml.example` and rename it to `shopify.theme.toml`. The Settings have been preconfigured for your tech challenge.

3. Install the project using `pnpm`. (Run `npm install pnpm -g` if you have not used `pnpm` before.) Then run `pnpm install` to install the project dependencies.

4. Create a new branch called `develop`.

5. Open up the `package.json` and familiarize yourself with the provided scripts. 
   - To create a new theme, run `pnpm run dev` and in a second terminal run `pnpm run dev:create`
   - This will trigger a login into your newly created Shopify Account.

This step will create a new Shopify Theme on the provided Shopify store that you created your account on. Take note of the `theme_id` and copy it into the `shopify.theme.toml` file that you created in step 2.

Password for front-end `dev-challenge`

6. You have now configured your dev environment with the newly created Theme. Now in the same terminal you ran the create command, run `pnpm run dev:serve`
