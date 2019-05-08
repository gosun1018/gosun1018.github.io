import React, { Component } from 'react';
import Movie from './movie.js';
import './App.css';


class App extends Component {
	state = {}
	
	componentDidMount(){
		this._getMovies();
	}
	
	_renderMovies = () => {
		const movies = this.state.movieInfo.map(movie => {
			console.log(movie)
			return <Movie 
				title={movie.title} 
				poster={movie.medium_cover_image} 
				genres={movie.genres} 
				key={movie.id} 
				synopsis={movie.synopsis}
				/>
		})
		return movies
	}
	
	_getMovies = async () => {
		const movieInfo = await this._callApi()
		this.setState({
			movieInfo
		})
	}
	
	_callApi = () => {
		return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
		.then(potato => potato.json())
		.then(json => json.data.movies)
		.catch(err => console.log(err))
	}
	
	render(){
		return (
			<div className={this.state.movieInfo ? "App" : "App_loading"}>
				<div className={this.state.movieInfo ? "hide" : "load"}>loading...</div>
				<ul className="movie_list">
					{this.state.movieInfo? this._renderMovies() : '' }
				</ul>
			</div>
		);
	}
 
}

export default App;
