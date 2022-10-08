import React, { useState } from 'react';
import AnchorLink from '../components/AnchorLink';
import Button from '../components/Button';
import { PRODUCTS } from '../data/product';
import { PriceContainer, ProductCategory, ProductContainer, ProductDescription, ProductDetailWrapper, ProductHeader, ProductSection, ProductsItems, ProductOrder, ProductCounter } from '../style/Product.style';

const Product = () => {


    const [count, setcount] = useState(0);

    const increementCount = () => {

        setcount(count + 1);

    };

    const decreementCount = () => {
        if (count === 0) {
            setcount(count)
        } else
            setcount(count - 1);

    };


    return (

        <ProductSection>
            <ProductHeader>Our Products</ProductHeader>
            {/* Products */}

            <ProductsItems>
                {
                    PRODUCTS.map((product, index) => (
                        <ProductContainer key={index}>
                            <img src={product.productImg} alt="" srcset="" />
                            <ProductDetailWrapper>
                                {/* Product and Price name container */}
                                <PriceContainer>
                                    <span>{product.productName}</span>
                                    <span>{product.productPrice}</span>
                                </PriceContainer>

                                {/* Product Descriptions */}
                                <ProductDescription>
                                    {product.productDescription}
                                </ProductDescription>

                                {/* Product Category */}
                                <ProductCategory>
                                    <span>Category</span>
                                    <span>{product.productCategory}</span>
                                </ProductCategory>

                                {/* View Product Link */}

                                <ProductOrder>

                                    <Button
                                        text={"-"}
                                        bgColor={"white"}
                                        textColor={"green"}
                                        clikFunc={""}
                                    />
                                    <ProductCounter>{count}</ProductCounter>
                                    <Button
                                        text={"+"}
                                        bgColor={"white"}
                                        textColor={"green"}
                                        clikFunc={""}
                                    />
                                </ProductOrder>

                                <AnchorLink
                                    text={'Order'}
                                    url="/products"
                                    bgColor={"green"}
                                    textColor={"white"}
                                />
                            </ProductDetailWrapper>
                        </ProductContainer>
                    ))
                }


            </ProductsItems>
        </ProductSection>

    );
}

export default Product;




// {
//     PRODUCTS.map((product, index) => (
//         <ProductContainer key={index}>
//             {/*Product Image  */}
//             <img src={product.productImg} alt="" srcset="" />
//             {/* Product Detail Wrapper */}
//             <ProductDetailWrapper>
//                 {/* Product and Price name container */}
//                 <PriceContainer>
//                     <span>{product.productName}</span>
//                     <span>{product.productPrice}</span>
//                 </PriceContainer>

//                 {/* Product Descriptions */}
//                 <ProductDescription>
//                     {product.productDescription}
//                 </ProductDescription>

//                 {/* Product Category */}
//                 <ProductCategory>
//                     <span>Category</span>
//                     <span>{product.productCategory}</span>
//                 </ProductCategory>


//                 {/* View Product Link */}
//                 <div style={{ display: "flex", justifyContent: "space-between" }}>
//                     <p style={{ border: "1px solid green", padding: "0 10px", borderRadius: "10px" }}>
//                         <span style={{ padding: "0 5px", fontSize: "20px", cursor: "pointer" }} onClick={decreementCount} >-</span>
//                         <b style={{ padding: "0 5px", fontSize: "20px", }}>{count}</b>
//                         <span onClick={increementCount} style={{ padding: "0 5px", fontSize: "20px", cursor: "pointer" }}>+</span>
//                     </p>
//                     <p>Add to Cart</p>
//                     <p><b>Rating:</b> $sdsd</p>
//                     <p><b>Number:</b> $sdsds</p>
//                 </div>

//                 <ProductOrder>
//                     <Button
//                         text={"-"}
//                         bgColor={"white"}
//                         textColor={"green"}
//                         clikFunc={decreementCount}
//                     />
//                 </ProductOrder>

//                 <AnchorLink
//                     text={'Order'}
//                     url="/products"
//                     bgColor={"green"}
//                     textColor={"white"}
//                 />
//             </ProductDetailWrapper>
//         </ProductContainer>
//     ))
// }
