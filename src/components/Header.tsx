import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
   const [showMenu, setShowMenu] = useState(false);
   const mobileMenu = (
      <ul className="mobile_nav light-blue darken-3" onClick={() => hideMobileMenu()}>
         <li>
            <NavLink to="/TodoPage">Shopping list</NavLink>
         </li>
         <li>
            <NavLink to="/BlogPage">Blog</NavLink>
         </li>
         <li>
            <NavLink to="/InfoPage">Info</NavLink>
         </li>
      </ul>
      
   );
   const mobileMenuHandler = (event: React.MouseEvent): void => {
      event.preventDefault();
      setShowMenu(!showMenu);
   };
   const hideMobileMenu = (): void => {
      setShowMenu(false);
   };
   return (
      <div className="header ">
         <nav className="light-blue darken-3">
            <div className="nav-wrapper">
               <NavLink to="/" className="brand-logo">
               <span className='logoName'>Recipe</span> <span className='logoFam'>Book</span>
               </NavLink>
               <a
                  href="/#"
                  data-target="mobile-demo"
                  className="sidenav-trigger"
                  onClick={(event) => mobileMenuHandler(event)}
               >
                  <i className="material-icons">menu</i>
               </a>
               <ul className="right hide-on-med-and-down">
                  <li>
                     <NavLink to="/TodoPage">Shopping list</NavLink>
                  </li>
                  <li>
                     <NavLink to="/BlogPage">Blog</NavLink>
                  </li>
                  <li>
                     <NavLink to="/InfoPage">Info</NavLink>
                  </li>
               </ul>
            </div>
            
         </nav>
         {showMenu && mobileMenu}
      </div>
   );
};
