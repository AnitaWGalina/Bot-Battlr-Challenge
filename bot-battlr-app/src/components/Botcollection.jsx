import React from 'react';
import './App.js';
import './Bot.jsx';
import './YourBotArmy.jsx';

function BotCollection({ bots, onAddToArmy }) {
  return (
    <div>
      <h2>Bots Available for Enlistment</h2>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
      ))}
    </div>
  );
}
