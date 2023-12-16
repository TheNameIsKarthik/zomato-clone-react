import React from "react";
import FilterItem from "./filterItem";
import "./filters.css";

const Filters = ({ filtersList }) => {
  return (
    <div className="filters">
      {filtersList &&
        filtersList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filters;
