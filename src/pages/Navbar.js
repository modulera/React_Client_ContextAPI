import React, { Fragment } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { logout, useAuthState, useAuthDispatch } from '../context';

const Navbar = (props) => {
    const history = useHistory();

    const dispatch = useAuthDispatch()
    const { loading, isAuthenticated } = useAuthState()

    console.log('loading', loading)

    const handleLogout = (e) => {
        e.preventDefault()

        logout(dispatch) //call the logout action
        history.push('/login') //navigate to logout page on logout
    }

    const authLinks = (
        <>
            <li className="nav-item">
                <NavLink className="nav-link" exact to='/dashboard'>Dashboard</NavLink>
            </li>
            <li className="nav-item">
                <a className='nav-link' onClick={handleLogout} href='#!'>Logout</a>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li className="nav-item">
                <NavLink className="nav-link" exact to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to='/login'>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to='/signup'>Sign Up</NavLink>
            </li>
        </>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/'>AppName</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;