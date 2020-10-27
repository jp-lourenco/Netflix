import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 0px;
    flex-wrap: wrap;

    @media (max-width: 950px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    width: 100%;
    max-width: 450px;
    border: solid 1px #8c8c8c;
    outline: none;
    border-radius: 2px;
    padding: 10px;
    color: #000;
    height: 48px;
    appearance: none;
    box-sizing: border-box;

    @media only screen and (min-width: 951px) {
        height: 60px;
        min-width: 450px;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 100%;
    height: 60px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    border: 0;
    cursor: pointer;
    text-align: center;

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 950px) {
            width: 10px;
        }
    }

    &:hover {
        background: #f40612;
    }

    @media only screen and (max-width: 950px) {
        padding: 0 0 0 10px;
        width: 192.9px;
        height: 40px;
        font-size: 16px;
        margin-top: 20px;
        font-weith: 400;
    }
`;

export const Text = styled.p`
    font-size: 19.2px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;
