import { range, calculateFinalScore } from "./helpers";
import { takeCard, noThanks } from "./moves";

const endIf = (G, ctx) => {
  if (G.deck.length < 1) {
    return {
      scores: {
        "0": { final: calculateFinalScore(G.players["0"]) },
        "1": { final: calculateFinalScore(G.players["1"]) },
        "2": { final: calculateFinalScore(G.players["2"]) }
      }
    };
  }
};

const playerView = (G, ctx, playerID) => {
  // TODO: strip tokens info for everybody except the current player
  return G;
};

const setup = ctx => {
  let deck = ctx.random.Shuffle(range(33, 3)).slice(0, 24);
  const tableCard = deck.pop();
  return {
    deck,
    tableCard,
    tableTokens: 0,
    players: {
      "0": { tokens: 11, cards: [], publicScore: 0 },
      "1": { tokens: 11, cards: [], publicScore: 0 },
      "2": { tokens: 11, cards: [], publicScore: 0 }
    },
    endGame: false
  };
};

const NoThanks = {
  setup,
  moves: {
    takeCard,
    noThanks
  },
  endIf,
  playerView
};

export default NoThanks;
