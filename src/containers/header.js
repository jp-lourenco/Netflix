import React from 'react';
import { Header } from '../components';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.BackgroundLinear>
                <Header.Frame>
                    <Header.Logo
                        to={'/'}
                        src={'assets/logo.svg'}
                        alt="Netflix"
                    />
                    <Header.ButtonLink to={'/browse'}>
                        Sign In
                    </Header.ButtonLink>
                </Header.Frame>
                {children}
            </Header.BackgroundLinear>
        </Header>
    );
}
