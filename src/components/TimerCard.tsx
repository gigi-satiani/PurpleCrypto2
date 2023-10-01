import { Box, Image } from "@chakra-ui/react";
import backImg from "../images/rollingStones/didi.png";
import midImg from "../images/rollingStones/shua.png";
import centerImg from "../images/rollingStones/patara.png";
import BSImage from "../images/rollingStones/BS.png";
import BImage from "../images/rollingStones/bigB.png";
import TokenImage from "../images/rollingStones/token.png";

const TimerCard = () => {
  return (
    <Box display={"flex"} width={"100%"}>
      <figure
        style={{
          position: "relative",
          width: "960px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={backImg}
          width={"60%"}
          position={"relative"}
          top={"0"}
          left={"0"}
          borderRadius={"50%"}
          animation={"rotateRight 10s infinite linear"}
        />
        <Image
          src={midImg}
          width={"50%"}
          position={"absolute"}
          top={"45px"}
          left={"240px"}
          borderRadius={"50%"}
          animation={"rotateLeft 10s infinite linear"}
        />
        <Image
          src={centerImg}
          width={"38%"}
          position={"absolute"}
          top={"100px"}
          left={"300px"}
          borderRadius={"50%"}
        />
        <Image
          src={BSImage}
          position={"absolute"}
          top={"40px"}
          left={"240px"}
          width={"10%"}
        />
        <Image
          src={BImage}
          position={"absolute"}
          bottom={"0px"}
          left={"570px"}
        />
        <Image
          src={TokenImage}
          position={"absolute"}
          top={"30px"}
          left={"570px"}
          animation={"bounce 4s infinite"}
        />
      </figure>
    </Box>
  );
};

export default TimerCard;
