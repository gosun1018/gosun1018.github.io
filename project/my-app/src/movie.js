import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './movie.css';

function Movie ({poster,title,genres,synopsis}){
	return (
		<li className="moviecard">
			<MoviePoster poster={poster} title={title}/>
			<div className="cart_text">
				<h2 className="movie_tit">{title}</h2>
				<div className="movie_gen_list">
					{genres.map((genre,index) => <MovieGenre genre={genre} key={index}/> ) }
				</div>
				<div className="movie_syn">
					<LinesEllipsis
						text={synopsis}
						maxLine='3'
						ellipsis='...'
						trimRight
						basedOn='words'
					/>
				</div>
			</div>
		</li>
	);
}

function MoviePoster ({poster,title}){
	return (
		<div className="thum">
			<img src={poster} alt={title + " 포스터"} title={title} className="movie_poster" />
		</div>
	)
}

function MovieGenre({genre}){
	return(
		<span className="movie_gen">{genre} </span>
	)
}

Movie.propTypes={
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes={
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired
}

MovieGenre.propTypes={
	genre: PropTypes.string.isRequired
}

export default Movie;
