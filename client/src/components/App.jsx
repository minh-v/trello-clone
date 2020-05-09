import React from "react";
import "/styles/app.css";
import CardList from "./CardList";

const tempCardItems = [{ title: "card 1" }, { title: "card 2" }, { title: "card 3" }];

const App = () => {
  return (
    <div>
      <CardList title={"card list title"} items={tempCardItems} />
    </div>
  );
};

export default App;
