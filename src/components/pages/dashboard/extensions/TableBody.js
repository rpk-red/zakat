import React, { memo } from "react";
import PropTypes from "prop-types";

import isEmpty from "lodash/isEmpty";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";

import DashboardCardPanel from "./DashboardCardPanel";
import { EMPTY_TABLE } from "../../../../assets/constants/appConstants";

const TBody = ({ rows, contentLoading }) => {
    const classes = {}
    return (
        <TableBody>
            {!isEmpty(rows)
                ? rows.map(row => (
                    <TableRow key={row.campaignId}>
                        <TableCell className={classes.tableCell}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <DashboardCardPanel
                                        data={row}
                                    />
                                </Grid>
                            </Grid>
                        </TableCell>
                    </TableRow>
                ))
                : !contentLoading && (
                    <TableRow>
                        <TableCell align="center">{EMPTY_TABLE}</TableCell>
                    </TableRow>
                )}
        </TableBody>
    );
};

TBody.propTypes = {
    rows: PropTypes.array
};

export default TBody;
