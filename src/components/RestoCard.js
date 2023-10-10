const RestoCard = ({ image, name, ratings, cuisines }) => {
  return (
    <div className="resto_card">
      <img src={image} className="resto_image" alt="Plate image" />
      <h2>{name}</h2>
      <h3>{ratings}</h3>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestoCard;
