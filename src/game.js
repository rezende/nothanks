import { Game, PlayerView } from 'boardgame.io/core'

function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}

export const IdRatherNot = Game(
  {
    setup: (ctx) => {
      let deck = ctx.random.Shuffle(range(33, 3)).slice(0, 24)
      const tableCard = deck.pop()
      return {
        secret: {
          deck: deck,
        },
        tableCard: tableCard,
        tableTokens: 0,
        players: {
          '0': { tokens: 11, cards: [] },
          '1': { tokens: 11, cards: [] },
          '2': { tokens: 11, cards: [] }
        },
        endGame: false
      }
    },
    playerView: PlayerView.STRIP_SECRETS,
    moves: {
      noThanks(G, ctx) {
        return {
          ...G,
          tableTokens: G.tableTokens + 1,
          players: {
            ...G.players,
            [ctx.currentPlayer]: {
              ...G.players[ctx.currentPlayer],
              tokens: G.players[ctx.currentPlayer].tokens - 1
            }
          }
        }
      },
      takeCard(G, ctx) {
        let deck = G.secret.deck
        const playerTokens = G.players[ctx.currentPlayer].tokens
        G.players[ctx.currentPlayer].tokens = playerTokens + G.tableTokens
        G.tableTokens = 0
        G.players[ctx.currentPlayer].cards.push(G.tableCard)
        if (deck.length === 0) {
          G.endGame = true
        }
        G.secret = { deck: deck }
      }
    },

    flow: {
      endGameIf: (G, ctx) => (G.endGame === true),
    },
  }
)
