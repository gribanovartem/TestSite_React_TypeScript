import React from "react";

export const Footer: React.FC = () => {
   return (
      <div className="footer light-blue darken-3">
         <div className="footer_author">
            <i className="tiny material-icons">copyright</i>Artsiom Hrybanau
         </div>
         <div className="footer_logo">
            <span className="logoName">Recipe</span>{" "}
            <span className="logoFam">Book</span>
         </div>
         <div className="footer_social">
            <a href="https://linkedin.com/in/artsiomhrybanau" target="_blank" rel="noopener noreferrer">
               <img
                  src="../linkedin.png"
                  alt="linkedin"
                  width="25px"
                  height="25px"
               />
            </a>
            <a href="mailto:gribanovartem22@gmail.com">
               <img src="../gmail.png" alt="Почта" width="25px" height="25px" />
            </a>
            <a href="https://github.com/gribanovartem" target="_blank" rel="noopener noreferrer">
               <img src="../github.png" alt="Github" width="25px" height="25px" />
            </a>
         </div>
      </div>
   );
};
