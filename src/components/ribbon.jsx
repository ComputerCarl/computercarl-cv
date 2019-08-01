import React from 'react';
import styled from 'styled-components';
import imgRibbonBg from '../images/ribbon.svg';

const RibbonStyle = styled.div`
    // background-color: crimson;
    height: 60px;
    min-width: 300px;
    box-sizing: border-box;
    background-image: url(${imgRibbonBg});
    background-size: 100% 100%;
    padding: 5px 20px;
    z-index: 99;
    position: absolute;
    right: 0;
    top: 0;
    h1 a {
        color: mistyrose;
        color: mistyrose;
        text-decoration: none;
        font-weight: normal;
    }
    h1, h2 {
        color: mistyrose;
        text-align: center;
        margin: 0;
    }
    h1 {
        font-size: 1.5em;
        font-family: "Trebuchet MS", Helvetica, sans-serif;
    }
    h2 {
        font-weight: normal;
        text-transform: uppercase;
        font-family: "Arial Narrow", Helvetica, sans-serif;
        font-size: 1em;
    }
`

const Ribbon = ({ children }) => (
    <RibbonStyle>{children}</RibbonStyle>
)

export default Ribbon;