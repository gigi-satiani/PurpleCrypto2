import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  padding: 10px 15px;
  border-radius: 30px;

  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    border-radius: 40px;
    z-index: -1;
    inset: 0;
    background: linear-gradient(45deg, #002bff, #7a00ff, #ff00c8);

    scale: 0 1.5;
    transition: scale ease-in-out 0.5s;
    transform-origin: right;
  }
  &:hover::after {
    scale: 1 1;
    transform-origin: left;
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
