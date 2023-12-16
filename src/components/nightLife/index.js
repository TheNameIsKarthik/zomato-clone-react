import React from "react";
import Collection from "../common/collection";
import Filters from "../common/filters";
import { nightLife } from "../../data/nightLife";
import "./nightLife.css";
import ExploreSection from "../common/exploreSection";

const collectionList = [
  {
    id: 1,
    title: "Trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/e15d090b71c5f3d7b135c88798604070_1618898707.jpg",
    places: "11 Places",
  },
  {
    id: 2,
    title: "Newly Opened",
    cover:
      "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015789.jpg",
    places: "12 Places",
  },
  {
    id: 3,
    title: "Veggie Friendly",
    cover:
      "https://b.zmtcdn.com/data/collections/5d13e5bef6e5a44cfb7ea19fb915a9ba_1616407816.jpg",
    places: "23 Places",
  },
  {
    id: 4,
    title: "Live Sports Screening",
    cover:
      "https://b.zmtcdn.com/data/collections/83fed288b6d32c932b7d3a0034c4f947_1625650348.png",
    places: "12 Places",
  },
  {
    id: 5,
    title: "Best of Bengaluru",
    cover:
      "https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg",
    places: "116 Places",
  },
  {
    id: 6,
    title: "Outdoor Seating",
    cover:
      "https://b.zmtcdn.com/data/collections/b1d388518012c80696487c08ca08e325_1582201041.jpg",
    places: "15 Places",
  },
  {
    id: 7,
    title: "Brilliant Biryanis",
    cover:
      "https://b.zmtcdn.com/data/collections/81dc179878a8d9e8b2ab03e4eaeab0df_1459434256.jpg",
    places: "16 Places",
  },
  {
    id: 8,
    title: "Best Pizza places in Town",
    cover:
      "https://b.zmtcdn.com/data/collections/6398cf5475ba51e532003912a8151436_1616403332.jpg",
    places: "23 Places",
  },
];

const nightFilters = [
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
    title: "Great Offers",
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
];

const nightList = nightLife;
const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterlist={nightFilters} />
      </div>
      <ExploreSection
        list={nightList}
        collectionName="Nightlife Restaurants in Bengaluru"
      />
    </div>
  );
};

export default NightLife;
