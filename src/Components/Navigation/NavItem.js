import React from "react";
import { Link } from "react-router-dom";
import "./../componentCss/navItem.css";

//  e73
const NavItem = (props) => {
     return (
          <li className='navItem'>
               <Link to={props.link}>{props.children}</Link>
          </li>
     );
};

export default NavItem;
