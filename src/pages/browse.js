import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { FooterContainer } from '../containers/footer';
import movies from '../fixtures/movies';
import { selectionFilter } from '../utils';

export default function Browse() {
    const slides = selectionFilter({ movies });

    return (
        <>
            <BrowseContainer slides={slides} />;
            <FooterContainer />
        </>
    );
}
