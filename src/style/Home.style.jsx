import styled from "styled-components"

export const StyleHomePage = styled.div`
min-height: 100vh;
max-height: auto;
width: 100%;
background-color: #282c34;
display: flex;
flex-direction: column;
`

export const HeaderSection = styled.section`
    width: 100%;
    height: 500px;
    background-image: url("https://popmenucloud.com/cdn-cgi/image/width%3D2880%2Cheight%3D2880%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/cuatpyeq/19abf852-6881-4355-993b-5c474abcb17b.jpg");
    background-size: cover;
    background-position: center;

    @media (max-width: 768px){
    height:50%;
}
`



export const Overlay = styled.div`
 background: rgba(0, 0, 0, 0.466);
 overflow: hidden;
 height: 100%;
 width: 100%;
 text-align: center;

 @media (max-width: 768px){
    height:50%;
}

`
export const OverlayContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

@media (max-width: 768px){
    padding: 50px;
    p{
        font-size: 14px;
        margin: 10px 0;
    }
}
`
export const Heading = styled.h1`
color: #eee;
font-weight: 700;
margin: 0;

@media (max-width: 768px){
   font-size: 30px;
}
`


export const WorkingHourSection = styled.section`
color: white;
padding: 100px 50px;
display: flex;
justify-content: space-evenly;
width: 100%;


@media (max-width: 768px) {
    flex-direction: column;
    h2{
       font-size: 30px; 
       text-align: center;
    }

    padding: 50px;
    
}
`


export const WHHeader = styled.div`
    font-weight: bold;

    h2{
        font-size: 20px;
        text-align: left;
    }
`


export const WHBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:100px;
    padding-top: 20px;

    p{
        margin: 20px 0;
    }

    @media (max-width: 768px) {
        margin-left:0;
    }
  
`

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

        @media (max-width: 768px) {
            font-size: 35px;
        }
`

export const ProductsItems = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
`
export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    width: 260px;
    img{
        border-radius: 20px 20px 0px 0px;
        height: 200px;
    }

    
@media (max-width: 768px){
    width: 80%;
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
    background-color: #282c34;
    border-radius: 0 0 20px 20px;
    padding: 10px;
`

export const ProductDescription = styled.div`
    color: white;
    font-size: 12px!important;
`

