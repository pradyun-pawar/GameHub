import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const refe = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (refe.current) onSearch(refe.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={refe}
          borderRadius={20}
          placeholder="Dive into the Realm..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
