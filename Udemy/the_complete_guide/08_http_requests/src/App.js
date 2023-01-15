import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);

	function fetchMoviesHandler() {
		fetch("https://swapi.dev/api/films/")
			.then((r) => {
				return r.json();
			})
			.then((d) => {
				const transformedMovies = d.resuts.map((movieData) => {
					return {
						id: movieData.episode_id,
						title: movieData.title,
						openingText: movieData.opening_crawl,
						relaseData: movieData.release_date,
					};
				});
				setMovies(transformedMovies);
			});
	}

	return (
		<React.Fragment>
			<section>
				<button>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
