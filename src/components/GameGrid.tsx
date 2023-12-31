import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardComponent from "./GameCardComponent";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      marginRight={1.5}
      spacing={5}
    >
      {isLoading &&
        skeletons.map((element) => (
          <GameCardComponent key={element}>
            <GameCardSkeleton />
          </GameCardComponent>
        ))}
      {data.map((game) => (
        <GameCardComponent key={game.id}>
          <GameCard game={game} />
        </GameCardComponent>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
