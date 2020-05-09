import React, { useEffect, useState } from "react";
import "/styles/CardList.css";

import CardAdd from "./CardAdd";
import CardItem from "./CardItem";

const CardList = (props) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(props.title);
  }, [props]);

  return (
    <div className="card-list">
      <span className="card-title">{title}</span>
      <CardItem title={"card title"} />
      <CardAdd />
    </div>
  );
};

export default CardList;
