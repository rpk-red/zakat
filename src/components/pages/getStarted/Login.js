import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx';
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography, TextField } from '@material-ui/core'
import MuiPhoneNumber from 'material-ui-phone-number';

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
    colorBlue: {
        color: "#5EA7FF"
    },
    buttonGetStarted: {
        backgroundColor: "#5EA7FF",
        borderRadius: 14,
        minWidth: 200
    },
    buttonRegister: {
        backgroundColor: "#5EA7FF",
        color: "white"
    },
    title: {
        fontWeight: "bold"
    },
    input: {
        color: "#313F51",
        backgroundColor: "#F4F9FE",
    },
});

const getRandomId = () => {
    return Math.floor(Math.random() * 10000);
}

const Login = ({ onCreate }) => {
    const classes = useStyles();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState(null);

    const handleSubmit = () => {
        // TO DO validiraj
        // if (errors === null) onCreate({ userName, email, phoneNumber, errors })
        const registerdUsers = JSON.parse(localStorage.getItem("registerdUsers"));

        const userByEmail = registerdUsers.filter(user => user.email === email);
        const userByPhoneNumber = registerdUsers.filter(user => user.phoneNumber === phoneNumber)

        if (userByEmail === null) setErrors({ email: "wrong email" });
        if (userByPhoneNumber === null) setErrors({ email: "wrong phone number" });


        if (errors === null) {
            sessionStorage.setItem("logedinUser", JSON.stringify(userByPhoneNumber))
        }
    };

    useEffect(() => {
        if (errors === null) {
            const registerdUsers = JSON.parse(localStorage.getItem("registerdUsers"));
            const user = registerdUsers.filter(user => user.phoneNumber === phoneNumber && user.email === email)
            sessionStorage.setItem("logedinUser", JSON.stringify(user))
        }
    }, [email, errors, phoneNumber]);


    const handleChange = e => {
        const { id, value } = e.target;
        if (id === "userName") setUserName(value)
        if (id === "email") setEmail(value)
    };


    return (
        <Grid container direction="column" spacing={10} justify="space-around" alignItems="center" className={classes.container}>
            <Grid item>
                <Grid container direction="column" alignItems="flex-start" spacing={3}>
                    <Grid item>
                        <img src={zakatLogoImg} alt="zakatLogo" />
                    </Grid>
                    <Grid item>
                        <Typography align="left" variant="h5" className={clsx(classes.title, classes.colorWhite)}>
                            Wellcome to Zakat
                        </Typography>
                        <Typography align="left" variant="subtitle1" className={classes.colorWhite}>
                            Please login to continue
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column" spacing={3} justify="space-around" alignItems="stretch">
                    <Grid item>
                        <TextField
                            error={Boolean(errors !== null && errors["email"])}
                            helperText={errors !== null && errors["email"]}
                            required
                            onChange={handleChange}
                            value={email}
                            InputProps={{ className: classes.input }}
                            id="email"
                            label="E-mail"
                            variant="filled"
                            fullWidth />
                    </Grid>
                    <Grid item>
                        <MuiPhoneNumber
                            defaultCountry='us'
                            InputProps={{ className: classes.input }}
                            id="phoneNumber"
                            label="Phone number"
                            variant="filled"
                            fullWidth
                            value={phoneNumber}
                            onChange={phone => setPhoneNumber(phone)}
                            required
                            error={Boolean(errors !== null && errors["phoneNumber"])}
                            helperText={errors !== null && errors["phoneNumber"]}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.buttonRegister}
                            fullWidth
                            onClick={handleSubmit}
                        >
                            Log in
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.colorWhite} display="inline">
                            Dont have an account?
                        </Typography>
                        <Typography className={classes.colorBlue} display="inline" component={Link} to={`/${PAGE_REGISTER}`}>
                            {" "} Register
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

Login.propTypes = {

}

export default Login
