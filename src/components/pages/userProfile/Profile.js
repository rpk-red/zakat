import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Slide, Grid } from "@material-ui/core";


import img from "../../../assets/images/image.jpg";
import ProfileForm from "./ProfileForm";


const useStyles = makeStyles({
    root: {
        height: "calc(100vh - 60px)",
        position: "fixed",
        width: "100%"
    },
    paper: {

        borderRadius: 30,
        padding: 60,
        marginTop: -85
    },
    caption: {
        color: "white",
        marginTop: 25
    },
    buttonBack: {
        borderRadius: 10,
        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.6)"
        }
    },
    buttonBackIcon: {
        color: "#5EA7FF",
        paddingLeft: 7
    },

    formContainer: {
        width: 600
    }
});


const Profile = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center" spacing={0}>
                <Grid item>
                    <Slide direction="up" in mountOnEnter unmountOnExit>
                        <img src={img} alt="profileBackground" width="600" height="400" />
                    </Slide>
                </Grid>
                <Grid item className={classes.formContainer}>
                    <Slide direction="up" in mountOnEnter unmountOnExit>
                        <Paper className={classes.paper} elevation={20}>
                            <div>
                                <ProfileForm />
                            </div>
                        </Paper>
                    </Slide>
                </Grid>
            </Grid>
        </div>
    )
}

Profile.propTypes = {

}

export default Profile
