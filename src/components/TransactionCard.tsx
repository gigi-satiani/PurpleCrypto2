import { Box, Image } from "@chakra-ui/react";
import TheButton from "./TheButton";
import icon from "../images/smallIcons/tableIconBlue.png";
import "../App.css";

const TransactionCard = () => {
  return (
    <Box width={"28%"}>
      <div className="d-flex align-items-center transactionHeading">
        <Image src={icon} w={"10%"} margin={"5px"} />
        <p> Secure & Safe Crypto Currency </p>
      </div>
      <div>
        <h2 className="transactionBigText">
          Make Your <span>Crypto</span> Transaction
        </h2>
        <p>
          buy and Sales 100+ Cryptocurrencies with 20+ flat currencies market
          using bank transfers or your credit/debit card in your exchange type
          bitcoin establshed token area.
        </p>
      </div>
      <div className="d-flex justify-content-between pt-5">
        <TheButton Buttontext="How it Works" />
        <TheButton Buttontext="White Paper" />
      </div>
    </Box>
  );
};

export default TransactionCard;
