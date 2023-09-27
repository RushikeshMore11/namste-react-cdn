import React from "react";
import ReactDOM from "react-dom/client";
import LogoImage from "./GR.png";
import "./index.css";

/*
App
  -Header
    -Header Logo--Left
    -Navbar -- Right
  -Seachbar
    -SearchBar input
    -Search button
  -Restaurant container  
    -Resto card
      -Image
      -Price
      -Rating
      -cuisine

  -Footer    
    -Links
*/

const Navbar = () => (
  <div className="navbar_container">
    <ul>
      <li>Gallery</li>
      <li>About Us</li>
      <li>Know More</li>
      <li>Contact Us</li>
    </ul>
  </div>
);
const Logo = () => (
  <div className="logo_container">
    <img className="logo" src={LogoImage} alt="Logo" />
  </div>
);

const Header = () => {
  return (
    <div className="header_container">
      {/* Logo */}
      <Logo />
      {/* Navbar links */}
      <Navbar />
    </div>
  );
};

const Seachbar = () => {
  return <div className="search_container">Search Bar</div>;
};

const RestoCard = () => {
  return (
    <div className="resto_card">
      {/* -Image
      -Price
      -Rating
      -cuisine */}
      <img
        src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4="
        className="resto_image"
      />
      <h2>RT Foods</h2>
      <h3>4.5 Rating</h3>
      <h4>Chinese, Biryani, South Indian</h4>
    </div>
  );
};

const RestaurantContainer = () => {
  return (
    <div className="resto_container">
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Header -->Done
      SearchBar --> Need more work on this
      Resta-Container
      Footer */}
      <Header />
      <Header></Header>
      {Header()}
      <Seachbar />
      <RestaurantContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
