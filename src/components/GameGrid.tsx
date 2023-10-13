import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardComponent from "./GameCardComponent";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="11px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((element) => (
            <GameCardComponent>
              <GameCardSkeleton key={element} />
            </GameCardComponent>
          ))}
        {data.map((game) => (
          <GameCardComponent>
            <GameCard key={game.id} game={game} />
          </GameCardComponent>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
