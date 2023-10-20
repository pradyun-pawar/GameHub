import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || " "} ${
    gameQuery.genre?.name || " "
  } Games`;

  return (
    <Heading marginTop="-7px" paddingLeft={2} marginBottom={2} fontSize={55}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
