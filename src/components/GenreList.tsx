import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List marginTop={1.5}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="4px">
          <HStack>
            <Image
              boxSize="33px"
              borderRadius={7}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              colorScheme={genre.id === selectedGenre?.id ? "yellow" : "white"}
              onClick={() => {
                onSelectedGenre(genre);
              }}
              variant="link"
              fontSize="16.5px"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
