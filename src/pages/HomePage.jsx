import React, { } from 'react';
import Button from '../components/Button';
import { PRODUCTS } from '../data/product';
import {
    HeaderSection, Heading, StyleHomePage, Overlay, OverlayContent, WorkingHourSection, WHHeader, WHBody, ProductSection, ProductHeader,
    ProductsItems, ProductContainer, PriceContainer, ProductDetailWrapper, ProductDescription, ProductCategory, ContactSection, ContactHeader,
} from '../style/Home.style';

import AnchorLink from '../components/AnchorLink';
import { ContactForm } from '../style/Form.style';
import ContactPage from './ContactPage';





const HomePage = () => {

    // Display 4 product Item on the home page
    const PRODS = [{
        productImg: PRODUCTS[0].productImg,
        productName: PRODUCTS[0].productName,
        productPrice: PRODUCTS[0].productPrice,
        productDescription: PRODUCTS[0].productDescription,
        productCategory: PRODUCTS[0].productCategory,
        cliFunk: PRODUCTS[0].cliFunk,
    },
    {
        productImg: PRODUCTS[1].productImg,
        productName: PRODUCTS[1].productName,
        productPrice: PRODUCTS[1].productPrice,
        productDescription: PRODUCTS[1].productDescription,
        productCategory: PRODUCTS[1].productCategory,
        cliFunk: PRODUCTS[1].cliFunk,
    },
    {
        productImg: PRODUCTS[2].productImg,
        productName: PRODUCTS[2].productName,
        productPrice: PRODUCTS[2].productPrice,
        productDescription: PRODUCTS[2].productDescription,
        productCategory: PRODUCTS[2].productCategory,
        cliFunk: PRODUCTS[2].cliFunk,
    },
        ,
    {
        productImg: PRODUCTS[3].productImg,
        productName: PRODUCTS[3].productName,
        productPrice: PRODUCTS[3].productPrice,
        productDescription: PRODUCTS[3].productDescription,
        productCategory: PRODUCTS[3].productCategory,
        cliFunk: PRODUCTS[3].cliFunk,
    }

    ]

    return (
        <StyleHomePage>
            {/* header section */}
            <HeaderSection>
                <Overlay>
                    <OverlayContent>
                        <Heading>Eli Resturant</Heading>
                        <p>We Offer The Best Meals at the Best Prices</p>
                        <Button
                            textColor={"green"}
                            bgColor={"white"}
                            text="Order Now"
                        />
                    </OverlayContent>
                </Overlay>
            </HeaderSection>

            {/* Working Hour section */}
            <WorkingHourSection>
                <WHHeader>
                    <h2>Our Working Hours</h2>
                </WHHeader>
                <WHBody>
                    <p>Mon: 8am - 11pm</p>
                    <p>Tue: 8am - 11pm</p>
                    <p>Wed: 8am - 11pm</p>
                    <p>Thu: 8am - 11pm</p>
                </WHBody>
                <WHBody>
                    <p>Fri: 8am - 11pm</p>
                    <p>Sat: 8am - 11pm</p>
                    <p>Sun: 8am - 9pm</p>
                </WHBody>
            </WorkingHourSection>

            {/* Products Section */}
            <ProductSection>
                <ProductHeader>Our Products</ProductHeader>
                {/* Products */}
                <ProductsItems>
                    {

                        PRODS.map((product, index) => (
                            <ProductContainer key={index}>
                                {/*Product Image  */}
                                <img src={product.productImg} alt="" srcset="" />
                                {/* Product Detail Wrapper */}
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
                                    <AnchorLink
                                        text={'View Product more'}
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

            {/* Contact Section */}
            <ContactPage />
        </StyleHomePage>
    );
}

export default HomePage;


