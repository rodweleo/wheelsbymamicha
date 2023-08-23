import { GiStoneWheel } from 'react-icons/gi'
import { FaBars } from 'react-icons/fa'
import NavBar from './Navigation'
import { useState } from 'react';

const Header = () =>{
    const [showNav, setShowNav] = useState(false);
    return(
        <header>
            <GiStoneWheel className='logo'/>
            {showNav ? <NavBar/> : ''}
            <FaBars className='fa-bars' onClick={()=>setShowNav(!showNav)}/>
        </header>
    )
}

export default Header