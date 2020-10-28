import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    min-width: 200px;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 35px;
    }

    @media (min-width: 1449px) {
        font-size: 64px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    min-width: 200px;
    max-width: 100%;
    height: 100%;
`;

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    color: white;
    padding: 50px 5%;
    overflow: hidden;
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}: last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;
