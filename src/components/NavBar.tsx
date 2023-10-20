import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px" marginRight={1}>
      <Image src={logo} boxSize="60px" />
      <SearchBar onSearch={onSearch} />
      <Show above="400px">
        <ColorModeSwitch />
      </Show>
    </HStack>
  );
};

export default NavBar;
