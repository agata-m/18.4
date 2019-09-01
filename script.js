var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        src: 'https://www.reinodejuguetes.com/58072-tm_large_default/poster-hogwarts-50x40-harry-potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg'
    },
    {
        id: 3,
        title: 'Mulan',
        desc: 'Film o dziewczynie, która ratuje Chiny',
        src: 'https://images-na.ssl-images-amazon.com/images/I/415YeOTGoVL.jpg'
    },
    {
        id: 4,
        title: 'Jak wytresować smoka',
        desc: 'Film o tym, że smoka nie da się wytresować',
        src: 'https://images-na.ssl-images-amazon.com/images/I/51uJGH71GsL.jpg'
    }
];


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {},
                React.createElement('h2', {}, this.props.movie.title),
                React.createElement('p', {}, this.props.movie.desc),
                React.createElement('img', {src: this.props.movie.src}),
            )
        );
    }
});


var MovieList = React.createClass({
    propTypes: {
       movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        var movies = this.props.movies.map(function(movie){
            return React.createElement(Movie, {movie, key: movie.id})
        });

        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, movies)
            )
        );
    }
});


var element = React.createElement(MovieList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));