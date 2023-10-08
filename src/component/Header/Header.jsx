import React, { useState } from 'react'
import { Button, Container, Dropdown, Form, ListGroup, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { BsCart2, BsSearch } from 'react-icons/bs';
// import { FaRegUser } from 'react-icons/fa6';
// import { base_api } from '../../api/Products_api';
// import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'
// import { useDispatch } from 'react-redux';
// import { product_view } from '../../services/actions/products_action';

function Header() {

    // const navigate = useNavigate();

    // const dispatch = useDispatch();
    
    const handleLogin = () => {
        // navigate('/signin');
    }

    const handleLogout = () => {

    }


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary nav_de" style={{ borderBottom: "2px solid rgb(206, 206, 222)", borderRadius: "2px", zIndex: "1000" }}>
                <Container>
                    <Navbar.Brand>
                        <NavLink to='/'>
                            <img src="logo.png" alt="logo" />

                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />


                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                            <NavDropdown title="Profile" id="navbarScrollingDropdown" className='h_drop_down'>
                                <div className="he_drop_item">
                                    <span>Hello </span>
                                    <span>User</span>
                                    <button className='he_btn' onClick={handleLogin}>Sign In</button>
                                    <button className='he_btn' onClick={handleLogout}>Log Out</button>
                                </div>
                            </NavDropdown>
                            <NavLink to='/add_product' className='nav-link'>Add Products</NavLink>
                            <NavLink to='/view_product' className='nav-link'>View Products</NavLink>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}

export default Header;