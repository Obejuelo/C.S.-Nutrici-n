import React, {useState, useEffect} from 'react'
import { Typography, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {AnimateGroup} from '@core';
import User from './User'
import AddIcon from '@material-ui/icons/Add'
import clsx from 'clsx'
import AddUser from './dialogs/AddUser'

const useStyles = makeStyles(theme => ({
  fab: {
    bottom: 16,
    right: 16
  },
  label: {width: '10%'},
  label1: {width: '50%'},
  label2: {width: '10%'},
  label3: {width: '30%'},
}))

function Users() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []

  useEffect(() => {
  }, [users]);

  function _chageDialog() {
    setOpen(!open)
    users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
  }

  return(
    <div className='p-5'>

      {/* TITLE */}
      <div className='w-full'>
        <Typography className='font-bold text-xl'>Usuarios</Typography>
      </div>

      <div className='w-full border-solid border-1 border-gray-200 rounded-20 overflow-hidden mt-16'>

        <div className='w-full flex h-32 items-center' style={{background: 'rgba(0,0,0,.1)'}}>
          <Typography className={clsx(classes.label)}></Typography>
          <Typography className={clsx(classes.label1)}>Nombre</Typography>
          <Typography className={clsx(classes.label2)}>Edad</Typography>
          <Typography className={clsx(classes.label3)}>Teléfono</Typography>
        </div>
        
        <AnimateGroup enter={{ animation: "transition.slideUpIn" }}>
          {users.map((user, idx) => {
            return <User 
              user={user}
              border={idx === users.length - 1 ? true : false}/>
          })}
        </AnimateGroup>
      </div>

      <Fab 
        color="primary" 
        aria-label="add" 
        onClick={_chageDialog}
        className={clsx(classes.fab, 'fixed')}>
        <AddIcon />
      </Fab>

      <AddUser open={open} close={_chageDialog}/>
    </div>
  )
}

export default Users