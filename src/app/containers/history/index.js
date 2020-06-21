import React from 'react'
import clsx from 'clsx'
import {TextField, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Identity from './Identity'

const useStyles = makeStyles(theme => ({

}))


function History() {
  const classes = useStyles()

  return(
    <div className='w-full flex flex-wrap'>
      <Grid item xs={12} md={4}>
        <Identity />
      </Grid>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}></Grid>
    </div>
  )
}

export default History