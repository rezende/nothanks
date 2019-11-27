import React from 'react'


export class NoThanksBoard extends React.Component {
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
        <p> <div style={{ 'display': 'flex', 'justify-content': 'center'}}><span style={{ 'font-weight': 'bold', 'font-size': '200%' }}>{G.tableCard}</span> <span>{"o".repeat(G.tableTokens)} ({G.tableTokens})</span> </div></p>
        <p><button onClick={this.noThanks.bind(this)} disabled={!isActive || G.players[playerID].tokens < 1}>No Thanks</button> <button onClick={this.takeCard.bind(this)} disabled={!isActive}>Take Card</button></p>
        <p> My cards: [{G.players[playerID].cards.join('], [')}] </p>
        <p> My tokens: <span>{"o".repeat(G.players[playerID].tokens)} ({G.players[playerID].tokens})</span> </p>
        <p> My score: [{G.players[playerID].publicScore}] </p>
        {ctx.gameover && 
          <div>
            <p>Final Score {ctx.gameover.scores[playerID].final}</p>
          </div>
        }
      </div>
    )
  }
}