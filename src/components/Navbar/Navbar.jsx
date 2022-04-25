import React, { useEffect, useState } from 'react'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink

} from './navbarStyle';

import {Button} from '../../globalStyle'

import {FaTimes, FaBars} from 'react-icons/fa';





const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)

    const showButton = () =>{
        if (window.innerWidth <= 960){
            setButton(false)
        }

        else{
            setButton(true)
        }
    }

    useEffect(() =>{
        showButton();
    }, [])

    window.addEventListener('resize', showButton);
    
  return (
    <Nav>
    <NavbarContainer>
        <NavLogo to='/' >
            <NavIcon/>
                ULTRA
        </NavLogo>

        <MobileIcon onClick={handleClick}> 
            {click ? <FaTimes /> : <FaBars/> }
        </MobileIcon>

        <NavMenu onClick={handleClick} click={click}>
            <NavItem>
                <NavLinks to='/'> Home </NavLinks>
            </NavItem>
        

            <NavItem>
                <NavLinks to='/services'> Services </NavLinks>
            </NavItem>
        
       
            <NavItem>
                <NavLinks to='/product'> Products </NavLinks>
            </NavItem>

            <NavItemBtn>
                {button ? (<NavBtnLink to ='/signup'><Button primary > Sign Up</Button></NavBtnLink>) :
                <NavBtnLink to ='/signup'><Button fontBig primary >Sign Up</Button></NavBtnLink>}
            </NavItemBtn>
        </NavMenu>


    </NavbarContainer>

    </Nav>
  )
}

export default Navbar