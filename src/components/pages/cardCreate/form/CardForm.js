import React, { useState } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx';

import { TextField, Button, Grid, makeStyles } from '@material-ui/core'

import { DatePicker } from '@material-ui/pickers';

import scanImg from "../../../../assets/images/card/scanIcon.png"
import { useParams, useHistory } from 'react-router-dom';


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

const CardForm = ({ onCreate }) => {
    const classes = useStyles();
    const { type } = useParams();
    const history = useHistory();

    const [cardNumber, setCardNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [exparationDate, setExparationDate] = useState(null);
    const [cvv, setCvv] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = () => {
        // TO DO validiraj
        let _errors = [];
        if (!Boolean(cardNumber)) _errors.push("cardNumber")
        if (!Boolean(cardHolderName)) _errors.push("cardHolderName")
        if (!Boolean(exparationDate)) _errors.push("exparationDate")
        if (!Boolean(cvv)) _errors.push("cvv")

        setErrors(_errors);

        if (_errors.length > 0) return;

        onCreate({ cardNumber, cardHolderName, exparationDate, cvv, type })
        history.goBack();


    };

    const handleChange = e => {
        const { id, value } = e.target;

        if (id === "cardNumber") setCardNumber(isNaN(parseInt(value)) ? "" : value)
        if (id === "cardHolderName") setCardHolderName(value)
        if (id === "cvv") setCvv(isNaN(parseInt(value)) ? "" : value)

        if (value !== null && value !== undefined && value !== "") {
            setErrors(errors.filter(el => el !== id));
        }
    };

    return (
        <Grid container spacing={3} justify="space-around" alignItems="center">
            <Grid item xs={12}>
                <TextField
                    InputProps={{ className: classes.input, disableUnderline: true }}
                    required
                    error={Boolean(errors?.indexOf("cardHolderName") > -1)}
                    helperText={errors?.indexOf("cardHolderName") > -1 && "this field is mandatory"}
                    id="cardHolderName"
                    label="Card holder name"
                    variant="filled"
                    value={cardHolderName}
                    onChange={handleChange}
                    fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    InputProps={{ className: classes.input, disableUnderline: true }}
                    required
                    error={Boolean(errors?.indexOf("cardNumber") > -1)}
                    helperText={errors?.indexOf("cardNumber") > -1 && "this field is mandatory"}
                    id="cardNumber"
                    label="Card number"
                    variant="filled"
                    value={cardNumber}
                    onChange={handleChange}
                    fullWidth />
            </Grid>
            <Grid item xs={6}>
                <DatePicker
                    InputProps={{ className: classes.dateInput, classes: { formControl: classes.dateMargin }, disableUnderline: true }}
                    InputLabelProps={{ classes: { formControl: classes.dateLabel } }}
                    inputProps={{ className: classes.dateInputRoot }}
                    margin="none"
                    className={classes.date}
                    required
                    error={exparationDate === null && errors?.indexOf("exparationDate") > -1}
                    helperText={exparationDate === null && errors?.indexOf("exparationDate") > -1 && "this field is mandatory"}
                    id="expirationDate"
                    label="Expiration date"
                    variant="filled"
                    fullWidth
                    clearable
                    value={exparationDate}
                    onChange={date => setExparationDate(date)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    InputProps={{ className: classes.input, disableUnderline: true }}
                    required
                    error={Boolean(errors?.indexOf("cvv") > -1)}
                    helperText={errors?.indexOf("cvv") > -1 && "this field is mandatory"}
                    id="cvv"
                    label="CVV"
                    variant="filled"
                    value={cvv}
                    onChange={handleChange}
                    fullWidth />
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
                    onClick={handleSubmit}
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
