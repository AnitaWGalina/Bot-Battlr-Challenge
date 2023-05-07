import React from "react";
import  './App.js';
import "./Botcollection.jsx";
import './YourBotArmy.jsx';


function Bot({ bot, onAddToArmy }) {
  const handleAddToArmy = () => {
    onAddToArmy(bot);
  };

  return (
    <div>
      <h3>{bot.name}</h3>
      <p>{bot.description}</p>
      <button onClick={handleAddToArmy}>Add to Army</button>
    </div>
  );
}

