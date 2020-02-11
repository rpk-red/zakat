import React from 'react'
import PropTypes from 'prop-types'

import clsx from "clsx";

import { makeStyles, Grid, Paper, Typography } from '@material-ui/core';

import { CARD_MASTERCARD, CARD_REVOLUT, CARD_VISA } from '../../../assets/constants/appConstants';
import CardLogo from '../../../assets/jss/LogoIcons';

import cardChipImg from "../../../assets/images/card/cardChip.png"


const CardChip = ({ className }) => <img src={cardChipImg} alt="cardChipIcon" className={className} />

const useStyles = makeStyles(theme => ({
    paper: {
        boxSizing: "border-box",
        maxWidth: 500,
        padding: 30,
        borderRadius: 12,
        backgroundColor: props => props.type === CARD_MASTERCARD ? "#051C3F" : props.type === CARD_REVOLUT ? "#349BFB" : "#0044AB"
    },
    container: {
        height: "inherit"
    },
    colorWhite: {
        color: "white"
    },
    typography: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "1rem",
        letterSpacing: -0.3
    },
}));


const CardPanel = props => {
    const { id, type = "mastercard", cardNumber = "7364 1835 5532 2233", exparationDate = "01/20" } = props;
    const classes = useStyles(props);
    return (
        <Paper className={classes.paper} id={`dashboard-card-panel-paper-${id}`}>
            <Grid container justify="space-evenly" alignItems="center" spacing={5}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <CardLogo type={type} />
                        </Grid>
                        {type === CARD_MASTERCARD && <Grid item >
                            <Typography className={clsx(classes.colorWhite, classes.typography)} align="left">
                                Mastercard
                            </Typography>
                        </Grid>}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <CardChip />
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography className={clsx(classes.colorWhite, classes.typography)}>
                                {cardNumber}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography align="left" className={clsx(classes.colorWhite, classes.typography)}>
                                {exparationDate}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    )
}

CardPanel.propTypes = {
    type: PropTypes.oneOf([CARD_MASTERCARD, CARD_REVOLUT, CARD_VISA])
}

export default CardPanel
