import React, { useState } from "react";
import PropTypes from "prop-types";

import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Slide, Grid, Button } from "@material-ui/core";


import Add from "@material-ui/icons/Add";

import DashboardCardPanel from "./extensions/DashboardCardPanel";



const useStyles = makeStyles({
    paper: {
        boxSizing: "border-box",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
    },
    caption: {
        color: "white",
        paddingBottom: 25
    },
    button: {
        minWidth: "20vw",
        color: "#A8C3EC",
        borderRadius: 8
    }
});

const mockCards = [
    { id: 1, type: "mastercard", cardNumber: 321321, cardHolderName: "Bojan", exparationDate: Date.now(), cvv: 255 },
    { id: 2, type: "visa", cardNumber: 555321, cardHolderName: "Marko", exparationDate: Date.now(), cvv: 256 },
    { id: 3, type: "mastercard", cardNumber: 666321, cardHolderName: "Pera", exparationDate: Date.now(), cvv: 266 },
    { id: 4, type: "revolut", cardNumber: 777321, cardHolderName: "Djole", exparationDate: Date.now(), cvv: 235 },
    { id: 6, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 271 },
    { id: 7, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 272 },
    { id: 8, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 273 },
    { id: 9, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 274 },
    { id: 10, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 275 },
    { id: 11, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 276 },
    { id: 12, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 277 },
    { id: 13, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 278 },
    { id: 14, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 279 }

]

const Dashboard = () => {
    const [rows, setRows] = useState(mockCards)
    const classes = useStyles();

    const handleDelete = id => {
        setRows(rows.filter(r => r.id !== id))
    }
    return (
        <Grid container direction="column" justify="flex-end" alignItems="center">
            <Typography variant="h5" className={classes.caption}>
                My Cards
            </Typography>
            <Slide direction="right" in mountOnEnter unmountOnExit>
                <Paper className={classes.paper}>
                    <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                            <Button variant="outlined" startIcon={<Add />} className={classes.button} component={Link} to="/zakat/card">
                                Add new card
                        </Button>
                        </Grid>
                        <Grid item>
                            <Scrollbars
                                autoHeight
                                autoHeightMin={200}
                                autoHeightMax={600}
                                renderTrackHorizontal={props => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
                                renderView={props => (
                                    <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
                                )}
                            >
                                <Grid container direction="column" alignItems="center" spacing={2}>
                                    {rows.map(card =>
                                        <Grid item key={card.id}>
                                            <DashboardCardPanel {...card} onDelete={handleDelete} />
                                        </Grid>
                                    )}
                                </Grid>
                            </Scrollbars>
                        </Grid>
                    </Grid>
                </Paper>
            </Slide>
        </Grid>
    );
};

Dashboard.propTypes = {
    rows: PropTypes.array,
    contentLoading: PropTypes.bool
};

Dashboard.defaultProps = {
    rows: [],
    contentLoading: false,

};

export default Dashboard;