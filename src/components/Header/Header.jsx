import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut=()=>{
        logOut();
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/signUp">Sign Up</NavLink>
                <NavLink to="/login">Login</NavLink>
                {user && <span>Welcome {user.email}<button onClick={handleLogOut}>Sign Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;