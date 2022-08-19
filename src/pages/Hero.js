import React from 'react'
import Button from '../components/Button'
import '../styles/Hero.css'
import Footer from '../components/Footer';

export default function Hero() {
  return (
    <div className='Hero-Container'>
      <div className='Hero-Title-button'>
        <h1>MyTinerary</h1>
        <h2>If you think adventure is dangerous, try routine. It's mortal</h2>
        <Button/>
      </div>
      <Footer/>
    </div>
  )
}
