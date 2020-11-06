import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
    Container,
    Group,
    Background,
    BackgroundLinear,
    LinearGradient,
    Dropdown,
    Picture,
    Link,
    Search,
    Profile,
    FeatureImage,
    SearchIcon,
    SearchInput,
    ButtonLink,
    PlayButton,
    Text,
    Feature,
    Logo,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background data-testid="header-bg" {...restProps}>
            {children}
        </Background>
    ) : (
        children
    );
}

Header.BackgroundLinear = function HeaderBackgroundLinear({
    children,
    ...restProps
}) {
    return <BackgroundLinear {...restProps}>{children}</BackgroundLinear>;
};

Header.LinearGradient = function HeaderLinearGradient({
    children,
    ...restProps
}) {
    return <LinearGradient {...restProps}>{children}</LinearGradient>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    );
};

Header.Search = function HeaderSearch({
    searchTerm,
    setSearchTerm,
    ...restProps
}) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon
                onClick={() => setSearchActive((searchActive) => !searchActive)}
                data-testid="search-click"
            >
                <img src="/assets/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Title, peoples, genres"
                active={searchActive}
                data-testid="search-input"
            />
        </Search>
    );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ ...restProps }) {
    return <Picture {...restProps} src={'/assets/images/misc/user.png'} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.FeatureImage = function HeaderFeatureImage({ ...restProps }) {
    return (
        <FeatureImage
            src="assets/images/misc/title.png"
            alt="The SpongeBob Movie: Sponge on the Run"
            {...restProps}
        />
    );
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
