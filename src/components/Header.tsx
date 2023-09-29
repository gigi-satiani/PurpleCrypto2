import { Box, HStack, Image } from "@chakra-ui/react";
import styled from "styled-components";
import Logo from "../images/header/HeaderLogo.png";
import TheButton from "./TheButton";
import SearchInput from "./SearchInput";

const HeaderUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 20px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  :hover {
    color: #007bff;
    transition: all 0.3s ease-in-out 0s;
  }
`;

const DivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const Header = () => {
  const NavLinks = [
    "Demo",
    "About",
    "Pages",
    "Download map",
    "Team",
    "Contact",
  ];
  return (
    <HStack p={2} flexDirection={"column"} style={DivStyle}>
      <Box style={DivStyle}>
        <Image src={Logo} w={"15%"} marginRight={"100px"} />
        <HeaderUl>
          {NavLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>{" "}
            </li>
          ))}
        </HeaderUl>
        <TheButton Buttontext="Get Token" />
      </Box>
      <SearchInput />
    </HStack>
  );
};

export default Header;
