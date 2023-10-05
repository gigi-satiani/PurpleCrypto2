import { Box, useMediaQuery } from "@chakra-ui/react";
import Cards from "./Card";
import backgroundImg from "../images/backGrounds/emptyBG.jpg";
// coinImg
import bitcoinImg from "../images/cardImages/blueCardB.png";
import pinkEther from "../images/cardImages/pinkCardIcon.png";
import greenT from "../images/cardImages/bit3.png";
// coinRating
import blueR from "../images/cardImages/blueProcent.png";
import pinkR from "../images/cardImages/pinkProcent.png";
import greenR from "../images/cardImages/back3.png";

const CryptoCards = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 1200px)");

  const boxStyles = {
    flexDirection: isSmallScreen ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      gap={"20px"}
      paddingTop={"200px"}
      backgroundImage={backgroundImg}
      backgroundPosition={"center center"}
      //@ts-ignore
      style={boxStyles}
    >
      <Cards
        title={""}
        imageOne={bitcoinImg}
        imageTwo={blueR}
        description={"Bitcoin"}
        text={"USD 90, 360.50"}
        shortName={"BTC"}
        cardColor={{ backgroundColor: "#09185E" }}
      />
      <Cards
        title={""}
        imageOne={pinkEther}
        imageTwo={pinkR}
        description={"Etherium"}
        text={"USD 630.00"}
        shortName={"ETH"}
        cardColor={{ backgroundColor: "#09185E" }}
      />
      <Cards
        title={""}
        imageOne={greenT}
        imageTwo={greenR}
        description={"Tether"}
        text={"USD 299.08"}
        shortName={"THR"}
        cardColor={{ backgroundColor: "#09185E" }}
      />
    </Box>
  );
};

export default CryptoCards;
