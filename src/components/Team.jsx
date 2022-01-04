import React from "react";
import imgOffice from "../img/office.png";

const Team = () => {
  return (
    <article className="team">
      <img className="imgBg" src={imgOffice} alt="img"></img>
      <div className="divTeam">
        <h1>Creative Team</h1>
        
        <h2>Goog mindset</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>

    </article>
  );
};

export default Team;
