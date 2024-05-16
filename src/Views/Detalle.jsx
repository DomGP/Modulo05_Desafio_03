import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { PokeContext } from "../Context/PokeContext"

const Detalle = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const {pokemones} = useContext(PokeContext)
    let pokemon = pokemones.find((pokemon) => pokemon.id == id);

  return (
        <div className="cardsStyle">
            <div className="card" style={{ width: "18rem" }}>
            <img src={pokemon.imageUrl} className="card-img-top imgStyle" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
            <h5 className="card-title">{pokemon.type}</h5>
            <h5 className="card-title">{}</h5>
            <button
                onClick={() => navigate(`/pokemones`)}
                className="btn btn-primary"
            >
                Volver atras
            </button>
            </div>
        </div>
        </div>
        
  )
}

export default Detalle