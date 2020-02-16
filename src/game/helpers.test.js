import { calculateCardScore } from "./helpers";

describes("Calculates Card Store", () => {
  it("scores for empty deck", () => {
    let deck = [];
    const score = calculateCardScore(deck);
    expect(score).toEqual(0);
  });

  it("scores for single card", () => {
    let deck = [15];
    const score = calculateCardScore(deck);
    expect(score).toEqual(15);
  });

  it("scores for not sequences", () => {
    let deck = [3, 15, 17];
    const score = calculateCardScore(deck);
    expect(score).toEqual(35);
  });

  it("scores for sequence", () => {
    let deck = [3, 4, 5];
    const score = calculateCardScore(deck);
    expect(score).toEqual(5);
  });

  it("scores for full case", () => {
    let deck = [3, 4, 5, 10, 12, 22, 23, 24, 25, 27];
    const score = calculateCardScore(deck);
    expect(score).toEqual(79);
  });
});
