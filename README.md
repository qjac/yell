# Web Starter Kit

A ready to rock collection of npm modules and config files to jumpstart web projects.

## To Use

-   Run npm install and npm start to develop
-   Add project files to src/
-   When ready to deploy, run npm build to generate dist/

## What's Included?

-   .gitignore: Not everything needs a backup.
-   Webpack: Automate all the things. Includes seperate dev and prod config files
-   Babel: Use new js in old browsers
-   HTML Webpack Plugin: Bundles it all up and outputs a browser-ready HTML file with auto-generate script tags
-   File loaders (CSS, SCSS, XML, CSV, HTML, image): The fun's not just for js! Get all the file types in on this sweet aqutomation
-   Sass: Write vanilla CSS or SCSS—choose your own adventure
-   Post CSS and Autoprefixer: No more worrying about polyfills or vendor prefixes
-   CSS Extraction: Pulls CSS into seperate file (as opposed to default style tag in HTML file)
-   Eslint and Prettier: Save me from myself with linting and autoformatting
    (There are a number of ways to get them to play nicely together. This is the method I followed: https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99)
-   Clean Webpack Plugin: Removes old dist/ before building a new one. No dusty files here
-   Lodash: Needed for webpack setup tutorial. Remove if not needed.

### For the Future

-   Set up a11y linting! https://www.npmjs.com/package/eslint-plugin-jsx-a11y
-   Integrate a standard project setup/directory structure
-   Integrate HTML boilerplate
-   Add css reset and basic style boilerplate
-   Instead of using <https://realfavicongenerator.net/>, automate it with <https://github.com/itgalaxy/favicons>
-   If inline SVGs are wanted, add <https://github.com/thegc/html-webpack-inline-svg-plugin>
-   Look into automating HTML validation
-   Add <https://webpack.js.org/plugins/uglifyjs-webpack-plugin/>
-   Add <https://github.com/NMFR/optimize-css-assets-webpack-plugin>
