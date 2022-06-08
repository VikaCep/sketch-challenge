import React, { FC, useState } from "react";
import * as S from "./styles";
import ArrowLeftSvg from "../../assets/arrow-left.svg";
import ArrowRightSvg from "../../assets/arrow-right.svg";
import BreadcrumbSvg from "../../assets/breadcrumb.svg";

interface NavigatorProps {
  index: number;
  total?: number;
  onChange: (index: number) => void;
}

const Navigator: FC<NavigatorProps> = ({ index, total, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const onArrowClick = (newIndex: number) => {
    if (newIndex >= 0 && total && newIndex <= total - 1) {
      setCurrentIndex(newIndex);
      onChange(newIndex);
    }
  };

  return (
    <S.NavigatorWrapper>
      <S.ArtboardNavigatorImg
        onClick={() => onArrowClick(currentIndex - 1)}
        src={ArrowLeftSvg}
        alt="previous image"
      />
      <span data-testid="current-index">{currentIndex + 1}</span>
      <S.ArtboardNavigatorImg src={BreadcrumbSvg} alt="breadcrumb" />
      <span data-testid="total">{total || "..."}</span>
      <S.ArtboardNavigatorImg
        onClick={() => onArrowClick(currentIndex + 1)}
        src={ArrowRightSvg}
        alt="next image"
      />
    </S.NavigatorWrapper>
  );
};

export default Navigator;
