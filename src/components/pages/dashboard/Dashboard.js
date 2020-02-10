import React, { useState } from "react";
import PropTypes from "prop-types";

import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Slide, Grid, Button } from "@material-ui/core";


import Add from "@material-ui/icons/Add";

import DashboardCardPanel from "./extensions/DashboardCardPanel";



const useStyles = makeStyles({
    root: {
        height: "calc(100vh - 60px)"
    },
    paper: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 15,
    },
    caption: {
        color: "white",
        marginBottom: 25
    },
    button: {
        width: 400,
        color: "#A8C3EC",
        borderRadius: 8
    }
});

const mockCards = [
    { id: 1, type: "mastercard", cardNumber: 321321, cardHolderName: "Bojan", exparationDate: Date.now(), cvv: 255 },
    { id: 2, type: "visa", cardNumber: 555321, cardHolderName: "Marko", exparationDate: Date.now(), cvv: 256 },
    { id: 3, type: "mastercard", cardNumber: 666321, cardHolderName: "Pera", exparationDate: Date.now(), cvv: 266 },
    { id: 4, type: "revolut", cardNumber: 777321, cardHolderName: "Djole", exparationDate: Date.now(), cvv: 275 },
    { id: 5, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 277 }
]

const Dashboard = () => {
    const [rows, setRows] = useState(mockCards)
    const classes = useStyles();

    const handleDelete = id => {
        setRows(rows.filter(r => r.id !== id))
    }
    return (
        <Grid container direction="column" justify="flex-end" alignItems="center" className={classes.root}>
            <Typography variant="h5" className={classes.caption}>
                My Cards
            </Typography>
            <Slide direction="right" in mountOnEnter unmountOnExit>
                <Paper className={classes.paper}>
                    <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                            <Button variant="outlined" startIcon={<Add />} className={classes.button} component={Link} to="card">
                                Add new card
                        </Button>
                        </Grid>
                        <Grid item>
                            <Scrollbars
                                style={{ width: 625, height: 700 }}
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