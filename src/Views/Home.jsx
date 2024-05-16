import React from 'react'
import { useContext } from 'react'
import { PokeContext } from '../Context/PokeContext'
import { PikachuContext } from '../Context/PikachuContext'

const Home = () => {

  const {pokemones} = useContext(PokeContext)
  const {pikachu} = useContext(PikachuContext)
  

  return (
    <div className='homeStyle'>
      <h1>Bienvenido Maestro Pokemón</h1>
      <img src="./assets/imgs/pika.jpg" className='imgHome' alt="" />
      
          {/* <img src={pikachu.imageUrl} className='imgHome' alt="" /> */}
    
    </div>
  )
}

export default Home