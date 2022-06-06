import styled from "styled-components";

export const ArtboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 50px;
`;

export const ArtboardImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ArtboardWrapper = styled.li`
  width: calc(20% - 32px);
  margin-right: 32px;
  margin-bottom: 20px;
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-bottom: 6px;
  background-color: rgba(0, 0, 0, 0.02);
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ThumbnailImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ThumbnailName = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
`;
