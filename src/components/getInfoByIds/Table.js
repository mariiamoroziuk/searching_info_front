import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function InfoTable({infoList}) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">TOTALWEIGHTMG</TableCell>
                        <TableCell align="right">ROOTID</TableCell>
                        <TableCell align="right">COL</TableCell>
                        <TableCell align="right">CAS</TableCell>
                        {/*<TableCell align="right">CAS_NEED_CHECK</TableCell>*/}
                        {/*<TableCell align="right">SMILES</TableCell>*/}
                        {/*<TableCell align="right">MASS</TableCell>*/}
                        {/*<TableCell align="right">MAS_90_BB_G</TableCell>*/}
                        {/*<TableCell align="right">MAS_90_SCR_G</TableCell>*/}
                        {/*<TableCell align="right">INCDT</TableCell>*/}
                        {/*<TableCell align="right">IS_EXCLUSIVE</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {infoList.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.totalweightmg}</TableCell>
                            <TableCell align="right">{row.rootid}</TableCell>
                            <TableCell align="right">{row.col}</TableCell>
                            <TableCell align="right">{row.cas}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}