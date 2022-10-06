import React from 'react';
import { FooterContent, FooterCopyright, FooterStyled, TextSpan, VerticalSpacing } from '../style/Footer.style';
import { Logo } from '../style/Navbar';

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContent>
                <div>
                    <Logo>Eli <span>Rsnt</span></Logo>
                    <VerticalSpacing></VerticalSpacing>
                    <TextSpan>With over 25 years in business, Eli Restaurant has acquired ample culinary skills to serve you with homemade mouth-watering African-Style delicacies, served in a cosy restaurant and at a reasonable price.</TextSpan>
                </div>
                <div>
                    <h3>QUICK LINKS</h3>
                    <VerticalSpacing></VerticalSpacing>
                    <TextSpan>FAQ</TextSpan><br />
                    <TextSpan>Hire a Talent</TextSpan>
                </div>
                <div>
                    <h3>COMPANY</h3>
                    <VerticalSpacing></VerticalSpacing>
                    <TextSpan>Privacy & Policy</TextSpan><br />
                    <TextSpan>Terms and Conditions</TextSpan>
                </div>
                <div>
                    <h3>CONNECT WITH US</h3>
                    <VerticalSpacing></VerticalSpacing>
                    <TextSpan>Privacy & Policy</TextSpan><br />
                    <TextSpan>Terms and Conditions</TextSpan>
                </div>
            </FooterContent>
            <FooterCopyright>
                © 2022 Eli Resturant | All Rights Reserved.
            </FooterCopyright>
        </FooterStyled>
    );
}

export default Footer;
