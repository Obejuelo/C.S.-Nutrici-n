import React, {useState} from 'react';
import {Button, Icon, ListItemIcon, ListItemText, Popover, MenuItem, Typography} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from 'app/auth/store/actions';
// import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';

function UserMenu(props) {
    const dispatch = useDispatch();
    const user = useSelector(({ auth }) => auth.user);

    const [userMenu, setUserMenu] = useState(null);

    const userMenuClick = event => {
        setUserMenu(event.currentTarget);
    };

    const userMenuClose = () => {
        setUserMenu(null);
    };

    return (
        <React.Fragment>

            <Button className="h-64" onClick={userMenuClick}>
                <Avatar name={user.data.displayName} size='40' round />

                <div className="hidden md:flex flex-col ml-12 items-start">
                    <Typography component="span" className="normal-case font-600 flex">
                        {user.data.displayName}
                    </Typography>
                    <Typography className="text-11 capitalize" color="textSecondary">
                        {user.role.toString()}
                    </Typography>
                </div>

                <Icon className="text-16 ml-12 hidden sm:flex" variant="action">keyboard_arrow_down</Icon>
            </Button>

            <Popover
                open={Boolean(userMenu)}
                anchorEl={userMenu}
                onClose={userMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                classes={{
                    paper: "py-8"
                }}
            >
                <React.Fragment>

                    {/* {user.role === 'admin' && <MenuItem component={Link} to="/management" onClick={userMenuClose}>
                        <ListItemIcon className="min-w-40">
                            <Icon>settings</Icon>
                        </ListItemIcon>
                        <ListItemText className="pl-0" primary="Administracion"/>
                    </MenuItem>} */}

                    <MenuItem
                        onClick={() => {
                            dispatch(authActions.logoutUser());
                            userMenuClose();
                        }}>

                        <ListItemIcon className="min-w-40">
                            <Icon>exit_to_app</Icon>
                        </ListItemIcon>
                        <ListItemText className="pl-0" primary="Logout" />
                    </MenuItem>

                </React.Fragment>

            </Popover>
        </React.Fragment>
    );
}

export default UserMenu;
