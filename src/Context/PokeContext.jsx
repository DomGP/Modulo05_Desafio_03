import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();

const PokeProvider = ({children}) => {

    const [pokemones, setPokemones] = useState([])

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getPokemones = async () => {
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        const data = await response.json()

        const detallesPokemones = await Promise.all(data.results.map(async(pokemon) => {
            const newResponse = await fetch(pokemon.url)
            const newData = await newResponse.json()

            const tipoTraduccion = {
                "normal": "normal",
                "fire": "fuego",
                "water": "agua",
                "electric": "eléctrico",
                "grass": "planta",
                "ice": "hielo",
                "fighting": "lucha",
                "poison": "veneno",
                "ground": "tierra",
                "flying": "volador",
                "psychic": "psíquico",
                "bug": "bicho",
                "rock": "roca",
                "ghost": "fantasma",
                "dragon": "dragón",
                "dark": "siniestro",
                "steel": "acero",
                "fairy": "hada"
            };

            const type = newData.types.map(type => capitalizeFirstLetter(tipoTraduccion[type.type.name])).join(', ')

            return{
                name:capitalizeFirstLetter(newData.name),
                imageUrl: newData.sprites.front_shiny,
                type:type,
                id: newData.id
            }
        }));
        setPokemones(detallesPokemones)
        }catch(error){
            console.log('error')
        }
    }
    
    useEffect(()=>{
        getPokemones()
    }, [])
    
    return(
        <PokeContext.Provider value={{pokemones}}>
            {children}
        </PokeContext.Provider>
    )
}

export default PokeProvider;