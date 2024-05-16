import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PokeContext } from "../Context/PokeContext"

const Pokemones = () => {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {pokemones} = useContext(PokeContext);

  

  return (
    <div className='container'>
      <div className="text-center m-5">
        <select
          className="form-select"
          onChange={(e)=> setSelectedPokemon(e.target.value)}>
            <option disabled selected> Selecciona un Pokemón </option>
            {pokemones && pokemones.map((pokemon) => (
              <option key={pokemon.id} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
        </select>
        <button 
          onClick={() => selectedPokemon ? navigate(`/pokemon/${selectedPokemon}`) : setError('Por favor, selecciona un Pokémon')}
          className="btn btn-success mt-2">
          Mostrar Detalles
        </button>
        {error && <p className="text-danger">{error}</p>}
      </div>
    </div>
  )
}

export default Pokemones;