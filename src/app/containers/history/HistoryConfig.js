import React from 'react'

export const HistoyConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [{
      path: '/history',
      component: React.lazy(() => import('./')),
    },
  ],
}
