import React, { FC, useState } from "react";
import { ArtboardNavigatorImg, ArtboardNavigatorText } from "./styles";
import ArrowLeftSvg from "../../assets/arrow-left.svg";
import ArrowRightSvg from "../../assets/arrow-right.svg";
import BreadcrumbSvg from "../../assets/breadcrumb.svg";

interface NavigatorProps {
  index: number;
  total: number;
  onChange: (index: number) => void;
}

const Navigator: FC<NavigatorProps> = ({ index, total, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const onArrowClick = (newIndex: number) => {
    if (newIndex >= 0 && newIndex <= total - 1) {
      setCurrentIndex(newIndex);
      onChange(newIndex);
    }
  };

  return (
    <>
      <ArtboardNavigatorImg
        onClick={() => onArrowClick(currentIndex - 1)}
        src={ArrowLeftSvg}
        alt="previous image"
      />
      <ArtboardNavigatorText>{currentIndex + 1}</ArtboardNavigatorText>
      <ArtboardNavigatorImg src={BreadcrumbSvg} alt="breadcrumb" />
      <ArtboardNavigatorText>{total}</ArtboardNavigatorText>
      <ArtboardNavigatorImg
        onClick={() => onArrowClick(currentIndex + 1)}
        src={ArrowRightSvg}
        alt="next image"
      />
    </>
  );
};

export default Navigator;
