import React from "react";
import "./../componentCss/navbar.css";
import NavItems from "./NavItems";

//  e72
const Navbar = (props) => {
     return (
          <header className='navbar'>
               <nav>
                    <NavItems />
               </nav>
          </header>
     );
};

export default Navbar;
