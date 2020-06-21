import React from 'react';
import {AppBar, Hidden, Toolbar} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import NavbarMobileToggleButton from 'app/layouts/shared-components/NavbarMobileToggleButton';
import UserMenu from 'app/layouts/shared-components/UserMenu';
import {useSelector} from 'react-redux';

// const useStyles = makeStyles(theme => ({
//     separator: {
//         width          : 1,
//         height         : 64,
//         backgroundColor: theme.palette.divider
//     }
// }));

function ToolbarLayout1(props) {

    const config = useSelector(({core}) => core.settings.current.layout.config);
    const toolbarTheme = useSelector(({core}) => core.settings.toolbarTheme);

    // const classes = useStyles(props);

    return (
        <ThemeProvider theme={toolbarTheme}>
            <AppBar id="core-toolbar" className="flex relative z-10" color="default">
                <Toolbar className="pr-20 pl-0 flex flex-row justify-between">

                    {config.navbar.display && config.navbar.position === 'left' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton className="w-64 h-64 p-0"/>
                            {/* <div className={classes.separator}/> */}
                        </Hidden>
                    )}

                    <div></div>

                    <div className="flex self-end">
                        <UserMenu/>
                    </div>
                    
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default ToolbarLayout1;
