
import React, { useState } from 'react';
import { Hamburger, Logo, Menu, MenuLink, Nav } from '../style/Navbar';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';


const Navbar = () => {

    const [isOpen, setisOpen] = useState(false)
    const [spanItem, setspanItem] = useState(<FaBars />)


    const handleIsOpen = () => {
        setisOpen(!isOpen)
        if (isOpen) {
            setspanItem(<FaBars />)
        } else if (!isOpen) {
            setspanItem(<GrClose />)
        }

    }

    return (
        <Nav>

            <Logo href="/">
                Eli <span>Rsnt</span>
            </Logo>

            <Hamburger onClick={handleIsOpen}>
                <span>
                    {spanItem}
                </span>

            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to='/' onClick={isOpen}>Home</MenuLink>
                <MenuLink to='/products' onClick={isOpen}>Products</MenuLink>
                <MenuLink to='/about' onClick={isOpen}>About</MenuLink>
                <MenuLink to='/contact' onClick={isOpen}>Contact</MenuLink>

            </Menu>

        </Nav>
    );
};

export default Navbar;

