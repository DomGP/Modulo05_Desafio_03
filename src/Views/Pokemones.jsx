import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PokeContext } from "../Context/PokeContext"

const Pokemones = () => {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {pokemones} = useContext(PokeContext);

  

  return (
      <div className="text-center m-5">
        <h1>Pokemones</h1>
        <select
          className="form-select"
          onChange={(e)=> setSelectedPokemon(e.target.value)}>
            <option disabled selected className="optionStyle"> Selecciona un Pokemón </option>
            {pokemones && pokemones.map((pokemon) => (
              <option key={pokemon.id} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
        </select>
        
        <button 
          onClick={() => selectedPokemon ? navigate(`/pokemon/${selectedPokemon}`) : setError('Por favor, selecciona un Pokémon')}
          className="btn btn-secondary mt-5 fs-5">
          Mostrar Detalles
        </button>
        {error && <p className="text-danger">{error}</p>}
      </div>
  )
}

export default Pokemones;