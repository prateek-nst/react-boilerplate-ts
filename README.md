# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Adding new environment

To add a new environment add a file named `.env.<environment_name>` inside the `env/` folder in root directory. For example:

_.env.prestage_

```text
VITE_APP_BASE_URL= https://example.com/
VITE_APP_SOCKET_URL= https://socket.example.com/
```

Next, add the corresponding command in the `scripts` section of the `package.json` fie as follows:

```json
  "scripts": {
    # ... other configs
    "prestage": "vite --mode prestage",
    # ... other configs
  },
```

## Accessing env variables

We can access the environment variables using the following syntax:

```js
console.log(import.meta.env.VITE_APP_BASE_URL);
```

## Todo

-   Add protected routes
-   Purge zustand state
-   Add user roles
-   lazy loading
