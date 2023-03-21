// themeDecorator.js
import React from "react"
import {ThemeProvider} from "styled-components";
import {themeConfig} from '../src/lib'

const ThemeDecorator = storyFn => (
    <ThemeProvider theme={themeConfig.light}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator