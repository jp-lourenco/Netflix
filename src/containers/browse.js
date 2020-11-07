import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';

export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('movies');

    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ['data.genre'],
        });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (
            slideRows.length > 0 &&
            searchTerm.length > 3 &&
            results.length > 0
        ) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);

    return (
        <>
            {loading ? <Loading /> : <Loading.ReleaseBody />}
            <Header src="bob.jpg" min="1340">
                <Header.LinearGradient>
                    <Header.Frame>
                        <Header.Group>
                            <Header.Logo
                                to={'/'}
                                src={'assets/logo.svg'}
                                alt="Netflix"
                            />
                            <Header.TextLink
                                active={
                                    category === 'movies' ? 'true' : 'false'
                                }
                                onClick={() => setCategory('movies')}
                            >
                                Movies
                            </Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.Search
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                            />
                            <Header.Profile>
                                <Header.Picture />
                                <Header.Dropdown>
                                    <Header.Group>
                                        <Header.Picture />
                                        <Header.TextLink>Jp</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink>
                                            Sign Out
                                        </Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Frame>

                    <Header.Feature>
                        <Header.FeatureImage />
                        <Header.Text>
                            With a bond that goes way back, no one separates
                            this sponge from his snail — not even the king of
                            the seas!
                        </Header.Text>
                        <Header.PlayButton>Play</Header.PlayButton>
                    </Header.Feature>
                </Header.LinearGradient>
            </Header>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image
                                        src={`/assets/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                    />
                                    <Card.Meta>
                                        <Card.SubTitle>
                                            {item.title}
                                        </Card.SubTitle>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                    </Card>
                ))}
                <Card.Feature category={category}>
                    <Player>
                        <Player.Button />
                        <Player.Video src="assets/videos/reliquia.mp4" />
                    </Player>
                </Card.Feature>
            </Card.Group>
        </>
    );
}
