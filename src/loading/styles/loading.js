import styled, { createGlobalStyle } from 'styled-components';

export const LockBody = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

export const ReleaseBody = createGlobalStyle`
    body {
        overflow: visible;
    }
`;

export const Spinner = stylef.div`
    position: flex;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 999;

    :after {
        content: '';
        postion: absolute;
        top: 50%;
        left: 50%;
        background-image: url(/images/misc/spinner.png);
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: -150px;
        margin-left: -75px;
        width; 150px;
        height: 150px;
        animation-name: spin;
        animation-duration: 1000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`;
