import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
    return (  
        <header>
            <nav className='HeaderNav'>
                <LinkRouter to='/'> HOME </LinkRouter>
                <LinkRouter to='/cities'> CITIES </LinkRouter>
                <LinkRouter to='/newcities'> NEW CITIES </LinkRouter>
            </nav>
            <h3 className='HeaderTitle'>
                <img src='/logoMyTinerary.png' alt='logoMyTinerary'/>
            </h3>
            <button className='HeaderButton'>
                <img src='https://png.pngitem.com/pimgs/s/130-1300400_user-hd-png-download.png' alt='logoIconUser'/>
            </button>
        </header>
    );
}
 
export default Header;