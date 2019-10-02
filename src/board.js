import React from 'react'


export class IdRatherNotBoard extends React.Component {
  noThanks() {
    this.props.moves.noThanks()
    this.props.events.endTurn()
  }
  takeCard() {
    this.props.moves.takeCard()
  }
  render() {
    const { G, playerID, isActive, ctx } = this.props
    return (
      <div>
        <p> Table: [{G.tableCard}] <span>{"o".repeat(G.tableTokens)} ({G.tableTokens})</span> </p>
        <p> My tokens: <span>{"o".repeat(G.players[playerID].tokens)} ({G.players[playerID].tokens})</span> </p>
        <p> My cards: [{G.players[playerID].cards.join('], [')}] </p>
        <p> My score: [{G.players[playerID].publicScore}] </p>
        {ctx.gameover && 
          <div>
            <p>Final Score {ctx.gameover.scores[playerID].final}</p>
          </div>
        }
        <p><button onClick={this.noThanks.bind(this)} disabled={!isActive || G.players[playerID].tokens < 1}>No Thanks</button> <button onClick={this.takeCard.bind(this)} disabled={!isActive}>Take Card</button></p>
      </div>
    )
  }
}