import React from "react";
import "./../componentCss/navItem.css";

//  e73
const NavItem = (props) => {
     return (
          <li className='navItem'>
               <a href={props.link}>{props.children}</a>
          </li>
     );
};

export default NavItem;
