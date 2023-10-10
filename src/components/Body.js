import React, { useState } from "react";
import { restaurantData } from "../constants/Data";
import RestoCard from "./RestoCard";

const Body = () => {
  const [list, setList] = useState(restaurantData);

  const handleFilter = () => {
    const filteredList = list.filter((item) => item.ratings >= 4);
    setList(filteredList);
  };

  return (
    <>
      <button className="search_container" onClick={handleFilter}>
        Top Rated Restaurants
      </button>
      <div className="resto_container">
        {list.map((item) => (
          <RestoCard
            name={item.name}
            image={item.image}
            ratings={item.ratings}
            cuisines={item.cuisines}
            key={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
