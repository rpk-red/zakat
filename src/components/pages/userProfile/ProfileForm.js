import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Button, Grid, makeStyles, Typography } from '@material-ui/core'

import MuiPhoneNumber from 'material-ui-phone-number';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles({

    input: {
        color: "#313F51",
        backgroundColor: "#F4F9FE",
    },
    date: {
        backgroundColor: "#F4F9FE",
        borderRadius: 8,
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.13)"
        }
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
    dateLabel: {
        color: "#A8C3EC",
        zIndex: 1,
        paddingLeft: 12
    },
    dateInputRoot: {
        padding: "27px 12px 10px"
    },
    bottonColor: {
        color: "white",
        backgroundColor: "#5EA7FF"
    },
    title: {
        color: "#3D5E87"
    },
    buttonLogout: {
        borderColor: "#5EA7FF",
        color: "#5EA7FF"
    }
});

const ProfileForm = props => {
    const classes = useStyles()
    const history = useHistory();

    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const handleLogout = () => {
        sessionStorage.setItem("loggedInUser", undefined)
        history.push(`/`);
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
                    fullWidth
                    disabled
                    value={user.phoneNumber}
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
                    onClick={handleLogout}
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
