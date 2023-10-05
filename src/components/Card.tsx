import { Card, CardBody, Image, Box, CardHeader, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";

interface CardProps {
  imageOne?: string;
  imageTwo?: string;
  imageThree?: string;
  title: string;
  text: string;
  button?: string;
  description?: string;
  styles?: CSSProperties;
  shortName?: string;
  cardColor?: CSSProperties;
}

const Cards = ({
  title,
  imageOne,
  imageTwo,
  imageThree,
  text,
  description,
  button,
  styles,
  shortName,
  cardColor,
}: CardProps) => {
  return (
    <Card
      width={"450px"}
      position={"relative"}
      style={cardColor}
      borderRadius={"20px"}
    >
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          style={styles}
          paddingBottom={"50px"}
        >
          <Image
            src={imageOne}
            width={"60px"}
            position={"absolute"}
            top={"20px"}
            left={"20px"}
          />
          <Image
            src={imageTwo}
            width={"50% "}
            position={"absolute"}
            top={"20px"}
            right={"20px"}
          />
        </Box>
        <Text paddingBottom={"20px"} color={"gray"}>
          {description}
        </Text>
        <Box>
          <Image src={imageThree} />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text textColor={"#fffff"} fontSize={"20px"}>
            {text}
          </Text>
          <Text color={"gray"} fontSize={"20px"} fontWeight={"bold"}>
            {shortName}
          </Text>
        </Box>

        {button && <button>{button}</button>}
      </CardBody>
    </Card>
  );
};

export default Cards;
