import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {useSelector} from 'react-redux';

function Theme(props)
{
    const mainTheme = useSelector(({core}) => core.settings.mainTheme);

    // console.warn('Theme:: rendered',mainTheme);
    return (
        <ThemeProvider theme={mainTheme}>
            {props.children}
        </ThemeProvider>
    )
}

export default React.memo(Theme);
