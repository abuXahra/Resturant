import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.div`
padding: 0;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: green;
height: 80px;
`

export const Hamburger = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    display: none;

   

    span{
        height: 2px;
        width: 25px;
       color: white;
        margin-bottom:4px;
        margin-right: 10px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`




export const MenuLink = styled(Link)`
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: white;
transition: all 0.3s ease-in;
font-size: 0.9rem;

&:hover{
    color: white;
}
`

export const Menu = styled.div`
display: flex;
align-items: center;
position: relative;
padding-right : 20px;

@media (max-width: 768px) {
 overflow: hidden;
 flex-direction: column;
 width: 100%;
 max-height: ${({ isOpen }) => isOpen ? "auto" : "0"};
 transition: max-height 0.3s ease-in;
 background-color: green;
 padding-bottom: ${({ isOpen }) => isOpen ? "20px" : "0"}; 
 padding-top: ${({ isOpen }) => isOpen ? "20px" : "0"}; 
 padding-right : 0px;
}
`

export const Logo = styled.a`
padding: 1rem 0;
color: white;
text-decoration: none;
font-weight: 800;
font-size: 1.7rem;
margin-left: 20px;

span{
    font-weight: 300;
    font-size: 1.3rem;
}

@media (max-width: 768px) {
    padding: 0;
    text-align: left;
}
`

