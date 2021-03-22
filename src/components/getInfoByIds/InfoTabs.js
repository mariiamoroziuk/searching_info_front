import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';
import GetOne from "./GetOne";
import GetMany from "./GetMany";

const styles = (theme) => ({
    secondaryBar: {
        zIndex: 0,
    },
    main: {
        flex: 1,
        padding: theme.spacing(6, 4),
        background: '#eaeff1',
    },
});

function InfoTabs(props) {
    const { classes } = props;
    const [value, setValue] = React.useState("one");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <AppBar
                component="div"
                className={classes.secondaryBar}
                color="primary"
                position="static"
                elevation={0}
            >
                <Tabs value={value} onChange={handleChange} textColor="inherit">
                    <Tab value="one" textColor="inherit" label="Get one" />
                    <Tab value="two" textColor="inherit" label="Get many" />
                </Tabs>
            </AppBar>
            {value === "one" && (
                <main className={classes.main}>
                    <GetOne />
                </main>
            )}
            {value === "two" && (
                <main className={classes.main}>
                    <GetMany />
                </main>
            )}
        </React.Fragment>
    );
}

InfoTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(InfoTabs);