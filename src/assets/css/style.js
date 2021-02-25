import { createGlobalStyle } from 'styled-components';
import { device } from '../../theme';

export const GlobalCSS = createGlobalStyle `
    /**
    * Reset Styels
    */

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    ${'' /* body::-webkit-scrollbar {
        width: .8em;
    }    
    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }   
    body::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.primary};
        outline: 1px solid slategrey;
    } */}
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    nav,
    section,
    summary {
        display: block;
    }
    audio,
    canvas,
    video {
        display: inline-block;
    }
    audio:not([controls]) {
        display: none;
        height: 0;
    }
    [hidden] {
        display: none;
    }
    html,
    button,
    input,
    select,
    textarea {
        font-family: "Source Sans Pro", Helvetica, sans-serif;
    }
    a {
        color: #ca3c08;
        text-decoration: none;
    }
    a:visited {
        color: #ac0404;
    }
    a:focus {
        outline: thin dotted;
    }
    a:active,
    a:hover {
        color: #ea9629;
        outline: 0;
    }
    a:hover {
        text-decoration: underline;
    }
    address {
        font-style: italic;
        margin: 0 0 24px;
    }
    abbr[title] {
        border-bottom: 1px dotted;
    }
    b,
    strong {
        font-weight: bold;
    }
    dfn {
        font-style: italic;
    }
    mark {
        background: #ff0;
        color: #000;
    }
    p {
        margin: 0 0 24px;
    }
    code,
    kbd,
    pre,
    samp {
        font-family: monospace, serif;
        font-size: 14px;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }
    pre {
        background: #f5f5f5;
        color: #666;
        font-family: monospace;
        font-size: 14px;
        margin: 20px 0;
        overflow: auto;
        padding: 20px;
        white-space: pre;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    blockquote,
    q {
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }
    blockquote {
        font-size: 18px;
        font-style: italic;
        font-weight: 300;
        margin: 24px 40px;
    }
    blockquote blockquote {
        margin-right: 0;
    }
    blockquote cite,
    blockquote small {
        font-size: 14px;
        font-weight: normal;
        text-transform: uppercase;
    }
    blockquote em,
    blockquote i {
        font-style: normal;
        font-weight: 300;
    }
    blockquote strong,
    blockquote b {
        font-weight: 400;
    }
    small {
        font-size: smaller;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    sub {
        bottom: -0.25em;
    }
    dl {
        margin: 0 20px;
    }
    dt {
        font-weight: bold;
    }
    dd {
        margin: 0 0 20px;
    }
    menu,
    ol,
    ul {
        margin: 16px 0;
        padding: 0 0 0 40px;
    }
    ul {
        list-style-type: square;
    }
    nav ul,
    nav ol {
        list-style: none;
        list-style-image: none;
    }
    li>ul,
    li>ol {
        margin: 0;
    }
    img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        vertical-align: middle;
    }
    svg:not(:root) {
        overflow: hidden;
    }
    figure {
        margin: 0;
    }
    form {
        margin: 0;
    }
    fieldset {
        border: 1px solid #c0c0c0;
        margin: 0 2px;
        min-width: inherit;
        padding: 0.35em 0.625em 0.75em;
    }
    legend {
        border: 0;
        padding: 0;
        white-space: normal;
    }
    button,
    input,
    select,
    textarea {
        font-size: 100%;
        margin: 0;
        max-width: 100%;
        vertical-align: baseline;
    }

    button,
    input {
        line-height: normal;
    }

    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        cursor: pointer;
    }

    button[disabled],
    input[disabled] {
        cursor: default;
    }

    input[type="checkbox"],
    input[type="radio"] {
        padding: 0;
    }

    input[type="search"] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
        appearance: textfield;
        padding-right: 2px;
        /* Don't cut off the webkit search cancel button */
        width: 270px;
    }

    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    textarea {
        overflow: auto;
        vertical-align: top;
    }
    table {
        border-bottom: 1px solid #ededed;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 14px;
        line-height: 2;
        margin: 0 0 20px;
        width: 100%;
    }
    caption,
    th,
    td {
        font-weight: normal;
        text-align: left;
    }
    caption {
        font-size: 16px;
        margin: 20px 0;
    }
    th {
        font-weight: bold;
        text-transform: uppercase;
    }
    td {
        border-top: 1px solid #ededed;
        padding: 6px 10px 6px 0;
    }
    del {
        color: #333;
    }
    ins {
        background: #fff9c0;
        text-decoration: none;
    }
    hr {
        background-size: 4px 4px;
        border: 0;
        height: 1px;
        margin: 0 0 24px;
    }

    /**
    * Typography
    */

    * {
        box-sizing: border-box;
    }
    img {
        max-width: 100%;
    }
    html {
        overflow: hidden;
        overflow-y: auto;
    }
    body {
        overflow: hidden;
        font-size: ${props => props.theme.font.bodyFontSize};
        line-height: ${props => props.theme.lineHeights.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${props => props.theme.font.bodyFont};
        color: ${props => props.theme.colors.bodyColor};
        font-weight: 400;
        margin: 0;     
    }
    a {
        transition: ${props => props.theme.baseTransition};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    address,
    p,
    pre,
    blockquote,
    dl,
    dd,
    menu,
    ol,
    ul,
    table,
    caption,
    hr {
        margin: 0;
        margin-bottom: 15px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        font-family: ${props => props.theme.font.headingFont};
        line-height: ${props => props.theme.lineHeights.heading};
        color: ${props => props.theme.colors.headingCollor};
    }
    h1,
    .h1 {
        font-size: ${props => props.theme.font.headingFontSizes.h1};
        @media ${device.medium} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 4px);
        }
        @media ${device.small} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 6px);
        }
        @media ${device.xsmall} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 8px);
        }
    }
    h2,
    .h2 {
        font-size: ${props => props.theme.font.headingFontSizes.h2};
        @media ${device.medium} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 2px);
        }
        @media ${device.small} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 4px);
        }
    }
    h3,
    .h3 {
        font-size: ${props => props.theme.font.headingFontSizes.h3};
        @media ${device.medium} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 2px);
        }
        @media ${device.small} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 2px);
        }
    }
    h4,
    .h4 {
        font-size: ${props => props.theme.font.headingFontSizes.h4};
    }
    h5,
    .h5 {
        font-size: ${props => props.theme.font.headingFontSizes.h5};
    }
    h6,
    .h6 {
        font-size: ${props => props.theme.font.headingFontSizes.h6};
    }
    h1,
    .h1,
    h2,
    .h2,
    h3,
    .h3 {
        font-weight: 700;
    }
    h4,
    .h4,
    h5,
    .h5 {
        font-weight: 600;
    }
    h6,
    .h6 {
        font-weight: 500;
    }
    a:hover,
    a:focus,
    a:active {
        text-decoration: none;
        outline: none;
    }
    a:visited {
        color: inherit;
    }
    input,
    button,
    select,
    textarea {
        background: ${props => props.theme.colors.transparent};
        border: 1px solid ${props => props.theme.colors.borderColor};
        transition: all 0.4s ease-out 0s;
        color: ${props => props.theme.colors.bodyColor};
        &:focus,
        &:active {
            outline: none;
            border-color: ${props => props.theme.colors.primary};
        }
    }
    input,
    select,
    textarea {
        width: 100%;
        font-size: ${props => props.theme.font.bodyFontSize};
    }
    input,
    select {
        height: 40px;
        padding: 0 15px;
    }
    .wrapper{
        position: relative;
    }
    main.page-content div div, footer div {
        position: relative;
        z-index: 2;
    }

    .rn_surface {
        position: relative;
        overflow: hidden
    }

    .rn_surface::after,
    .rn_surface::before {
        content: '';
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%
    }

    .rn_surface::after {
        background: #fff;
        z-index: 1
    }

    .touch .rn_surface::after,
    .touch .rn_surface::before {
        visibility: hidden
    }

    .rn_surface.animated::before {
        background: #ddd;
        animation: rn_surface 2s cubic-bezier(.80, 0, .180, 1) both;
        z-index: 3;
    }

    .rn_surface.animated::after {
        animation: rn_surfaceBack 2s cubic-bezier(.80, 0, .180, 1) both
    }
    .medium-zoom-image, .medium-zoom-overlay {
        z-index: 9999;
    }
    .overlay-wrapper-open {
        height: 100vh;
        overflow-y: hidden;
    }
    .cursor {
        position: fixed;
        width: 30px;
        height: 30px;
        margin-top: -14px;
        margin-left: -14px;
        border: 1.5px solid rgba(0, 28, 67, 0.5);
        border-radius: 50%;
        pointer-events: none;
        opacity: 1;
        box-sizing: border-box;
        transform: scale(1);
        transition: transform .35s ease-out;
        z-index: 999999999;
    }
    @media screen and (max-width: 1200px){
        .cursor{
            display: none
        }
    }
    .gatsby-image-wrapper{
        z-index: -1 !important;
    }
`;