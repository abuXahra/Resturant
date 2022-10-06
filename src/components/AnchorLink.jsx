import React from 'react';
import { AStyled } from '../style/A.Styled';

const AnchorLink = ({ text, url, bgColor, txtColor }) => {
    return (<AStyled
        bgColor={bgColor}
        txtColor={txtColor}
        href={url}>
        {text}
    </AStyled>)
}

export default AnchorLink;
