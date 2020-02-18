import React from "react";
import Typography from "@material-ui/core/Typography";
import TokenIcon from "@material-ui/icons/RadioButtonChecked";

import {
  StyledPaper,
  Content,
  TableCard,
  PlayerCard,
  MovesButton
} from "./Board.style";

const TokenList = ({ size, isTable }) => (
  <>
    {Array.from({ length: size }, (_, i) => (
      <TokenIcon color="secondary" key={i} />
    ))}
    {`(${size} tokens${isTable ? " on table)" : ")"}`}
  </>
);

const MovesList = ({
  noThanksDisabled,
  takeCardDisabled,
  noThanks,
  takeCard
}) => (
  <>
    <MovesButton
      variant="contained"
      color="primary"
      onClick={noThanks}
      disabled={noThanksDisabled}
    >
      No Thanks
    </MovesButton>
    <MovesButton
      variant="contained"
      color="primary"
      onClick={takeCard}
      disabled={takeCardDisabled}
    >
      Take Card
    </MovesButton>
  </>
);

const Board = props => {
  const noThanks = () => {
    props.moves.noThanks();
    props.events.endTurn();
  };
  const takeCard = () => {
    props.moves.takeCard();
  };

  const { G, playerID, isActive, ctx } = props;
  return (
    <StyledPaper variant="outlined">
      <Content>
        <TableCard raised>
          <Typography align="center" variant="h1">
            {G.tableCard}
          </Typography>
        </TableCard>
      </Content>

      <Content margin>
        <TokenList size={G.tableTokens} isTable />
      </Content>

      <MovesList
        noThanksDisabled={!isActive || G.players[playerID].tokens < 1}
        takeCardDisabled={!isActive}
        noThanks={noThanks}
        takeCard={takeCard}
      />

      <Content start={1}>
        <Typography variant="h4">{`My cards: ${
          G.players[playerID].cards.length ? "" : "nothing."
        }`}</Typography>
        {G.players[playerID].cards.map((card, _) => (
          <PlayerCard key={card}>
            <Typography variant="h6" align="center">
              {card}
            </Typography>
          </PlayerCard>
        ))}
      </Content>

      <Content start={1}>
        <Typography variant="h4">{"My tokens:"}</Typography>
        <TokenList size={G.players[playerID].tokens} />
      </Content>

      <Typography variant="h4">{`My score: ${G.players[playerID].publicScore}`}</Typography>

      {ctx.gameover && (
        <Typography variant="h4">
          Final Score {ctx.gameover.scores[playerID].final}
        </Typography>
      )}
    </StyledPaper>
  );
};

export default Board;
