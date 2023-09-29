import { Button } from "@chakra-ui/react";

interface Props {
  Buttontext: string;
}

const TheButton = ({ Buttontext }: Props) => {
  return (
    <Button
      position="relative"
      overflow="hidden"
      isolation="isolate"
      _after={{
        position: "absolute",
        content: `""`,
        background: "transparent",
        inset: "0",
        zIndex: "-1",
        // transformOrigin: "right",
        scale: 0,
        transition: "all 0.5s ease-in-out 0s",
      }}
      _hover={{
        _after: {
          //   transformOrigin: "left",
          transition: "all 0.5s ease-in-out 0s",
          backgroundColor: "#007bff",
          color: "white",
          scale: 2,
        },
      }}
    >
      {Buttontext}
    </Button>
  );
};

export default TheButton;
