import { Box, HStack, Image } from "@chakra-ui/react";
import styled from "styled-components";
import Logo from "../images/header/HeaderLogo.png";
import TheButton from "./TheButton";
import SearchInput from "./SearchInput";
import backGround from "../images/backGrounds/emptyBG.jpg";

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
  color: #fff;
  :hover {
    color: #007bff;
    transition: all 0.3s ease-in-out 0s;
  }
`;

const DivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
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
    <HStack
      p={2}
      style={DivStyle}
      flexDirection={"column"}
      bgImage={backGround}
      backgroundPosition={"center center"}
      className="backGroundImageStyle"
      paddingBottom={"70px"}
    >
      <Box style={DivStyle}>
        <Image src={Logo} w={"15%"} marginRight={"100px"} />
        <HeaderUl>
          {NavLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>{" "}
            </li>
          ))}
        </HeaderUl>
        <TheButton
          Buttontext="Get Token"
          style={{
            color: "white",
            fontSize: "18px",
          }}
          onClick={function (): void {}}
          children={undefined}
        />
      </Box>
      <SearchInput />
    </HStack>
  );
};

export default Header;
