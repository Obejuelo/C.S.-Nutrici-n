import React from 'react';
import { Dialog } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from 'app/store/actions';

function CoreDialog(props) {
    const dispatch = useDispatch();
    const state = useSelector(({ core }) => core.dialog.state);
    const options = useSelector(({ core }) => core.dialog.options);

    return (
        <Dialog
            open={state}
            onClose={ev => dispatch(Actions.closeDialog())}
            aria-labelledby="dialog-title"
            {...options}
        />
    );
}

export default CoreDialog;
