import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Slide, Grid } from "@material-ui/core";


import img from "../../../assets/images/image.jpg";
import ProfileForm from "./ProfileForm";


const useStyles = makeStyles({
    container: {
        width: "100%",
        margin: 0
    },
    paper: {
        borderRadius: 30,
        padding: 60,
        // paddingTop: 30,
        // paddingBottom: 30,
        // paddingRight: 80,
        // paddingLeft: 80,
        marginTop: -75
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
});


const Profile = props => {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="flex-start" alignItems="center" spacing={0} className={classes.container}>
            <Grid item>
                <Slide direction="right" in mountOnEnter unmountOnExit>
                    <img src={img} alt="profileBackground" />
                </Slide>
            </Grid>
            <Grid item>
                <Slide direction="right" in mountOnEnter unmountOnExit>
                    <Paper className={classes.paper} elevation={20}>
                        <ProfileForm />
                    </Paper>
                </Slide>
            </Grid>
        </Grid>
    )
}

Profile.propTypes = {

}

export default Profile
