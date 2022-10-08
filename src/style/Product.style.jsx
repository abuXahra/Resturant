import styled from "styled-components";







// product section
export const ProductSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 100px 50px;

    @media (max-width: 768px){
        width: 100%;
        padding: 50px 0;
    }
`

export const ProductHeader = styled.h2`
        color: #023020;
        text-align: center;
        margin-bottom: 50px;
`

export const ProductsItems = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
`
export const ProductContainer = styled.div`
    display: flex;
    margin: 20px 0px;
    width: auto;

   
height: 270px;
   
   
    img{
        border-radius: 20px 0px 0px 20px;
        height:100%;
    }

    
@media (max-width: 768px){
    width: 45%;
    margin: 10px;
}

`



export const PriceContainer = styled.div`
    display: flex;
    color: white;
    margin: 10px 0;
    justify-content: space-between;
    font-size: 13px;
    font-weight: bold;
`

export const ProductCategory = styled.div`
display: flex;
color: white;
margin: 10px 0;
justify-content: space-between;
font-size: 13px;
`

export const ProductDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: rgb(40, 44, 52);
    border-radius: 0px 20px 20px 0px;
    padding: 10px;
`

export const ProductDescription = styled.div`
    color: white;
    font-size: 12px!important;
`


export const ProductOrder = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

`


export const ProductCounter = styled.div`
    padding: "20px";
    font-size: "20px";
    color: white;
    margin: 0 10px;

`