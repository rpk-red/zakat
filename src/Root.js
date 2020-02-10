import React from 'react'

import { BrowserRouter as Router } from "react-router-dom"

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from "./App";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Lato"
    },
});
const Root = () => (
    <ThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ThemeProvider>
)


export default Root;