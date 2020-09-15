import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({ id, year, rating, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link to={{
                pathname: `/movie/dtl/${id}`,
                state: {
                    year,
                    rating,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}>
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h3 className="movie__year">{year}</h3>
                    <p className="movie__summary">{summary.slice(0, 120)} ...</p>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => 
                            <li key={index} className="movie__genre">{genre}</li>
                        )}
                    </ul>
                </div>
            </Link>
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