import React, { } from 'react';
import Button from '../components/Button';
import { PRODUCTS } from '../data/product';
import {
    HeaderSection, Heading, StyleHomePage, Overlay, OverlayContent, WorkingHourSection, WHHeader, WHBody, ProductSection, ProductHeader,
    ProductsItems, ProductContainer, PriceContainer, ProductDetailWrapper, ProductDescription, ProductCategory, ContactSection, ContactHeader, ContactForm
} from '../style/Home.style';

import AnchorLink from '../components/AnchorLink';





const HomePage = () => {



    return (
        <StyleHomePage>
            {/* header section */}
            <HeaderSection>
                <Overlay>
                    <OverlayContent>
                        <Heading>Eli Resturant</Heading>
                        <p>We Offer The Best Meals at the Best Value</p>
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
                    <h2>Our Working <br />  Hours</h2>
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
                        PRODUCTS.map((product, index) => (
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
            <ContactSection>
                <ContactHeader>
                    <h2>Talk to Us</h2>
                    <h3>Address</h3>
                    <p>Plot 107 Jeguin Estate, Cadastral Zone B6, Mabushi, Federal Captial Territory, Abuja </p>
                    <h3>Email</h3>
                    <p>info@elirtnt.com</p>
                    <p>contact@elirtnt.com</p>
                    <h3>Phone Number</h3>
                    <p>+23490000000</p>
                    <p>+23481000000</p>
                </ContactHeader>
                <ContactForm>
                    <form action="">
                        <div><input type="text" placeholder="name" /></div>
                        <div><input type="number" placeholder="name" /></div>
                        <div><input type="email" placeholder="name" /></div>
                        <div><textarea name="message" id="" cols="30" rows="10">message</textarea></div>
                        <Button
                            text={"Send"}
                            textColor={"white"}
                            bgColor={"green"}
                            clikFunc={() => { }}
                        />
                    </form>
                </ContactForm>
            </ContactSection>
        </StyleHomePage>
    );
}

export default HomePage;


