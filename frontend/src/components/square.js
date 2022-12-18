import React from 'react'
import './square.css'

function Square( props ) {
  return (
    <div className={`square ${props.color}`}>
    </div>
  )
}

export default Square
