import React, { FC } from "react";
import CloseSvg from "../../assets/close.svg";
import SeparatorSvg from "../../assets/separator.svg";
import { CloseImg, CloseLink, Separator } from "./styles";

interface CloseButtonProps {
  homeUrl: string;
}

const CloseButton: FC<CloseButtonProps> = ({ homeUrl }) => {
  return (
    <>
      <CloseLink to={homeUrl}>
        <CloseImg src={CloseSvg} alt="Close" />
      </CloseLink>
      <Separator src={SeparatorSvg} alt="Separator" />
    </>
  );
};

export default CloseButton;
