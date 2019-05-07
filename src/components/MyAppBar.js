import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {Link} from "react-router-dom";
import '../App.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function MyAppBar(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Link to='/home'>
                        <Typography variant="h6" className={classes.grow}>
                            Home
                        </Typography>
                    </Link>&nbsp;&nbsp;
                    <Link to='/profile'>
                        <Button>Profile</Button>
                    </Link>
                    <Link to='/portofolio'>
                        <Button>Portofolio</Button>
                    </Link>
                    <Link to='/contact'>
                        <Button>Contact</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

MyAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAppBar);
