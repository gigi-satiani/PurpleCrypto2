import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup w={"85%"}>
      <Input
        borderRadius={20}
        placeholder="Search..."
        variant="filled"
        padding={5}
        marginTop={5}
        w={"100%"}
        border={"1px solid #007bff"}
        _focus={{
          outline: "none",
          ring: "none",
        }}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
