import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    min-width: 300px;
    border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
    margin-bottom: 40px;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;

    @media (max-width: 550px) {
        padding: 70px 5px;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 50px;
    text-align: center;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const Item = styled.div`
    color: white;
    margin: 0 auto 10px;
    max-width: 815px;
    min-width: 320px;
    width: 100%;

    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 1000px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Body = styled.div`
    max-height: 1200px;
    transition: max-weight 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 26px;
    font-weight: normal;
    line-weight: normal;
    background: #303030;
    padding: 0.8em 2.2em 0.8em 1.2em;
    white-space: pre-wrap;
    user-select: none;

    @media (max-width: 600px) {
        font-size: 18px;
        line-height: 22px;
    }
`;
