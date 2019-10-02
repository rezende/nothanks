import React from 'react'
import { Client } from 'boardgame.io/react'
import { IdRatherNot } from './game'
import { IdRatherNotBoard } from './board';
//import logger from 'redux-logger'
//import { applyMiddleware } from 'redux'


const IdRatherNotClient = Client({
  game: IdRatherNot,
  numPlayers: 3,
  board: IdRatherNotBoard,
  multiplayer: { local: true },
  //enhancer: applyMiddleware(logger)
});




const App = () => (
  <div>
    <IdRatherNotClient playerID="0" />
    <IdRatherNotClient playerID="1" />
    <IdRatherNotClient playerID="2" />
  </div>
)

export default App;
