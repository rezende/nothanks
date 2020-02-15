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
    const yoyo = Object.keys(G.players).map((player, key) => <div key={key}>{G.players[key].cards}</div>)
    return (
      <div>
          {ctx.gameover && 
            <div>
              <p>Final Score {ctx.gameover.scores[playerID].final}</p>
            </div>
          }
        <div style={{ 'display': 'flex', 'justifyContent': 'center'}}><span style={{ 'fontWeight': 'bold', 'fontSize': '200%' }}>{G.tableCard}</span> <span>{"o".repeat(G.tableTokens)} ({G.tableTokens})</span> </div>
        <p><button onClick={this.noThanks.bind(this)} disabled={!isActive || G.players[playerID].tokens < 1}>No Thanks</button> <button onClick={this.takeCard.bind(this)} disabled={!isActive}>Take Card</button></p>
        <div id="myStuff">
          <p> My cards: [{G.players[playerID].cards.join('], [')}] </p>
          <p> My tokens: <span>{"o".repeat(G.players[playerID].tokens)} ({G.players[playerID].tokens})</span> </p>
          <p> My score: [{G.players[playerID].publicScore}] </p>
        </div>
        {yoyo}
      </div>
    )
  }
}
