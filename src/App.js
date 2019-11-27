import React from 'react'
import { Client } from 'boardgame.io/react'
import { NoThanks } from './game'
import { NoThanksBoard } from './board';
//import logger from 'redux-logger'
//import { applyMiddleware } from 'redux'


const NoThanksClient = Client({
  game: NoThanks,
  numPlayers: 3,
  board: NoThanksBoard,
  multiplayer: { local: true },
  //enhancer: applyMiddleware(logger)
});




const App = () => (
  <div>
    <NoThanksClient playerID="0" />
    <NoThanksClient playerID="1" />
    <NoThanksClient playerID="2" />
  </div>
)

export default App;
