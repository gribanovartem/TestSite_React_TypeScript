import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
   const [showMenu, setShowMenu] = useState(false);
   const mobileMenu = (
      <ul className="mobile_nav light-blue darken-3" onClick={() => hideMobileMenu()}>
         <li>
            <NavLink to="/TodoPage">Список дел</NavLink>
         </li>
         <li>
            <NavLink to="/BlogPage">Блог</NavLink>
         </li>
         <li>
            <NavLink to="/InfoPage">Информация</NavLink>
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
               <span className='logoName'>React</span> <span className='logoFam'>TypeScript</span>
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
                     <NavLink to="/TodoPage">Список дел</NavLink>
                  </li>
                  <li>
                     <NavLink to="/BlogPage">Блог</NavLink>
                  </li>
                  <li>
                     <NavLink to="/InfoPage">Информация</NavLink>
                  </li>
               </ul>
            </div>
            
         </nav>
         {showMenu && mobileMenu}
      </div>
   );
};
