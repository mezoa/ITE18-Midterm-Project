import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const CustomNav = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    
    
    return(
        <div className='custom-nav'>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" className="mr-auto">My App</NavbarBrand>
          <NavbarToggler onClick={toggle} className="nr-2" />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/logout">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
      
    );
   
};

export default CustomNav;