import React from 'react';
import {Icon, ListItem, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {NavLinkAdapter, CoreUtils} from '@core';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector} from 'react-redux';
import * as Actions from 'app/store/actions';
import NavBadge from '../NavBadge';

const useStyles = makeStyles(theme => ({
    item: {
        height                     : 60,
        paddingRight               : 12,
        '&.active'                 : {
            backgroundColor            : '#202228',
            color                      : theme.palette.secondary.contrastText + '!important',
            pointerEvents              : 'none',
            transition                 : 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
            '& .list-item-text-primary': {
                color: 'inherit'
            },
            '& .list-item-icon'        : {
                color: 'inherit'
            }
        },
        '& .list-item-icon'        : {},
        '& .list-item-text'        : {},
        color                      : theme.palette.text.primary,
        cursor                     : 'pointer',
        textDecoration             : 'none!important'
    }
}));

function CoreNavVerticalItem(props)
{
    const dispatch = useDispatch();
    const userRole = useSelector(({auth}) => auth.user.role);

    const classes = useStyles(props);
    const {item, nestedLevel} = props;
    let paddingValue = 40 + (nestedLevel * 16);
    const listItemPadding = nestedLevel > 0 ? 'pl-' + (paddingValue > 80 ? 80 : paddingValue) : 'pl-16';

    if ( !CoreUtils.hasPermission(item.auth, userRole) )
    {
        return null;
    }

    return (
        <ListItem
            button
            component={NavLinkAdapter}
            to={item.url}
            activeClassName="active"
            className={clsx(classes.item, listItemPadding, 'list-item')}
            onClick={ev => dispatch(Actions.navbarCloseMobile())}
            exact={item.exact}
        >
            {item.icon && (
                <Icon className="list-item-icon text-28 flex-shrink-0 mr-16" color="action">{item.icon}</Icon>
            )}
            <ListItemText className="list-item-text" primary={item.title} classes={{primary: 'text-14 list-item-text-primary'}}/>
            {item.badge && (
                <NavBadge badge={item.badge}/>
            )}
        </ListItem>
    );
}

CoreNavVerticalItem.propTypes = {
    item: PropTypes.shape(
        {
            id   : PropTypes.string.isRequired,
            title: PropTypes.string,
            icon : PropTypes.string,
            url  : PropTypes.string
        })
};

CoreNavVerticalItem.defaultProps = {};

const NavVerticalItem = withRouter(React.memo(CoreNavVerticalItem));

export default NavVerticalItem;
