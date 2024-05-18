import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <div className='homeStyle'>
      <h1>Bienvenido Maestro Pokemón</h1>
      <Link
        to='/pokemones'>
        <img src="./assets/imgs/pikachu1.png" className='imgHome' alt="" />
      </Link>
      
      
          {/* <img src={pikachu.imageUrl} className='imgHome' alt="" /> */}
    
    </div>
  )
}

export default Home