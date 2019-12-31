import { Game, INVALID_MOVE } from 'boardgame.io/core'

// taken from https://stackoverflow.com/a/21822316
function sortedIndex(value, array) {
    let low = 0
    let high = array.length
    while (low < high) {
        let mid = (low + high) >>> 1
        if (array[mid] < value) low = mid + 1
        else high = mid
    }
    return low
}


export function insert(element, array) {
  const indexToInsert = sortedIndex(element, array)
  array.splice(indexToInsert, 0, element)
  return array
}

function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt)
}

function calculateFinalScore(player) {
  return calculateCardScore(player.cards) - player.tokens
}

export function calculateCardScore(deck) {
  let deckLength = 0
  deckLength = typeof deck == 'undefined' ? 0 : deck.length
  if (deckLength === 0)
    return 0
  let score = 0
  for (const [i, card] of deck.entries()) {
    if (i+1 === deckLength)
      score += card
    else if (deck[i+1] - card > 1) {
      score += card
    }
  }
  return score
}

export const NoThanks = Game(
  {
    setup: (ctx) => {
      let deck = ctx.random.Shuffle(range(33, 3)).slice(0, 24)
      const tableCard = deck.pop()
      return {
        deck: deck,
        tableCard: tableCard,
        tableTokens: 0,
        players: {
          '0': { tokens: 11, cards: [], publicScore: 0 },
          '1': { tokens: 11, cards: [], publicScore: 0 },
          '2': { tokens: 11, cards: [], publicScore: 0 }
        },
        endGame: false
      }
    },
    // playerView: PlayerView.STRIP_SECRETS,
    moves: {
      noThanks(G, ctx) {
        if (G.players[ctx.currentPlayer].tokens < 1)
          return INVALID_MOVE
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
        const playerDeck = [...G.players[ctx.currentPlayer].cards]
        const newPlayerDeck = insert(G.tableCard, playerDeck)
        let deck = [...G.deck]
        if (deck.length < 1) {
          ctx.events.endGame(
            {
              scores: {
                '0': { final: calculateFinalScore(G.players['0'])},
                '1': { final: calculateFinalScore(G.players['1'])},
                '2': { final: calculateFinalScore(G.players['2'])},
              }
            }
           )
        }
        const newTableCard = deck.pop()
        //TODO: separate public and private info
        return {
          ...G,
          tableTokens: 0,
          tableCard: newTableCard,
          players: {
            ...G.players,
            [ctx.currentPlayer]: {
              ...G.players[ctx.currentPlayer],
              tokens: G.players[ctx.currentPlayer].tokens + G.tableTokens,
              cards: newPlayerDeck,
              publicScore: calculateCardScore(newPlayerDeck)
            }
          },
          deck: deck
        }
      }
    },


  }
)
