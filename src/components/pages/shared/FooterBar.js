import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Link, useLocation } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import History from "@material-ui/icons/History";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
import CreditCard from "@material-ui/icons/CreditCard";
import { PAGE_DASHBOARD, PAGE_HOME, PAGE_USER_PROFILE, PAGE_TRANSACTIONS_HISTORY, BASE, PAGE_CREATE_CARD, PAGE_CARD } from '../../../assets/constants/appConstants';


const useStyles = makeStyles(theme => ({

    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: theme.palette.background.paper
    }
}));

const FooterBar = () => {
    const classes = useStyles();
    const { pathname } = useLocation();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if (pathname.includes(PAGE_HOME)) setValue(0)
        if (pathname === `/${BASE}`) setValue(0)
        if (pathname === `/${BASE}/`) setValue(0)
        if (pathname.includes(PAGE_CARD)) setValue(1)
        if (pathname.includes(PAGE_TRANSACTIONS_HISTORY)) setValue(2)
        if (pathname.includes(PAGE_USER_PROFILE)) setValue(3)
    }, [pathname]);

    const showFooter = pathname === `/${BASE}/` ||
        pathname === `/${BASE}` ||
        pathname.includes(PAGE_HOME) ||
        pathname.includes(PAGE_DASHBOARD) ||
        pathname.includes(PAGE_TRANSACTIONS_HISTORY) ||
        pathname.includes(PAGE_USER_PROFILE) ||
        pathname.includes(PAGE_CARD)

    return (
        <>
            {showFooter && <AppBar className={classes.appBar} elevation={24}>
                <Toolbar>
                    <Grid container justify="center" alignItems="center">
                        <Tabs
                            value={value}
                            variant="fullWidth"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="icon tabs example"
                        >
                            <Tab component={Link} icon={<Home />} to={`/${PAGE_HOME}`} aria-label="home" />
                            <Tab component={Link} icon={<CreditCard />} to={`/${PAGE_CARD}`} aria-label="dashboard" />
                            <Tab component={Link} icon={<History />} to={`/${PAGE_TRANSACTIONS_HISTORY}`} aria-label="history" />
                            <Tab component={Link} icon={<Person />} to={`/${PAGE_USER_PROFILE}`} aria-label="profile" />
                        </Tabs>
                    </Grid>
                </Toolbar>
            </AppBar>}
        </>
    )
}

FooterBar.propTypes = {

}

export default FooterBar
