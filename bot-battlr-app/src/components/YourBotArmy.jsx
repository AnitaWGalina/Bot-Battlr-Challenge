import React from "react";
import './Bot.jsx';
import './Botcollection.jsx';
import './App.js';


function YourBotArmy({ army, onReleaseFromArmy }) {
  const handleReleaseFromArmy = (bot) => {
    onReleaseFromArmy(bot);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>{bot.description}</p>
          <button onClick={() => handleReleaseFromArmy(bot)}>
            Release from Army
          </button>
          <button onClick={() => handleDischargeFromService(bot.id)}>
            Discharge from Service
          </button>
        </div>
      ))}
    </div>
  );
}
