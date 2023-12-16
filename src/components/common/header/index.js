import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="max-width header">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="zomato-logo"
          className="header-logo"
        ></img>
        <div className="header-right">
          <div className="header-location-search">
            <div className="location-wrapper">
              <div className="location-icon-name">
                <i className="fi fi-sr-marker absolute-center location-icon"></i>
                <div>Bengaluru, India</div>
              </div>
              <i className="fi fi-rr-caret-down absolute-center"></i>
            </div>
            <div className="location-search-seperator"></div>
            <div className="header-searchbar">
              <i className="fi fi-rr-search absolute-center search-icon"></i>
              <input
                placeholder="Search for restaurant, cuisine or a dish"
                className="search-input"
              />
            </div>
          </div>
          <div className="profile-wrapper">
            <img
              src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B100%2A%2C%2A"
              alt="profile-pic"
              className="header-profile-image"
            />
            <span className="header-username">Onion</span>
            <i className="fi fi-rs-angle-small-down absolute-center profile-options-icon"></i>
          </div>
        </div>
      </div>
      <div className="max-width header-text">
        Home / India /
        <span className="header-text-light"> Bengaluru Restaurants</span>
      </div>
    </>
  );
};

export default Header;
