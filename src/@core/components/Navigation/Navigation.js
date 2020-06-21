import React from 'react';
import { Divider, List } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import NavVerticalGroup from './vertical/NavVerticalGroup';
import NavVerticalCollapse from './vertical/NavVerticalCollapse';
import NavVerticalItem from './vertical/NavVerticalItem';
import NavVerticalLink from './vertical/NavVerticalLink';
import NavHorizontalGroup from './horizontal/NavHorizontalGroup';
import NavHorizontalCollapse from './horizontal/NavHorizontalCollapse';
import NavHorizontalItem from './horizontal/NavHorizontalItem';
import NavHorizontalLink from './horizontal/NavHorizontalLink';
import { makeStyles } from '@material-ui/styles';
// import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    navigation: {},
    verticalNavigation: {
        '&.active-square-list': {
            '& .list-item, & .active.list-item': {
                width: '100%',
                borderRadius: '0'
            }
        },
        '&.dense': {
            '& .list-item': {
                paddingTop: 0,
                paddingBottom: 0,
                height: 32
            }
        }
    },
    horizontalNavigation: {
        '&.active-square-list': {
            '& .list-item': {
                borderRadius: '0'
            }
        },
        '& .list-item': {
            padding: '8px 12px 8px 12px',
            height: 40,
            minHeight: 40,
            '&.level-0': {
                height: 44,
                minHeight: 44,
            },
            '& .list-item-text': {
                padding: '0 0 0 8px'
            }
        }
    },
    '@global': {
        '.popper-navigation-list': {
            '& .list-item': {
                padding: '8px 12px 8px 12px',
                height: 40,
                minHeight: 40,
                '& .list-item-text': {
                    padding: '0 0 0 8px'
                }
            },
            '&.dense': {
                '& .list-item': {
                    minHeight: 32,
                    height: 32,
                    '& .list-item-text': {
                        padding: '0 0 0 8px'
                    }
                }
            }
        }
    }
}));

function Navigation(props) {
    const classes = useStyles(props);
    const { navigation, layout, active, dense, className } = props;
    // const user = useSelector(({ auth }) => auth.user)

    // let navbar = navigation

    // if (user.role === 'manager' || user.role === 'stakeholder') {
    //     navbar = navigation.filter(nav => nav.id === 'cards')
    // }

    const verticalNav = (
        <List className={clsx("navigation whitespace-no-wrap", classes.navigation, classes.verticalNavigation, `active-${active}-list`, dense && 'dense', className)}>
            {
                navigation.map((item) => (

                    <React.Fragment key={item.id}>

                        {item.type === 'group' && (
                            <NavVerticalGroup item={item} nestedLevel={0} />
                        )}

                        {item.type === 'collapse' && (
                            <NavVerticalCollapse item={item} nestedLevel={0} />
                        )}

                        {item.type === 'item' && (
                            <NavVerticalItem item={item} nestedLevel={0} />
                        )}

                        {item.type === 'link' && (
                            <NavVerticalLink item={item} nestedLevel={0} />
                        )}

                        {item.type === 'divider' && (
                            <Divider className="my-16" />
                        )}
                    </React.Fragment>
                ))
            }
        </List>
    );

    const horizontalNav = (
        <List className={clsx("navigation whitespace-no-wrap flex p-0", classes.navigation, classes.horizontalNavigation, `active-${active}-list`, dense && 'dense', className)}>
            {
                navigation.map((item) => (

                    <React.Fragment key={item.id}>

                        {item.type === 'group' && (
                            <NavHorizontalGroup item={item} nestedLevel={0} dense={dense} />
                        )}

                        {item.type === 'collapse' && (
                            <NavHorizontalCollapse item={item} nestedLevel={0} dense={dense} />
                        )}

                        {item.type === 'item' && (
                            <NavHorizontalItem item={item} nestedLevel={0} dense={dense} />
                        )}

                        {item.type === 'link' && (
                            <NavHorizontalLink item={item} nestedLevel={0} dense={dense} />
                        )}

                        {item.type === 'divider' && (
                            <Divider className="my-16" />
                        )}
                    </React.Fragment>
                ))
            }
        </List>
    );

    if (navigation.length > 0) {
        switch (layout) {
            case 'horizontal':
                {
                    return horizontalNav;
                }
            case 'vertical':
            default:
                {
                    return verticalNav;
                }
        }
    }
    else {
        return null;
    }
}

Navigation.propTypes = {
    navigation: PropTypes.array.isRequired
};

Navigation.defaultProps = {
    layout: "vertical"
};

export default React.memo(Navigation);
