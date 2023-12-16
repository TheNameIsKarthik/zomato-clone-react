import React from "react";
import { restaurants } from "../../data/restaurants";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import DeliveryCollections from "./deliverCollections";
import "./delivery.css";
import TopBrands from "./topBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Pure Veg",
  },
  {
    id: 4,
    icon: <i className="fi fi-rr-sort-alt absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id: 5,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filtersList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Best Food in Bangalore"
      />
    </div>
  );
};

export default Delivery;
