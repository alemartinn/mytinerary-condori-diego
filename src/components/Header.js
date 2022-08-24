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
                {/* <img src='https://png.pngitem.com/pimgs/s/130-1300400_user-hd-png-download.png' alt='logoIconUser'/> */}
                <div class="card-client">
            <div class="user-picture">
                <svg viewBox="0 0 448 512" fill="white" height= "35"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                </svg>
            </div>
</div>
            </button>
        </header>
    );
}
 
export default Header;