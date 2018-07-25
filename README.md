<h1 align="center" style="border-bottom: 0">🎐 Tailwind Parcel</h1>
<p align="center">This is a basic project boilerplate with TailwindCSS inside suited for in-browser prototyping.<p>
<p align="center">
  <a href="https://github.com/imsus"><img src="https://badgen.net/badge/author/@imsus/grey" alt="author badge with @imsus written on it"></a>
  <img src="https://badgen.net/badge/featuring/tailwindcss%2ftailwindcss,parcel-bundler%2fparcel/cyan?list=1" alt="featuring badge with tailwind/tailwindcss and parcel-bundler/parcel written on it">
  <a href="https://github.com/imsus/tailwind-parcel/blob/master/LICENSE.md"><img src="https://badgen.net/badge/license/MIT/blue" alt="license badge with MIT written on it"></a>
</p>



## ⭐️ Features

- Structured import using [postcss-import](https://github.com/postcss/postcss-import).
- Support nested like Sass using [postcss-nested](https://github.com/postcss/postcss-nested).
- Support future CSS spec using [postcss-preset-env](https://github.com/csstools/postcss-preset-env).
- Build system using [parcel-bundler](https://github.com/parcel-bundler/parcel)
- Remove all unnecessary CSS on production using [postcss-purgecss](https://github.com/FoundrySH/postcss-purgecss).

## ⚠️ Requirements

1. You must installed `parcel-bundler` globally. Run `npm i -g parcel-bundler` or `yarn global add parcel-bundler` if you have `yarn`.
2. Make sure you can run `parcel` in terminal. You should put `parcel` inside your `PATH` environment variable (`npm` and `yarn` takes care of this).

## ✅ Usage

1. Clone/Download this repo.
2. Install code dependencies. Run `npm install` or `yarn install` if you prefer `yarn` over `npm`.
3. Start the development. Run `npm run dev` or `yarn dev`. This will watch `index.html` file and other files referenced inside `index.js` file.
4. If you are finished the development and want to move into production then run `npm run prod` or `yarn prod`. This will bundle all of the code, minify, and remove all unused code inside from `tailwindcss` dependencies.
