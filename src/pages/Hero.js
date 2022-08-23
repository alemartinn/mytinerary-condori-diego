import Button from '../components/Button'
import '../styles/Hero.css'
import CityCarousel from '../components/DataCity';

export default function Hero() {
  return (
    <div className='Hero-Container'>
      <div className='Hero-Title-button'>
        <h1>MyTinerary</h1>
        <h2>If you think adventure is dangerous, try routine.It's mortal</h2>
        <Button/>
      </div>
      <CityCarousel/>
    </div>
  )
}
