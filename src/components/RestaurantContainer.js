import RestoCard from "./RestoCard";

const RestaurantContainer = ({ restaurantData }) => {
  return (
    <div className="resto_container">
      {restaurantData.map((item) => (
        <RestoCard
          name={item.name}
          image={item.image}
          ratings={item.ratings}
          cuisines={item.cuisines}
          key={item.name}
        />
      ))}
    </div>
  );
};

export default RestaurantContainer;
