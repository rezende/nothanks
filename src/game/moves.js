import { INVALID_MOVE } from "boardgame.io/core";

import { calculateCardScore } from "./helpers";

const takeCard = (G, ctx) => {
  const playerDeck = G.players[ctx.currentPlayer].cards;
  const newPlayerDeck = [...playerDeck, G.tableCard].sort();
  let deck = [...G.deck];
  const newTableCard = deck.pop();
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
    deck
  };
};

const noThanks = (G, ctx) => {
  if (G.players[ctx.currentPlayer].tokens < 1) return INVALID_MOVE;
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
  };
};

export { takeCard, noThanks };
