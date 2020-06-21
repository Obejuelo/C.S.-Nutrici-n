import React from 'react'
import { Redirect } from 'react-router-dom'
import { CoreUtils } from '@core'
import { HistoyConfig } from 'app/containers/history/HistoryConfig'
import { UsersConfig } from 'app/containers/users/UsersConfig'

const routeConfigs = [
    HistoyConfig,
    UsersConfig
]

const routes = [
    ...CoreUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path: '/',
        component: () => <Redirect to="/history" />
    }
];

export default routes