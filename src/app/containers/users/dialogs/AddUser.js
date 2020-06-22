import React, {useState} from 'react'
import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  Button, 
  TextField
} from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import FieldPhone from 'app/components/FieldPhone'
import moment from 'moment'
import {showMessage} from 'app/store/actions'
import {useDispatch} from 'react-redux';

function AddUser(props) {
  const dispatch = useDispatch()
  const {open, close} = props
  const [selectedDate, setSelectedDate] = useState(moment())
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  // const [scroll, setScroll] = React.useState('paper')

  function addUser() {
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    const body = {
      name,
      lastName,
      phone,
      date: selectedDate
    }

    if(!name || !lastName || !phone) {
      dispatch(showMessage({message: 'Todos los campos son obligatorios', variant:'warning'}))
      return
    }

    let info = [...users, body]
    localStorage.setItem('users', JSON.stringify(info))
    clearState()
    close()
  }

  function clearState() {
    setName('')
    setLastName('')
    setPhone('')
    setSelectedDate(moment())
  }

  function closeDialog() {
    close()
    clearState()
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <Dialog
      open={open}
      onClose={close}
      >
      <DialogTitle>Agregar usuario</DialogTitle>

      <DialogContent>

        <TextField 
          variant='outlined' 
          label='Nombre' 
          value={name}
          onChange={e => setName(e.target.value)}
          className='w-full'/>

        <TextField 
          variant='outlined' 
          label='Apellido' 
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          className='w-full mt-5'/>

        <KeyboardDatePicker
          className='w-full mt-5'
          inputVariant='outlined'
          format="DD MMM, YYYY"
          margin="normal"
          id="date-picker-inline"
          label="Fecha de nacimiento"
          value={selectedDate}
          onChange={handleDateChange}
        />

      <TextField 
        variant='outlined' 
        label='Teléfono'
        value={phone} 
        onChange={e => setPhone(e.target.value)}
        InputProps={{
          inputComponent: FieldPhone
        }}
        className='w-full mt-5'/>

      </DialogContent>

      <DialogActions>
        <Button onClick={closeDialog} variant='contained'>
            Cancelar
        </Button>
        <Button onClick={addUser} variant='contained' color="primary">
            Agregar
        </Button>
      </DialogActions>

    </Dialog>
  )
}

export default AddUser