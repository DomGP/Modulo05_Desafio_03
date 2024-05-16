import { createContext, useEffect, useState } from "react";

export const PikachuContext = createContext();

const PikaProvider = ({children})=>{

    const [pikachu, setPikachu] = useState({})

    const getPikachu = async () => {
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
            const data = await response.json()

            setPikachu({
                name:data.name,
                imageUrl:data.sprites.front_default
            })

        }catch(error){
            console.log('error')

        }
    };

    useEffect(()=>{
        getPikachu()
    },[])

    return(
        <PikachuContext.Provider value={{pikachu}}>
            {children}
        </PikachuContext.Provider>
    )
}

export default PikaProvider;