## Available Scripts in cspr-ui-library

To install:

`npm i github:make-software/cspr-ui-library`

In the project directory, you can run:

### `npm run storybook`

Runs the storybook to check all UI components.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



https://user-images.githubusercontent.com/2861356/227374604-7ccd1146-c0b4-4d00-b28f-df9da59ddd4f.mp4

- Provide global styles
  Provide a component, that can set up global styles above theme.

  Example:
  ```
  import GlobalStyles from "@make-software/cspr-ui";
  import {ThemeProvider} from "styled-components";

  <ThemeProvider theme={theme}>
    <GlobalStyles />
  </ThemeProvider>
  ```
