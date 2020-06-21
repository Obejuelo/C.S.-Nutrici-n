import {combineReducers} from 'redux';
import core from './settings';
import auth from 'app/auth/store/reducers';

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        core,
        ...asyncReducers
    });

export default createReducer;
