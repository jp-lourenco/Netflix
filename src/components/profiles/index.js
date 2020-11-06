import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfileTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfileList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
};

Profiles.Item = function ProfileItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};

Profiles.User = function ProfileUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilePicture({ ...restProps }) {
    return <Picture {...restProps} src={'assets/images/misc/user.png'} />;
};

Profiles.Name = function ProfileName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
};
