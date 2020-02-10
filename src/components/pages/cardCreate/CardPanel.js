import React from 'react'
import PropTypes from 'prop-types'

import clsx from "clsx";

import { makeStyles, Grid, Paper, IconButton, Typography } from '@material-ui/core';

import { CARD_MASTERCARD, CARD_REVOLUT, CARD_VISA } from '../../../assets/constants/appConstants';
import CardLogo from '../../../assets/jss/LogoIcons';

import cardChipImg from "../../../assets/images/card/cardChip.png"


const CardChip = ({ className }) => <img src={cardChipImg} alt="cardChipIcon" className={className} />

const useStyles = makeStyles(theme => ({
    paper: {
        width: 500,
        height: 200,
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
        fontSize: 16,
        letterSpacing: -0.3
    },
    paddingLeft: {
        paddingLeft: 20
    },
    gridItem: {
        textAlign: "center"
    },
    itemLastChild: {
        width: "calc(100% - 20px)"
    }
}));


const CardPanel = (props) => {
    const { id, type = "mastercard", cardNumber = "7364 1835 5532 2233", exparationDate = "01/20" } = props;
    const classes = useStyles(props);
    return (
        <Paper className={classes.paper} id={`dashboard-card-panel-paper-${id}`}>
            <Grid container direction="column" justify="space-evenly" alignItems="flex-start" spacing={5}>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item className={classes.gridItem}>
                            <CardLogo type={type} className={classes.paddingLeft} />
                        </Grid>
                        {type === CARD_MASTERCARD && <Grid item >
                            <Typography className={clsx(classes.colorWhite, classes.typography)} align="left">
                                Mastercard
                            </Typography>
                        </Grid>}
                    </Grid>
                </Grid>
                <Grid item>
                    <CardChip className={classes.paddingLeft} />
                </Grid>
                <Grid item className={classes.itemLastChild}>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography className={clsx(classes.colorWhite, classes.typography, classes.paddingLeft)}>
                                {cardNumber}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography align="left" className={clsx(classes.colorWhite, classes.typography, classes.paddingLeft)}>
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
