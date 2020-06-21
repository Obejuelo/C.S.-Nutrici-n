import React, { useState } from 'react'
import { TextField, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import moment from 'moment'

import FieldPhone from 'app/components/FieldPhone';

function Identity() {
  const [value, setValue] = useState('female')
  const [state, setState] = useState('female')
  const [selectedDate, setSelectedDate] = useState(moment())

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const changeState = (event) => {
    setState(event.target.value)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return(
    <div className='w-full p-5'>
      <Typography className='w-full text-center font-bold text-sm mb-5'>Ficha de identificación</Typography>
      <TextField variant='outlined' label='Nombre' className='w-full'/>

      <FormControl component="fieldset" className='w-full mt-5'>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} className='flex flex-row w-full justify-center'>
          <FormControlLabel value="female" control={<Radio />} label="Femenino" />
          <FormControlLabel value="male" control={<Radio />} label="Masculino" />
        </RadioGroup>
      </FormControl>

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
        label='Edad' 
        type='number' 
        onInput={(e) =>{
          e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
        }}
        className='w-full mt-5'/>
      
      <FormControl component="fieldset" className='w-full mt-5'>
        <RadioGroup aria-label="gender" name="state" value={state} onChange={changeState} className='flex flex-row w-full justify-center'>
          <FormControlLabel value="1" control={<Radio />} label="Soltero" />
          <FormControlLabel value="2" control={<Radio />} label="Casado" />
        </RadioGroup>
      </FormControl>

      <TextField variant='outlined' label='Ocupación' className='w-full mt-5'/>
      <TextField variant='outlined' label='Escolaridad' className='w-full mt-5'/>
      <TextField variant='outlined' label='Religión' className='w-full mt-5'/>
      <TextField 
        variant='outlined' 
        label='Teléfono' 
        InputProps={{
          inputComponent: FieldPhone
        }}
        className='w-full mt-5'/>
      <TextField multiline variant='outlined' label='Motivo de la consulta' className='w-full mt-5'/>
    </div>
  )
}

export default Identity