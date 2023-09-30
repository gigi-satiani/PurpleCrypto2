import TransactionCard from "./TransactionCard";
import TimerCard from "./TimerCard";
import { Box } from "@chakra-ui/react";
import backgroundImg from "../images/backGrounds/section2.png";
import "../App.css";

const TransactionTimer = () => {
  return (
    <Box
      backgroundImage={backgroundImg}
      className="backGroundImageStyle d-flex align-items-center
                 justify-content-end w-100 gap-24"
    >
      <TransactionCard />
      <TimerCard />
    </Box>
  );
};

export default TransactionTimer;
