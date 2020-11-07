import React from 'react';
import { Header, Feature } from '../components';

export function ErrorContainer() {
    return (
        <Header src="bg-lost-in-space.png">
            <Header.BackgroundLinear>
                <Header.Frame>
                    <Header.Logo
                        to={'/'}
                        src={'assets/logo.svg'}
                        alt="Netflix"
                    />
                </Header.Frame>
                <Feature>
                    <Feature.Title>Lost your way?</Feature.Title>
                    <Feature.SubTitle>
                        Sorry, we can't find that page. You'll find lots to
                        explore on the github.com/jp-lourenco
                    </Feature.SubTitle>
                    <Feature.SubTitle>Thank you very much</Feature.SubTitle>
                    <Feature.SubTitle>Error Code NSES-404</Feature.SubTitle>
                </Feature>
            </Header.BackgroundLinear>
        </Header>
    );
}
