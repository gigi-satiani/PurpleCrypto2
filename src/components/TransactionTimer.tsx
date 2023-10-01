import TransactionCard from "./TransactionCard";
import TimerCard from "./TimerCard";
import { Box } from "@chakra-ui/react";
import backgroundImg from "../images/backGrounds/section2.png";
import "../App.css";

const TransactionTimer = () => {
  return (
    <Box
      backgroundImage={backgroundImg}
      width={"100%"}
      className="backGroundImageStyle d-flex align-items-center
    justify-content-center"
    >
      <Box
        className="d-flex align-items-center justify-content-center"
        width={"85%"}
      >
        <TransactionCard />
        <TimerCard />
      </Box>
    </Box>
  );
};

export default TransactionTimer;
