import React from "react";
import "./explore.css";
import ExploreCard from "./exploreCard";

const ExploreSection = ({ list, collectionName }) => {
  return (
    <div className="explore-section max-width">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurant) => {
          return <ExploreCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
