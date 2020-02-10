import React from 'react'

import { HashRouter as Router } from "react-router-dom"

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';


import App from "./App";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Lato"
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none"
            }
        },
        MuiInputLabel: {
            filled: {
                color: "#A8C3EC"
            }
        },
        MuiFilledInput: {
            root: {
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8
            },
            underline: {
                borderBottom: "none",
                "&:before": {
                    borderBottom: "none"
                },
                "&:after": {
                    borderBottom: "none"
                },
                "&:hover:before": {
                    borderBottom: "none"
                },
            }
        }
    }

});
const Root = () => (
    <ThemeProvider theme={theme}>
        <Router basename='/'>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <App />
            </MuiPickersUtilsProvider>
        </Router>
    </ThemeProvider>
)


export default Root;