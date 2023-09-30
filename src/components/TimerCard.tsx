import { Box, Image } from "@chakra-ui/react";
import backImg from "../images/rollingStones/didi.png";
import midImg from "../images/rollingStones/shua.png";
import centerImg from "../images/rollingStones/patara.png";
import BSImage from "../images/rollingStones/BS.png";
import BImage from "../images/rollingStones/bigB.png";
import TokenImage from "../images/rollingStones/token.png";

const TimerCard = () => {
  return (
    <Box width={"50%"}>
      <figure style={{ position: "relative" }}>
        <Image
          src={backImg}
          position={"relative"}
          top={"0"}
          left={"0"}
          borderRadius={"50%"}
          animation={"rotateRight 10s infinite linear"}
        />
        <Image
          src={midImg}
          position={"absolute"}
          top={"60px"}
          left={"60px"}
          borderRadius={"50%"}
          animation={"rotateLeft 10s infinite linear"}
        />
        <Image
          src={centerImg}
          position={"absolute"}
          top={"107px"}
          left={"107px"}
          borderRadius={"50%"}
        />
        <Image
          src={BSImage}
          position={"absolute"}
          top={"100px"}
          left={"30px"}
        />
        <Image
          src={BImage}
          position={"absolute"}
          bottom={"100px"}
          left={"570px"}
        />
        <Image
          src={TokenImage}
          position={"absolute"}
          top={"30px"}
          left={"500px"}
          animation={"bounce 4s infinite"}
        />
      </figure>
    </Box>
  );
};

export default TimerCard;
