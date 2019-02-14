import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Header from './header';

const PageFooter = styled.div`
	a {
		padding: 30px;
		display: block;
		background: #282344;
		color: #fff;
		text-decoration: none;
		text-transform: uppercase;
		transition: all 0.2s ease-in-out;
		&:hover {
			background: #3d336f;
		}
	}
`;
const MovieSingle = styled.div`
	max-width: 900px;
	padding: 30px;
	margin: auto;
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 30px;
	img {
		position: sticky;
		top: 20px;
	}
	h1 {
		color: #fff;
		font-weight: 300;
	}
	p {
		color: rgba(255, 255, 255, 0.8);
		strong {
			color: #fff;
			text-transform: uppercase;
		}
	}
	.meta {
		display: grid;
		grid-template-columns: 1fr 90px;
		font-size: 1.2rem;
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

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
		<div>
			<Header />
			<MovieSingle>
				<div>
					<img src={movie.acf.cover.source_url} alt={movie.title} />
				</div>
				<div>
					<h1 dangerouslySetInnerHTML={{ __html: movie.title }} />
					<div className="meta">
						<p>{movie.acf.year}</p>
						<p>
							<span role="img" aria-label="Star">
								⭐
							</span>
							{movie.acf.rating}%
						</p>
					</div>
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
				</div>
			</MovieSingle>
			<PageFooter>
				<Link to="/">
					<span role="img" aria-label="Back Arrow">
						⬅{' '}
					</span>
					Back
				</Link>
			</PageFooter>
		</div>
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
