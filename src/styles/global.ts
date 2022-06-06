import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}
#root{
    margin:0 auto;
}
`;

export const Container = styled.div`
  display: flex;
  padding: 1em;
`;

export const ListLink = styled(Link)`
  text-decoration: none;
`;
