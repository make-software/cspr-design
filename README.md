## Available Scripts in CSPR.design

To install:

`npm i github:make-software/cspr-ui-library`

In the project directory, you can run:

### `npm run storybook`

Runs the storybook to check all UI components.

### `npm run build:dist`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



https://user-images.githubusercontent.com/2861356/227374604-7ccd1146-c0b4-4d00-b28f-df9da59ddd4f.mp4


#### DEVELOPER NOTE:

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
##### Here is the link to explanation to official documentation:
https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page