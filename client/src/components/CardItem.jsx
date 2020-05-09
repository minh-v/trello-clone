import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "/styles/CardItem.css";

const CardItem = (props) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(props.title);
  }, [props]);

  return (
    <div className="card-item-container">
      <Card>
        <CardContent>{title}</CardContent>
      </Card>
    </div>
  );
};

export default CardItem;
