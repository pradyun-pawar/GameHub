import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        SOrt by releveance
      </MenuButton>
      <MenuList>
        <MenuItem>hi</MenuItem>
        <MenuItem>hello</MenuItem>
        <MenuItem>listen</MenuItem>
        <MenuItem>be</MenuItem>
        <MenuItem>b</MenuItem>
        <MenuItem>c</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
