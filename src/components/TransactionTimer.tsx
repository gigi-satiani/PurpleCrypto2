import TransactionCard from "./TransactionCard";
import TimerCard from "./TimerCard";
import { Box, useMediaQuery } from "@chakra-ui/react";
import backgroundImg from "../images/backGrounds/section2.png";
import "../App.css";

const TransactionTimer = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 1500px)");

  const boxStyles = {
    flexDirection: isSmallScreen ? "column" : "row",
  };

  return (
    <Box
      backgroundImage={backgroundImg}
      width={"100%"}
      className="backGroundImageStyle d-flex
    justify-content-center"
    >
      <Box
        className="d-flex align-items-center justify-content-center"
        width={"85%"}
        //@ts-ignore
        style={boxStyles}
      >
        <TransactionCard />
        <TimerCard />
      </Box>
    </Box>
  );
};

export default TransactionTimer;
