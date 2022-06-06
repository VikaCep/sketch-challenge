import React, { FC } from "react";
import CloseSvg from "../../assets/close.svg";
import SeparatorSvg from "../../assets/separator.svg";
import * as S from "./styles";

interface CloseButtonProps {
  homeUrl: string;
}

const CloseButton: FC<CloseButtonProps> = ({ homeUrl }) => {
  return (
    <>
      <S.CloseLink to={homeUrl}>
        <S.CloseImg src={CloseSvg} alt="Close" />
      </S.CloseLink>
      <S.Separator src={SeparatorSvg} alt="Separator" />
    </>
  );
};

export default CloseButton;
