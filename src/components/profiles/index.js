import React from 'react';
import { Container } from '../form/styles/form';

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

Profiles.Picture = function ProfilePicture({ children, ...restProps }) {
    return (
        <Picture
            {...restProps}
            src={src ? 'images/users/${src}.png' : '/images/misc/loading.gif'}
        />
    );
};

Profiles.Name = function ProfileName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
};
