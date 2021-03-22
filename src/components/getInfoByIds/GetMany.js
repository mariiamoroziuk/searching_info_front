import React, {useState} from 'react';
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
import {INFO_ACTIONS} from "../../redux/info/action";
import {useDispatch, useSelector} from "react-redux";
import {saveToFile} from "../../utils/saveToFile";
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


function GetMany(props) {
    const { classes } = props;
    const dispatch = useDispatch();
    const [ids, setIds] = useState('');

    const getInfo = () => {
        if(ids) {
            let idsArr = ids.split("\n").map((id) => id.trim());
            dispatch(INFO_ACTIONS.getInfoByManyIds(idsArr))
        };
    }

    const info = useSelector(store => store.info.manyIdsInfo.ok);

    const handleInput = (e) => {
        setIds(e.target.value);
    }

    const clear = () => {
        setIds('');
        dispatch({type: "CLEAR_MANY_IDS_INFO"})
    }

    const export2txt = () => {
        if(info)saveToFile(info);
    }

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
                                multiline
                                fullWidth
                                rowsMax="6"
                                value={ids}
                                onChange={handleInput}
                                placeholder="Search by ids"
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
                            <Button variant="contained" onClick={export2txt} color="primary" className={classes.addUser}>
                                Save to file
                            </Button>
                            <Tooltip title="Clear">
                                <IconButton>
                                    <RefreshIcon onClick={clear} className={classes.block} color="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper}>
                <Typography color="textSecondary" align="center">
                    {info ?
                        (<InfoTable infoList={info}/>) :
                        <div>No info on your request yet</div>
                    }
                </Typography>
            </div>
        </Paper>
    );
}

GetMany.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GetMany);