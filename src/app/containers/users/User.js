import React from 'react'
import {makeStyles} from '@material-ui/styles'
import clsx from 'clsx'
import { Typography } from '@material-ui/core'
import moment from 'moment'
import Avatar from 'react-avatar'

const useStyles = makeStyles(theme => ({
  container: {
    '&:hover': {
      background: 'rgba(0,0,0,.1)'
    }
  },
  label: {width: '10%'},
  label1: {width: '50%'},
  label2: {width: '10%'},
  label3: {width: '30%'},
}))

function User({border, user}) {
  const classes = useStyles()

  return(
    <div 
      style={{borderBottom: !border ? 'solid 1px rgba(0,0,0,.1)': ''}}
      className={clsx(classes.container, 'w-full h-64 flex items-center px-5 cursor-pointer')}>
      <div className={clsx(classes.label, 'flex justify-center items-center')}>
        <Avatar name={`${user.name} ${user.lastName}`} size="40" round={true}/>
      </div>
      <div className={clsx(classes.label1)}>
        <Typography noWrap>{user.name}</Typography>
      </div>
      <div className={clsx(classes.label2)}>
        <Typography>{moment(user.date).format('DD MMM, YYYY')}</Typography>
      </div>
      <div className={clsx(classes.label3)}>
        <Typography>{user.phone}</Typography>
      </div>
    </div>
  )
}

export default User