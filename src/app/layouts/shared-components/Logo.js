import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root      : {
        '& .logo-icon'                : {
            width     : 24,
            height    : 24,
            transition: theme.transitions.create(['width', 'height'], {
                duration: theme.transitions.duration.shortest,
                easing  : theme.transitions.easing.easeInOut
            })
        },
        '& .react-badge, & .logo-text': {
            transition: theme.transitions.create('opacity', {
                duration: theme.transitions.duration.shortest,
                easing  : theme.transitions.easing.easeInOut
            })
        }
    }
}));

function Logo() {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, "flex items-center")}>
            {/* <img className="logo-icon" src="assets/images/logos/.svg" alt="logo"/> */}
            <div className={clsx("flex items-center ml-12 mr-8 py-4 px-8 rounded")}>
                {/* <img className="react-logo" src=""/> */}
            </div>
        </div>
    );
}

export default Logo;
