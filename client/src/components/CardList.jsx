import React, { useEffect, useState } from "react";
import "/styles/CardList.css";

import CardAdd from "./CardAdd";
import CardItem from "./CardItem";

const CardList = ({ title, items }) => {
  const [cardTitle, setCardTitle] = useState("");

  useEffect(() => {
    setCardTitle(title);
  }, [title]);

  const cardItems = items.map((item, index) => {
    return <CardItem title={item.title} key={index} />;
  });

  return (
    <div className="card-list">
      <span className="card-title">{title}</span>
      {cardItems}
      <CardAdd />
    </div>
  );
};

export default CardList;
