import styled from "styled-components";

export const AStyled = styled.a`
    background-color: ${({ bgColor }) => bgColor || "white"};
    color: ${({ txtColor }) => txtColor || "white"};
    padding: 10px;
    font-size: 14px;
    border-radius: 15px;
    border: none;
   margin: 5px;
   text-align: center;
   text-decoration: none;
   
`