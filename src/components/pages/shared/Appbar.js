import React from 'react'
import PropTypes from 'prop-types'

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import MultiSwitch from 'react-multi-switch-toggle'
import UserAvatar from './UserAvatar';



const Appbar = props => {
    return (
        <AppBar>
            <Toolbar>
                <Grid container justify="space-between" alignItems="center">
                    <div />
                    <MultiSwitch
                        texts={[
                            "Past",
                            "Present",
                            "Potential"
                        ]}
                        selectedSwitch={2}
                        fontColor="grey"
                        eachSwitchWidth={100}
                        height="42px"
                        fontSize="14px"
                        bgColor="lightgrey"
                        selectedSwitchColor="white"
                        selectedFontColor="black"
                        borderWidth={0}
                    />
                    <UserAvatar />
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

Appbar.propTypes = {

}

export default Appbar
