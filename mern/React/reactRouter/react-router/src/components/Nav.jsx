import React from 'react'
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <Navbar className="navbar navbar-expand-lg bg-primary bg-gradient" >
            <div className='container-fluid d-flex justify-content-start'>
                <div className='navbar-brand ms-2 text-light'>React Router App</div>
                <NavLink className="nav-link ms-2 text-light" to="/home" >Home</NavLink>
            </div>
        </Navbar>
    )
}

export default Nav