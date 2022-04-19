# NextJS + Tailwind + SASS

A super simple starter for NextJS, includes:

- Tailwind
- SASS
- Absolute paths to components plus a handy Layout component

## Getting started

- Clone this repo
- Run `yarn` to install dependencies
- Run `yarn dev` to start the development server

Note that for **Tailwind** to work you need to keep the classes `@import` on the global SASS file and then `import` that file on `_app.js` or on your layout component.

You can `import` your components with the absolute `@components` path, say goodbye to `../../../my-component`
