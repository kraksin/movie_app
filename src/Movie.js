import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Movie({ year, rating, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h3 className="movie__year">{year}</h3>
                <p className="movie__summary">{summary}</p>
                <ul className="movie__genres">
                    {genres.map((genre, index) => 
                        <li key={index} className="movie__genre">{genre}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;