import React from 'react'
import { Client } from 'boardgame.io/react'
import { IdRatherNot } from './game'
import { IdRatherNotBoard } from './board';

const IdRatherNotClient = Client({
  game: IdRatherNot,
  numPlayers: 3,
  board: IdRatherNotBoard,
  multiplayer: { local: true },
});


const App = () => (
  <div>
    <IdRatherNotClient playerID="0" />
    <IdRatherNotClient playerID="1" />
    <IdRatherNotClient playerID="2" />
  </div>
)

export default App;
