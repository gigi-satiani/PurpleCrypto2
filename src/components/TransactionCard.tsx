import { Box, Image } from "@chakra-ui/react";
import TheButton from "./TheButton";
import icon from "../images/smallIcons/tableIconBlue.png";
import gvelesiani from "../images/AnimeImages/gvelesiani.png";
import "../App.css";

const TransactionCard = () => {
  return (
    <Box width={"100%"} position={"relative"} zIndex={"1"}>
      <Box
        width={"100%"}
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
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
          <TheButton
            Buttontext="How it Works"
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "20px",
            }}
            onClick={function (): void {}}
            children={undefined}
          />
          <TheButton
            Buttontext="White Paper"
            style={{
              color: "white",
              fontSize: "18px",
              marginLeft: "20px",
            }}
            onClick={function (): void {}}
            children={undefined}
          />
        </div>
      </Box>
      <Image
        src={gvelesiani}
        w={"300px"}
        position={"absolute"}
        bottom={"-50px"}
        left={"-50px"}
        zIndex={-1}
        animation={"bounce 3s infinite"}
      />
    </Box>
  );
};

export default TransactionCard;
