import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx';
import { Link } from "react-router-dom"

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Grid, Typography, MobileStepper, IconButton } from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import zakatLogoImg from "../../../assets/images/zakatLogo.png";
import { PAGE_REGISTER, PAGE_LOGIN } from '../../../assets/constants/appConstants';


const useStyles = makeStyles({
    container: {
        width: "100%",
        margin: 0
    },
    stepper: {
        backgroundColor: "transparent",
        minWidth: 200,
        color: "white"
    },
    dotActive: {
        backgroundColor: "#5EA7FF"
    },
    colorWhite: {
        color: "white"
    },
    buttonGetStarted: {
        backgroundColor: "#5EA7FF",
        border: 8,
        minWidth: 200
    },
    buttonLogin: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        border: 8,
        minWidth: 200
    },
    title: {
        fontWeight: "bold"
    },

});

const GetStarted = props => {
    const classes = useStyles();
    const theme = useTheme();

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <Grid container direction="column" spacing={10} justify="space-around" alignItems="center" className={classes.container}>
            <Grid item>
                <Grid container direction="column" alignItems="center" spacing={3}>
                    <Grid item>
                        <img src={zakatLogoImg} alt="zakatLogo" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" className={clsx(classes.title, classes.colorWhite)}>
                            ZAKAT
                </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography align="center" variant="h5" className={clsx(classes.title, classes.colorWhite)}>
                    {activeStep === 0 && "Keep your cards in one place"}
                    {activeStep === 1 && "Those an equal point no years do"}
                    {activeStep === 2 && "Do play they miss give so up"}
                </Typography>
                <Typography align="center" variant="subtitle1" className={classes.colorWhite}>
                    {activeStep === 0 && "Keep your cards in one safe place. We can secure your information"}
                    {activeStep === 1 && "Advantages entreaties mr he apartments do"}
                    {activeStep === 2 && "Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body."}
                </Typography>
            </Grid>
            <Grid item>
                <MobileStepper
                    variant="dots"
                    steps={3}
                    position="static"
                    classes={{ dotActive: classes.dotActive }}
                    activeStep={activeStep}
                    className={classes.stepper}
                    nextButton={
                        <IconButton size="small" onClick={handleNext} disabled={activeStep === 2}>
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </IconButton>
                    }
                    backButton={
                        <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        </IconButton>
                    }
                />
            </Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center" spacing={3}>
                    <Grid item>
                        <Button
                            variant="contained"
                            size="large"
                            className={clsx(classes.buttonGetStarted, classes.colorWhite)}
                            fullWidth
                            component={Link}
                            to={`/${PAGE_REGISTER}`}
                        >
                            Get Started
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to={`/${PAGE_LOGIN}`}
                            variant="outlined"
                            size="large"
                            fullWidth
                            className={clsx(classes.buttonLogin, classes.colorWhite)}
                        >
                            Log in
                    </Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

GetStarted.propTypes = {

}

export default GetStarted
