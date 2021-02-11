import React from "react";
import NavItem from "./NavItem";
import "./../componentCss/navItems.css";

//  e73
const NavItems = () => {
     return (
          <ul className='navItems'>
               <NavItem link='/'>shopping</NavItem>
               <NavItem link='/account'>account</NavItem>
          </ul>
     );
};

export default NavItems;
