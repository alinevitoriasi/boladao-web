import React from 'react'
import MuiButton from '@mui/material/Button'
import {ButtonTypeMap} from '@mui/material'

interface IButton {
  text: string
  color?: ButtonTypeMap['props']['color']
  size?: ButtonTypeMap['props']['size']
}

const Button: React.FC<IButton> = ({text, color, size}) => {
  return (
    <MuiButton 
    variant="contained" 
    color={color || 'primary'}
    size={size}
    >
      {text}
    </MuiButton>
  )
}

export default Button
