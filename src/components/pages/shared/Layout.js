import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'

import FooterBar from './FooterBar'

const useStyles = makeStyles(theme => ({
    root: {
        background: "linear-gradient(180deg, #66C1A0 0%, #25282C 52.08%, #181A1D 100%)",
        height: "100vh"
    },
}))

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <main className={classes.root}>
                {children}
            </main>
            <FooterBar />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout
