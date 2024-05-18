import React from 'react'
import { NavLink } from 'react-router-dom'

import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Navbar = () => {

    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inActive')

    return (
        <div>
            <nav className='menu'>
                    <NavLink
                        className={setActiveClass}
                        to = '/' >
                            <CatchingPokemonIcon sx={{ display: { xs: 'flex', md: 'flex' }, ml:5, fontSize:30 }} />
                    </NavLink>
                <div className='menulinks'>
                    <NavLink
                        className={setActiveClass}
                        to = '/' >
                        Home 
                    </NavLink>
                    |
                    <NavLink
                        className={setActiveClass}
                        to = '/pokemones'>
                        Pokemones
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar