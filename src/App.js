import React from "react";
import { Client } from 'boardgame.io/react'
import { NoThanks } from './game'
import { NoThanksBoard } from './board';
import { SocketIO } from 'boardgame.io/multiplayer'

const NoThanksString= 'NOTHANKS'

const NoThanksClient = Client({
  game: NoThanks,
  numPlayers: 3,
  board: NoThanksBoard,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
});

const getPlayerID = () => ('0')

const getGameRoomID = () => ('432')

const getGame = (gameName) => {
  if (gameName === NoThanksString)
    return <NoThanksClient playerID={getPlayerID()} gameID={getGameRoomID()} />
}


const App = () => (
  <div>
    {getGame(NoThanksString)}
  </div>
)

export default App;
