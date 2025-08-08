# CSPR.design

CSPR.design is a UI library designed to provide a set of reusable components and styles for building user interfaces in the Casper ecosystem. It is built with React and styled-components, leveraging modern web technologies to create a consistent and visually appealing design system.
Adapted for use in Casper ecosystem projects, this library provides a consistent design language and functionality across applications.

## To install in yout project, run:

`npm i github:make-software/cspr-design`

## To run this project locally, follow these steps:

### Clone repository:

`git clone git@github.com:make-software/cspr-design.git`

### In the project directory, you need to build and run storybook:

 `npm run build-storybook`

 `npm run storybook`

### To make the prod build:

`npm run build:dist`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



### DEVELOPER NOTE:

 In rare cases, if your project using `vite && styled-components`, it could be a race condition with the `styled-components` 
from library.

Here a solution to fix it:

Add the following to your `vite.config.js`:
```js
resolve: {
    alias: {
        'styled-components': resolve(__dirname, 'node_modules', 'styled-components'),
    },
},
```
#### Here is the link to explanation to official documentation:
https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page