import React from "react";
export const InfoPage: React.FC = () => {
   return (
      <>
         <ul className="infoList">This site is developed on the following technology stack:
            <li className="infoList_item">React</li>
            <li className="infoList_item">TypeScript</li>
            <li className="infoList_item">NodeJS</li>
            <li className="infoList_item">Express</li>
            <li className="infoList_item">MongoDB</li>
         </ul>
      </>
   );
};
