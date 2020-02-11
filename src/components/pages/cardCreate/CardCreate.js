import React from "react";
import PropTypes from "prop-types";

import { useHistory, useParams } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Slide, Grid, IconButton } from "@material-ui/core";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



import CardForm from "./form/CardForm";
import CardPanel from "./CardPanel";

const useStyles = makeStyles({
    container: {
        width: "100%",
        margin: 0
    },
    paper: {
        boxSizing: "border-box",
        borderRadius: 30,
        padding: 60,
        maxWidth: 500
    },
    caption: {
        color: "white",
        paddingTop: 25
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


const CardCreate = ({ onCreate }) => {
    const history = useHistory();
    const { type } = useParams()

    const handleBack = () => history.goBack();


    const classes = useStyles();
    return (
        <Grid container alignItems="baseline" justify="center" className={classes.container}>
            <Grid item>
                <Grid container alignItems="baseline" justify="center" spacing={4}>
                    <Grid item xs={12}>
                        <Grid container alignItems="baseline" justify="space-evenly">
                            <Grid item >
                                <IconButton onClick={handleBack} className={classes.buttonBack}>
                                    <ArrowBackIosIcon className={classes.buttonBackIcon} />
                                </IconButton>
                            </Grid>
                            <Grid item >
                                <Typography variant="h5" className={classes.caption}>
                                    Add new card
                                </Typography>
                            </Grid>
                            <Grid item />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} />
                    <Grid item>
                        <Slide direction="right" in mountOnEnter unmountOnExit>
                            <div>
                                <CardPanel type={type} />
                            </div>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} />
                    <Grid item>
                        <Slide direction="right" in mountOnEnter unmountOnExit>
                            <Paper className={classes.paper}>
                                <CardForm onCreate={onCreate} />
                            </Paper>
                        </Slide>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

CardCreate.propTypes = {

}

export default CardCreate
