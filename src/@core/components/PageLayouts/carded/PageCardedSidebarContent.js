import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {Scrollbars} from '@core';
import clsx from 'clsx';
import {useSelector} from 'react-redux';

function PageCardedSidebarContent(props)
{
    const mainThemeDark = useSelector(({core}) => core.settings.mainThemeDark);

    const classes = props.classes;

    return (
        <React.Fragment>
            {props.header && (
                <ThemeProvider theme={mainThemeDark}>
                    <div className={clsx(classes.sidebarHeader, props.variant)}>
                        {props.header}
                    </div>
                </ThemeProvider>
            )}

            {props.content && (
                <Scrollbars className={classes.sidebarContent} enable={props.innerScroll}>
                    {props.content}
                </Scrollbars>
            )}
        </React.Fragment>
    )
}

export default PageCardedSidebarContent;
