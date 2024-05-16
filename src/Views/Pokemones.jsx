import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PokeContext } from "../Context/PokeContext"

const Pokemones = () => {

  const navigate = useNavigate();

  const {pokemones} = useContext(PokeContext);

  const [selectedPokemon, setSelectedPokemon] = useState('');

  return (
    <div className='container'>
      <div className="text-center m-5">
        <select
          className="form-select"
          arial-label='Default select example'
          onChange={(e)=> setSelectedPokemon(e.target.value)}>
            <option value=''> Selecciona un Pokemón </option>
            {pokemones && pokemones.map((pokemon) => (
              <option key={pokemon.id} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
        </select>
        <button 
          onClick={() => navigate(`/pokemon/${selectedPokemon}`)}
          className="btn btn-success mt-2">
          Mostrar Detalles
        </button>
      </div>
    </div>
  )
}

export default Pokemones;