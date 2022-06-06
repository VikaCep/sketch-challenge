import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #131a22;
  background-color: white;
  padding-left: 15px;
  box-shadow: 0 1px 8px #ddd;
  height: 60px;
`;

export const NavbarTitle = styled.div`
  color: black;
  font-size: 13px;
  line-height: 1.5;
  margin-left: 15px;
`;

export const ArtboardName = styled(NavbarTitle)`
  font-weight: bold;
  margin-left: 0;
`;

export const NavbarEdge = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 1.5em;
  padding: 0.2em 0.1em;
  cursor: pointer;
`;

export const CloseImg = styled.img`
  cursor: pointer;
  width: 8px;
`;

export const CloseLink = styled(Link)`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  height: 45px;
`;

export const NavigatorWrapper = styled.div`
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  width: 100px;
`;

export const ArtboardNavigatorImg = styled.img`
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  width: 25px;
`;
