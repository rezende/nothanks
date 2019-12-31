import React from 'react'
import { Local } from 'boardgame.io/multiplayer'
import { Client } from 'boardgame.io/react'
import { NoThanks } from './game'
import { NoThanksBoard } from './board';


const NoThanksClient = Client({
  game: NoThanks,
  numPlayers: 3,
  board: NoThanksBoard,
  multiplayer: Local(),
});




const App = () => (
  <div>
    <NoThanksClient playerID="0" />
    <NoThanksClient playerID="1" />
    <NoThanksClient playerID="2" />
  </div>
)

export default App;
