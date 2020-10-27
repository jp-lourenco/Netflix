import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 145px 45px;
`;

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 50px;
    text-align: center;
    line-height: 1.1;
    font-weight: bold;
    margin: 0 auto 10px;

    @media (max-width: 600px) {
        font-size: 35px;
    }

    @media (min-width: 1449px) {
        font-size: 64px;
    }
`;

export const SubTitle = styled.h2`
    color: white;
    max-width: 640px;
    font-size: 26px;
    font-weight: 400;
    text-align: center;
    margin: 10px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;
