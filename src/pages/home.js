import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV shows, and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try 30 days free</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Only new members are eligible for this offer.
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};

export default Home;
