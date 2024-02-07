import React from "react";

import { Link } from "react-router-dom";

const SearchDrink = ({ name, image }) => {
  return (
    <div className="first-letter">
      <Link style={{ textDecoration: "none" }} to={`/details/${name}`}>
        <img src={image} alt="image" />
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default SearchDrink;
