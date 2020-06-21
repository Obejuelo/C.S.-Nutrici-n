import React from 'react';
import {AppBar, Hidden, Icon} from '@material-ui/core';
import {Scrollbars} from '@core';
import clsx from 'clsx';
import Logo from 'app/layouts/shared-components/Logo';
// import NavbarFoldedToggleButton from 'app/layouts/shared-components/NavbarFoldedToggleButton';
import NavbarMobileToggleButton from 'app/layouts/shared-components/NavbarMobileToggleButton';
import Navigation from 'app/layouts/shared-components/Navigation';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    content: {
        overflowX                   : 'hidden',
        overflowY                   : 'auto',
        '-webkit-overflow-scrolling': 'touch',
        background                  : 'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
        backgroundRepeat            : 'no-repeat',
        backgroundSize              : '100% 40px, 100% 10px',
        backgroundAttachment        : 'local, scroll'
    },
    navbar: {
        backgroundColor             : '#2D313F',
    }
});

function NavbarLayout1(props) {
    const classes = useStyles();

    return (
        <div className={clsx("flex flex-col overflow-hidden h-full", props.className, classes.navbar)}>

            <AppBar
                position="static"
                elevation={0}
                className="flex flex-row items-center flex-shrink h-64 min-h-64 pl-20 pr-12"
                style={{backgroundColor: '#2D313F'}}
            >

                <div className="flex flex-1 pr-8">
                    <Logo/>
                </div>

                {/* <Hidden mdDown>
                    <NavbarFoldedToggleButton className="w-40 h-40 p-0"/>
                </Hidden> */}

                <Hidden lgUp>
                    <NavbarMobileToggleButton className="w-40 h-40 p-0">
                        <Icon>arrow_back</Icon>
                    </NavbarMobileToggleButton>
                </Hidden>
            </AppBar>

            <Scrollbars className={clsx(classes.content)} option={{suppressScrollX: true}}>

                <Navigation layout="vertical"/>

            </Scrollbars>
        </div>
    );
}

export default NavbarLayout1;


