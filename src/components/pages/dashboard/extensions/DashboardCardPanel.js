import React from 'react'
import PropTypes from 'prop-types'

import clsx from "clsx";

import { makeStyles, Grid, Paper, IconButton, Typography } from '@material-ui/core';

import { CARD_MASTERCARD, CARD_VISA, CARD_REVOLUT } from '../../../../assets/constants/appConstants';

import DeleteForever from "@material-ui/icons/DeleteForever";

import CardLogo from "../../../../assets/jss/LogoIcons";

const useStyles = makeStyles(theme => ({
    paper: {
        width: 400,
        height: 100,
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
    }
}));


const DashboardCardPanel = (props) => {
    const { id, type, cardNumber, cardHolderName, exparationDate, cvv } = props;
    const classes = useStyles(props);
    return (
        <Paper className={classes.paper}>
            <Grid container justify="space-between" alignItems="center" className={classes.container}>
                <Grid item>
                    <Grid container justify="flex-start" alignItems="center" spacing={1}>
                        <Grid item className={classes.gridItem}>
                            <CardLogo type={type} className={classes.paddingLeft} />
                        </Grid>
                        {type === CARD_MASTERCARD && <Grid item >
                            <Typography className={clsx(classes.colorWhite, classes.typography)} align="left">
                                Mastercard
                            </Typography>
                        </Grid>}
                        <Grid item xs={12}>
                            <Typography className={clsx(classes.colorWhite, classes.typography, classes.paddingLeft)}>
                                *** {cardNumber.toString().slice(0, cardNumber.toString().length - 2)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton>
                        <DeleteForever className={classes.colorWhite} />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    )
}

DashboardCardPanel.propTypes = {
    type: PropTypes.oneOf([CARD_MASTERCARD, CARD_REVOLUT, CARD_VISA])
}

export default DashboardCardPanel
