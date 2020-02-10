import React, { useState } from "react";
import PropTypes from "prop-types";

import { Scrollbars } from 'react-custom-scrollbars';
import { Link, useHistory } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Slide, Grid, Button, IconButton } from "@material-ui/core";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Add from "@material-ui/icons/Add";



import CardForm from "./form/CardForm";
import CardPanel from "./CardPanel";

const useStyles = makeStyles({
    root: {
        height: "calc(100vh - 60px)",
        position: "fixed",
        width: "100%"
    },
    paper: {

        borderRadius: 30,
        padding: 60,
    },
    caption: {
        color: "white",
        marginTop: 25
    },
    buttonBack: {
        borderRadius: 10,
        // marginLeft: 25,
        // marginTop: 15,
        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.6)"
        }
    },
    buttonBackIcon: {
        color: "#5EA7FF",
        paddingLeft: 7
    },
    // button: {
    //     width: 400,
    //     color: "#A8C3EC",
    //     borderRadius: 8
    // },

    formContainer: {
        width: 600
    }
});


const CardCreate = props => {
    const [cardNumber, setCardNumber] = useState(null)
    const [cardHolderName, setCardHolderName] = useState(null)
    const [exparationDate, setExparationDate] = useState(null)
    const [cvv, setCvv] = useState(null)
    const history = useHistory();

    const handleBack = () => history.goBack();


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container alignItems="baseline" justify="space-evenly">
                <Grid item>
                    <IconButton onClick={handleBack} className={classes.buttonBack}>
                        <ArrowBackIosIcon className={classes.buttonBackIcon} />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography variant="h5" className={classes.caption}>
                        Add new card
                    </Typography>
                </Grid>
                <Grid item />
            </Grid>
            <Grid container direction="column" justify="center" alignItems="center" spacing={10}>
                <Grid item />
                <Grid item>
                    <Slide direction="right" in mountOnEnter unmountOnExit>
                        <div>
                            <CardPanel />
                        </div>
                    </Slide>
                </Grid>
                <Grid item className={classes.formContainer}>
                    <Slide direction="right" in mountOnEnter unmountOnExit>
                        <Paper className={classes.paper}>
                            <div>
                                <CardForm />
                            </div>
                        </Paper>
                    </Slide>
                </Grid>
            </Grid>
        </div>
    )
}

CardCreate.propTypes = {

}

export default CardCreate
