import { GiStoneWheel } from 'react-icons/gi'

const Header = () =>{
    return(
        <header>
            <GiStoneWheel className='logo'/>
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/reviews'>Reviews</a></li>
                    <li><a href='/news'>News</a></li>
                    <li><a href='/articles'>Articles</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header