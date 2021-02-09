import React from "react";
import "./../componentCss/navItems.css";
import NavItem from "./NavItem";

//  e73
const NavItems = () => {
     return (
          <ul className='navItems'>
               <NavItem link='/'>shopping</NavItem>
               <NavItem link='/'>checkout</NavItem>
          </ul>
     );
};

export default NavItems;