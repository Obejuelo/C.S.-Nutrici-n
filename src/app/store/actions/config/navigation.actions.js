import { CoreUtils } from '@core';

export const GET_NAVIGATION = '[NAVIGATION] GET NAVIGATION';
export const SET_NAVIGATION = '[NAVIGATION] SET NAVIGATION';
export const RESET_NAVIGATION = '[NAVIGATION] RESET NAVIGATION';

export function getNavigation() {
    return {
        type: GET_NAVIGATION
    }
}

export function setNavigation(navigation) {
    return {
        type: SET_NAVIGATION,
        navigation
    }
}

export function resetNavigation() {
    return {
        type: RESET_NAVIGATION
    }
}

export function appendNavigationItem(item, parentId) {
    return (dispatch, getState) => {
        const { navigation } = getState().core;
        return dispatch({
            type: SET_NAVIGATION,
            navigation: CoreUtils.appendNavItem(navigation, item, parentId)
        });
    }
}

export function prependNavigationItem(item, parentId) {
    return (dispatch, getState) => {
        const { navigation } = getState().core;
        return dispatch({
            type: SET_NAVIGATION,
            navigation: CoreUtils.prependNavItem(navigation, item, parentId)
        });
    }
}

export function updateNavigationItem(id, item) {
    return (dispatch, getState) => {
        const { navigation } = getState().core;
        return dispatch({
            type: SET_NAVIGATION,
            navigation: CoreUtils.updateNavItem(navigation, id, item)
        });
    }
}

export function removeNavigationItem(id) {
    return (dispatch, getState) => {
        const { navigation } = getState().core;
        return dispatch({
            type: SET_NAVIGATION,
            navigation: CoreUtils.removeNavItem(navigation, id)
        });
    }
}
