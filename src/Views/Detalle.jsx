import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { PokeContext } from "../Context/PokeContext"

const Detalle = () => {

    const navigate = useNavigate();
    const {name} = useParams();
    const {pokemones} = useContext(PokeContext)
    let pokemon = pokemones.find((pokemon) => pokemon.name == name);

    return (
        <div className="container cardsStyle">
            <h5 className="name-style">~ {pokemon.name} ~</h5>
            <div className="div-hr-style"> </div>
                <img src={pokemon.imageUrl} className="card-img-top imgStyle" alt="pokeApi_img" />
            <div className="div-hr-style"></div>
                    <h5 className="div-style">Tipo: {pokemon.type}</h5>
                    <div className="div-hr-style"></div>
                        <table>
                            <thead>
                                <tr>
                                <th>Stat</th>
                                <th>Base</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pokemon.stats.map((stat, index) => (
                                <tr key={index}>
                                    <td>{stat.statsName}:</td>
                                    <td className="statBase-style">{stat.statsBase}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="div-hr-style"></div>
                        
                        <button
                            onClick={() => navigate(`/pokemones`)}
                            className="btn btn-secondary fs-5 mb-2 mt-1 btn-style"
                        >
                            Volver atras
                        </button>
                </div>
)
}

export default Detalle;