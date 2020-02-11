import React from "react";
import PropTypes from "prop-types";

import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Slide, Grid, Button } from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


import Add from "@material-ui/icons/Add";

import DashboardCardPanel from "./extensions/DashboardCardPanel";
import { PAGE_CREATE_CARD, BASE, CARD_MASTERCARD, CARD_REVOLUT, CARD_VISA } from "../../../assets/constants/appConstants";



const useStyles = makeStyles({
    paper: {
        boxSizing: "border-box",
        borderRadius: 30,
        padding: 30,
    },
    caption: {
        color: "white",
        paddingBottom: 25,
        paddingTop: 25
    },
    button: {
        minWidth: "20vw",
        color: "#A8C3EC",
        borderRadius: 8
    }
});

const Dashboard = ({ cards, onDelete }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <>
            <Grid container direction="column" justify="flex-end" alignItems="center">
                <Typography variant="h5" className={classes.caption}>
                    My Cards
            </Typography>
                <Slide direction="right" in mountOnEnter unmountOnExit>
                    <Paper className={classes.paper}>
                        <Grid container direction="column" alignItems="center" spacing={2} >
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    startIcon={<Add />}
                                    className={classes.button}
                                    onClick={handleToggle}
                                    ref={anchorRef}
                                >
                                    Add new card
                                </Button>
                            </Grid>
                            <Grid item>
                                <Scrollbars
                                    autoHeight
                                    autoHeightMin={"20vh"}
                                    autoHeightMax={"75vh"}
                                    renderTrackHorizontal={props => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
                                    renderView={props => (
                                        <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
                                    )}
                                >
                                    <Grid container direction="column" alignItems="center" spacing={2}>
                                        {cards.map(card =>
                                            <Grid item key={card.id}>
                                                <DashboardCardPanel {...card} onDelete={onDelete} />
                                            </Grid>
                                        )}
                                    </Grid>
                                </Scrollbars>
                            </Grid>
                        </Grid>
                    </Paper>
                </Slide>
            </Grid>
            <Popper open={open} style={{ minWidth: "20vw" }} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem
                                        component={Link}
                                        to={`/${PAGE_CREATE_CARD}/${CARD_MASTERCARD}`}
                                        onClick={handleClose}>
                                        {CARD_MASTERCARD}
                                    </MenuItem>

                                    <MenuItem
                                        component={Link}
                                        to={`/${PAGE_CREATE_CARD}/${CARD_REVOLUT}`}
                                        onClick={handleClose}>
                                        {CARD_REVOLUT}
                                    </MenuItem>

                                    <MenuItem component={Link}
                                        to={`/${PAGE_CREATE_CARD}/${CARD_VISA}`}
                                        onClick={handleClose}>
                                        {CARD_VISA}
                                    </MenuItem>

                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
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