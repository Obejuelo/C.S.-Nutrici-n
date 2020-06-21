import React from 'react';
import {Navigation} from '@core';
import clsx from 'clsx';
import {useSelector} from 'react-redux';

function CoreNavigation(props) {
    const navigation = useSelector(({core}) => core.navigation);

    return (
        <Navigation className={clsx("navigation pt-0", props.className)} navigation={navigation} layout={props.layout} dense={props.dense} active={props.active}/>
    );
}

CoreNavigation.defaultProps = {
    layout: "vertical"
};

export default CoreNavigation;
