import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const StyledPaper = styled(Paper)`
  padding: 15px;
  margin: 10px 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "center")};
  flex-wrap: wrap;
  align-items: center;
  ${({ margin }) => margin && "margin: 10px 0;"}
`;

const TableCard = styled(Card)`
  width: 150px;
`;

const PlayerCard = styled(Card)`
  margin: 0 5px;
  width: 30px;
`;

const MovesButton = styled(Button)`
  && {
    margin: 0 10px;
  }
`;

export { StyledPaper, Content, TableCard, PlayerCard, MovesButton };
