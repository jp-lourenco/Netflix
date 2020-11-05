export default function selectionFilter({ movies, series } = []) {
    return {
        movies: [
            {
                title: 'Drama',
                data: movies?.filter((item) => item.genre === 'drama'),
            },
            {
                title: 'Adventure',
                data: movies?.filter((item) => item.genre === 'adventure'),
            },
            {
                title: 'Children',
                data: movies?.filter((item) => item.genre === 'children'),
            },
            {
                title: 'Suspense',
                data: movies?.filter((item) => item.genre === 'suspense'),
            },
            {
                title: 'Comedies',
                data: movies?.filter((item) => item.genre === 'comedies'),
            },
        ],
    };
}
