import React, { useState } from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx';
import { Link, useHistory } from "react-router-dom"

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

const Register = ({ onCreate }) => {
    const classes = useStyles();
    const history = useHistory();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = () => {
        const _errors = []

        if (!Boolean(userName)) _errors.push("userName")
        if (!Boolean(email)) _errors.push("email")
        if (!Boolean(phoneNumber)) _errors.push("phoneNumber")

        setErrors(_errors);

        if (_errors.length > 0) return;

        const registerdUsers = JSON.parse(localStorage.getItem("registerdUsers")) || [];
        const id = getRandomId();
        const users =
            registerdUsers.concat([{ userName, email, phoneNumber, id }])


        localStorage.setItem("registerdUsers", JSON.stringify(users))
        history.push(`/${PAGE_LOGIN}`);
    };

    const handleChange = e => {
        const { id, value } = e.target;
        if (id === "userName") setUserName(value)
        if (id === "email") setEmail(value)

        if (value !== null && value !== undefined && value !== "") {
            setErrors(errors.filter(el => el !== id));
        }
    };

    const handleChangePhoneNumber = phone => {
        setPhoneNumber(phone)

        if (phone !== null && phone !== undefined && phone !== "") {
            setErrors(errors.filter(el => el !== "phoneNumber"));
        }
    }


    return (
        <Grid container direction="column" spacing={10} justify="space-around" alignItems="center" className={classes.container}>
            <Grid item>
                <Grid container direction="column" alignItems="flex-start" spacing={3}>
                    <Grid item>
                        <img src={zakatLogoImg} alt="zakatLogo" />
                    </Grid>
                    <Grid item>
                        <Typography align="left" variant="h5" className={clsx(classes.title, classes.colorWhite)}>
                            Wellcome to Quantum Wallet
                        </Typography>
                        <Typography align="left" variant="subtitle1" className={classes.colorWhite}>
                            Please register in our application to continue work with your wallets
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column" spacing={3} justify="space-around" alignItems="stretch">
                    <Grid item>
                        <TextField
                            required
                            error={errors?.indexOf("userName") > -1}
                            helperText={errors?.indexOf("userName") > -1 && "this field is mandatory"}
                            onChange={handleChange}
                            value={userName}
                            InputProps={{ className: classes.input }}
                            id="userName"
                            label="User name"
                            variant="filled"
                            fullWidth />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            error={errors?.indexOf("email") > -1}
                            helperText={errors?.indexOf("email") > -1 && "this field is mandatory"}
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
                            error={errors?.indexOf("phoneNumber") > -1}
                            helperText={errors?.indexOf("phoneNumber") > -1 && "this field is mandatory"}
                            id="phoneNumber"
                            label="Phone number"
                            variant="filled"
                            fullWidth
                            value={phoneNumber}
                            onChange={phone => handleChangePhoneNumber(phone)}
                            required
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
                            Register
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.colorWhite} display="inline">
                            Already have an account?
                        </Typography>
                        <Typography className={classes.colorBlue} display="inline" component={Link} to={`/${PAGE_LOGIN}`}>
                            {" "} Log in
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

Register.propTypes = {

}

export default Register
