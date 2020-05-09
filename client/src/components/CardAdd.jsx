import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import "/styles/CardAdd.css";

const CardAdd = () => {
  const [inputMode, setInputMode] = useState(false);

  if (inputMode === false) {
    return (
      <button
        className="add-button"
        onClick={() => {
          setInputMode(true);
        }}
      >
        Add a card
      </button>
    );
  } else {
    return (
      <div>
        <TextField id="outlined-basic" label="Enter a title for this card.." variant="outlined" /> <br />
        <button>Add Card</button>
      </div>
    );
  }
};

export default CardAdd;
