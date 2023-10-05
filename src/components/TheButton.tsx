import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 30px;
  outline: 1px solid #7a00ff;

  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    border: none;
    border-radius: 40px;
    z-index: -1;
    inset: 0;
    background: linear-gradient(45deg, #002bff, #7a00ff, #ff00c8);

    scale: 0 1;
    transition: scale ease-in-out 0.5s;
    transform-origin: right;
  }
  &:hover::after {
    scale: 1 1;
    transform-origin: left;
    border: none;
  }
`;

interface Props {
  Buttontext: string;
  style: CSSProperties;
  onClick: () => void;
  children: ReactNode;
}

const TheButton: React.FC<Props> = ({
  Buttontext,
  style,
  onClick,
  children,
}) => {
  return (
    <div>
      <ButtonStyle style={style} onClick={onClick}>
        {Buttontext}
      </ButtonStyle>
    </div>
  );
};

export default TheButton;
