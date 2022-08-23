import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

const Header = () => {
    return (  
        <header>
            <nav>
                <LinkRouter to='/'> Home </LinkRouter>
                <LinkRouter to='/cities'> Cities </LinkRouter>
                <LinkRouter to='/newcities'> NewCities </LinkRouter>
            </nav>
            <h2>Titulo</h2>
            <button>
                <i></i>
            </button>
        </header>
    );
}
 
export default Header;