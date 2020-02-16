function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}

function calculateFinalScore(player) {
  return calculateCardScore(player.cards) - player.tokens;
}

function calculateCardScore(deck) {
  let deckLength = 0;
  deckLength = typeof deck == "undefined" ? 0 : deck.length;
  if (deckLength === 0) return 0;
  let score = 0;
  for (const [i, card] of deck.entries()) {
    if (i + 1 === deckLength) score += card;
    else if (deck[i + 1] - card > 1) {
      score += card;
    }
  }
  return score;
}

export { calculateCardScore, calculateFinalScore, range };
