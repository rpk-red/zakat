import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx';
import { Link, useHistory } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography, TextField } from '@material-ui/core'
import MuiPhoneNumber from 'material-ui-phone-number';

import zakatLogoImg from "../../../assets/images/zakatLogo.png";
import { PAGE_REGISTER, PAGE_LOGIN, PAGE_HOME } from '../../../assets/constants/appConstants';



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

const excludedItemArray = (array, item) => {
    const arr = array ? [...array] : [];
    var index = arr.indexOf(item);
    if (index !== -1) arr.splice(index, 1);
    if (arr.length === 0) return undefined;
    return arr;
}

const Login = ({ onCreate }) => {
    const classes = useStyles();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState(null);

    const handleSubmit = () => {
        // TO DO validiraj
        // if (errors === null) onCreate({ userName, email, phoneNumber, errors })
        const registerdUsers = JSON.parse(localStorage.getItem("registerdUsers"));
        let _errors = [];

        const userByEmail = registerdUsers.find(user => user.email === email);
        const userByPhoneNumber = registerdUsers.find(user => user.phoneNumber === phoneNumber)

        const emailIsValid = Boolean(userByEmail);
        const phoneIsValid = Boolean(userByPhoneNumber);

        if (!emailIsValid) _errors = _errors?.concat(["email"]);
        if (!phoneIsValid) _errors = _errors?.concat(["phoneNumber"]);

        if (_errors.length > 0 || !emailIsValid || !phoneIsValid) {
            setErrors(_errors)
            return;
        }

        sessionStorage.setItem("logedinUser", JSON.stringify(userByPhoneNumber))
        history.push(`/${PAGE_HOME}`);


    };

    useEffect(() => {
        if (errors?.phoneNumber && errors?.email) {
            const registerdUsers = JSON.parse(localStorage.getItem("registerdUsers"));
            const user = registerdUsers.find(user => user.phoneNumber === phoneNumber && user.email === email)
            sessionStorage.setItem("logedinUser", JSON.stringify(user))
        }
    }, [email, errors, phoneNumber]);


    const handleChange = e => {
        const { id, value } = e.target;
        if (id === "email") setEmail(value)
    };

    console.log("erorrs", errors);
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
                            error={Boolean(errors !== null && errors.indexOf("email") > -1)}
                            helperText={errors !== null && errors.indexOf("email") > -1 && "wrong email"}
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
                            error={Boolean(errors !== null && errors.indexOf("phoneNumber") > -1)}
                            helperText={errors !== null && errors.indexOf("phoneNumber") > -1 && "wrong phone number"}
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
