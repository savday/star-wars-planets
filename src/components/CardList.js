import React from "react";
import Card from "./Card";

const CardList = ({ items, isLoading }) => {
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section className="cards">
      {items.map((item, i) => (
        <Card key={i} name={items[i].name} />
      ))}
    </section>
  );
};

export default CardList;
