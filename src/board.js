import React from 'react'


export class IdRatherNotBoard extends React.Component {
  noThanks() {
    this.props.moves.noThanks()
    this.props.events.endTurn()
  }
  render() {
    const { G, playerID } = this.props
    return (
      <div>
        <p> Table: {G.tableCard} - {G.tableTokens} </p>
        <p> My tokens: {G.players[playerID].tokens} </p>
        <p> My cards: {G.players[playerID].cards} </p>
        <p><button onClick={this.noThanks.bind(this)} disabled={!this.props.isActive}>I'd Rather Not</button></p>
      </div>
    )
  }
}