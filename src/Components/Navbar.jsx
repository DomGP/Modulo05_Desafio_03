import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inActive')

    return (
        <div>
            <nav className='menu'>
                    <NavLink
                        className={setActiveClass}
                        to = '/' >
                            
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