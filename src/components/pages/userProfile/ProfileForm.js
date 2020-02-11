import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Button, Grid, makeStyles, Typography } from '@material-ui/core'

import MuiPhoneNumber from 'material-ui-phone-number';



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
    dateLabel: {
        color: "#A8C3EC",
        zIndex: 1,
        paddingLeft: 12
    },
    title: {
        color: "#3D5E87"
    },
    buttonLogout: {
        borderColor: "#5EA7FF",
        color: "#5EA7FF"
    },
    dropdown: {
        position: "relative",
        backgroundColor: "grey"
    }
});

const ProfileForm = props => {
    const classes = useStyles()
    const user = {
        userName: "Test User",
        email: "testUser@test.com",
        phoneNumber: "1323123211"
    }
    const handleChange = e => {

    }
    return (
        <Grid container direction="column" spacing={3} justify="space-around" alignItems="stretch">
            <Grid item>
                <Typography variant="h5" className={classes.title}>
                    Personal information
                </Typography>
            </Grid>
            <Grid item>
                <TextField value={user.userName} disabled InputProps={{ className: classes.input }} id="userName" label="User name" variant="filled" fullWidth />
            </Grid>
            <Grid item>
                <TextField value={user.email} disabled InputProps={{ className: classes.input }} id="email" label="E-mail" variant="filled" fullWidth />
            </Grid>
            <Grid item>
                <MuiPhoneNumber
                    defaultCountry='us'
                    InputProps={{ className: classes.input }}
                    id="phoneNumber"
                    label="Phone number"
                    variant="filled"
                    disableDropdown
                    fullWidth
                    disabled
                    value={user.phoneNumber}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    size="large"
                    className={classes.bottonColor}
                    fullWidth
                >
                    Security
                </Button>
            </Grid>
            <Grid item>
                <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    className={classes.buttonLogout}
                >
                    Log out
            </Button>
            </Grid>

        </Grid>
    )
}

ProfileForm.propTypes = {

}

export default ProfileForm
