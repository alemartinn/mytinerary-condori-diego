import React from 'react'
import '../styles/Button.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function Button() {
  return (
  <div className="loader">
    <LinkRouter to='/cities' className='Button'> Travel </LinkRouter>
    <div className="face">
      <div className="circle">
      </div>
    </div>
    <div className="face">
      <div className="circle"></div>
    </div>
  </div>
  )
}
