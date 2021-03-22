import React, { useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import { INFO_ACTIONS } from "../../redux/info/action";
import {useDispatch, useSelector} from "react-redux";
import InfoTable from "./Table";

const styles = (theme) => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '40px 16px',
    },
});

function GetOne(props) {
    const { classes } = props;
    const dispatch = useDispatch();
    const [infoId, setInfoId] = useState('');

    const handleInput = (e) => {
        setInfoId(e.target.value);
    }

    const getInfo = () => {
        if(infoId) dispatch(INFO_ACTIONS.getInfoByOneId(infoId));
    }

    const info = useSelector(store => store.info.oneIdInfo);

    return (
        <Paper className={classes.paper}>
            <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon className={classes.block} color="inherit" />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search by id"
                                value={infoId}
                                onChange={handleInput}
                                InputProps={{
                                    disableUnderline: true,
                                    className: classes.searchInput,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={getInfo} color="primary" className={classes.addUser}>
                                Get info
                            </Button>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon className={classes.block} color="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper}>
                <Typography color="textSecondary" align="center">
                    {info.id ?
                        <div><InfoTable infoList={[info]}/></div> :
                        <div>No info on your request yet</div>
                            }
                </Typography>
            </div>
        </Paper>
    );
}

GetOne.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GetOne);