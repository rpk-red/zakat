import React, { useState } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx';

import { TextField, Button, Grid, makeStyles } from '@material-ui/core'

import { DatePicker } from '@material-ui/pickers';

import scanImg from "../../../../assets/images/card/scanIcon.png"


const ScanIcon = props => <img src={scanImg} alt="scanIcon" />


const useStyles = makeStyles({
    date: {
        backgroundColor: "#F4F9FE",
        borderRadius: 8,
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.13)"
        }
    },
    input: {
        color: "#313F51",
        backgroundColor: "#F4F9FE",
    },
    dateInput: {
        color: "#313F51",
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
        "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none"
        },
    },
    dateMargin: {
        "label + &": {
            marginTop: 0
        }
    },
    dateInputRoot: {
        padding: "27px 12px 10px"
    },
    bottonColor: {
        color: "white",
        backgroundColor: "#5EA7FF"
    },
    bottonNewCard: {
        minWidth: 200
    },
    dateLabel: {
        color: "#A8C3EC",
        paddingLeft: 12,
    },
});

const CardForm = props => {
    const classes = useStyles()
    const [selectedDate, handleDateChange] = useState(null); // TODO: do this in root

    return (
        <Grid container spacing={3} justify="space-around" alignItems="center">
            <Grid item xs={12}>
                <TextField InputProps={{ className: classes.input }} required id="cardHolderName" label="Card holder name" variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField InputProps={{ className: classes.input }} required id="cardNumber" label="Card number" variant="filled" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <DatePicker
                    InputProps={{ className: classes.dateInput, classes: { formControl: classes.dateMargin } }}
                    InputLabelProps={{ classes: { formControl: classes.dateLabel } }}
                    inputProps={{ className: classes.dateInputRoot }}
                    margin="none"
                    className={classes.date}
                    required id="expirationDate"
                    label="Expiration date"
                    variant="filled"
                    fullWidth
                    clearable
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField InputProps={{ className: classes.input }} required id="cvv" label="CVV" variant="filled" fullWidth />
            </Grid>
            <Grid item >
                <Button
                    variant="contained"
                    size="large"
                    className={classes.bottonColor}
                >
                    <ScanIcon />
                </Button>
            </Grid>
            <Grid item >
                <Button
                    variant="contained"
                    size="large"
                    className={clsx(classes.bottonNewCard, classes.bottonColor)}
                >
                    Add card
            </Button>
            </Grid>

        </Grid>
    )
}

CardForm.propTypes = {

}

export default CardForm
