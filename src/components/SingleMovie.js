import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

const MovieSingle = styled.div``;
const PageFooter = styled.div``;

const SingleMovie = props => {
	const movie = props.data.wordpressWpMovies;

	// helper fundtion to turn array of terms into a comma seperated list of names
	const getListOfNames = names => {
		let listOfNames = [];
		if (names) {
			names.forEach(item => {
				listOfNames = [...listOfNames, item.name];
			});
		}
		return listOfNames.join(', ');
	};

	return (
		<MovieSingle>
			<img src={movie.acf.cover.source_url} alt={movie.title} />
			<h2>{movie.title}</h2>
			<p>{movie.acf.year}</p>
			<p>{movie.acf.rating}%</p>
			<p>
				<strong>Synopsis:</strong> {movie.acf.synopsis}
			</p>
			<p>
				<strong>Critics Consensus:</strong> {movie.acf.critics_consensus}
			</p>
			<p>
				<strong>Director(s): </strong>
				{getListOfNames(movie.acf.directors)}
			</p>
			<p>
				<strong>Actor(s): </strong>
				{getListOfNames(movie.acf.actors)}
			</p>
			<PageFooter>
				<Link to="/">Back</Link>
			</PageFooter>
		</MovieSingle>
	);
};
export default SingleMovie;

export const query = graphql`
	query GetSingleMovie($slug: String!) {
		wordpressWpMovies(slug: { eq: $slug }) {
			title
			acf {
				critics_consensus
				synopsis
				rating
				year
				cover {
					source_url
				}
				directors {
					name
				}
				actors {
					name
				}
			}
		}
	}
`;
