import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    min-width: 320px;
    flex-direction: column;
    background: url(${({ src }) =>
            src
                ? `../assets/images/misc/${src}.jpg`
                : '../assets/images/misc/home.jpg'})
        top left / cover no-repeat;
    @media (max-width: 1100px) {
        ${({ dontShownOnSmallViewPort }) =>
            dontShownOnSmallViewPort && `background: none;`}
    }
`;

export const BackgroundLinear = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(rgba(0, 0, 0, 0.8)),
        color-stop(60%, rgba(0, 0, 0, 0)),
        to(rgba(0, 0, 0, 0.8))
    );
`;

export const LinearGradient = styled.div`
    background: linear-gradient(
        77deg,
        rgba(0, 0, 0, 0.6) 0,
        rgba(0, 0, 0, 0) 85%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 1;
`;

export const Container = styled.div`
    //position: fixed;
    //top: 0;
    display: flex;
    width: 92%;
    max-width: 1808px;
    margin: 0 56px;
    height: 64px;
    padding: 12px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &last-of-type {
        margin-right: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: 1px solid white;
    border-radius: 0;
    outline: none;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active }) => (active === true ? '5px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0px')};

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #999;
        opacity: 1; /* Firefox */
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg {
        color: white;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: none;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const ButtonLink = styled(ReachRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    padding: 8px 17px;
    font-size: 16px;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background: #f40612;
    }
`;

export const Picture = styled.button`
    background: url('/assets/images/misc/user.png');
    width: 32px;
    height: 32px;
    cursor: pointer;
    background-size: contain;
    border: 0;
`;

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }

        ${Link}, ${Picture} {
            cursor: default;
        }
    }

    button {
        margin-right: 10px;
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;

export const Feature = styled(Container)`
    position: relative;
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 38%;

    @media (max-width: 950px) {
        min-width: 370px;
    }
`;

export const FeatureImage = styled.img`
    min-height: 190px;
    min-width: 477px;

    @media (max-width: 1000px) {
        width: 300px;
        height: 120px;
    }
`;

export const Text = styled.p`
    font-size: 21px;
    line-height: normal;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1000px) {
        height: 45px;
        width: 134px;
    }
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 110px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.5 ease;

    &:hover {
        background: #c3c3c3;
    }
`;
