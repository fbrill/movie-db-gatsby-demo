import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import MoviePoster from './MoviePoster';

const MOVIE_LIST_QUERY = graphql`
	query ListOfMovies {
		allWordpressWpMovies {
			edges {
				node {
					id
					slug
					title
					acf {
						critics_consensus
						synopsis
						rating
						year
						cover {
							source_url
						}
					}
				}
			}
		}
	}
`;

const MoviesListWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
`;

const MovieList = () => {
	return (
		<StaticQuery
			query={MOVIE_LIST_QUERY}
			render={({ allWordpressWpMovies }) => (
				<MoviesListWrapper>
					{allWordpressWpMovies.edges.map(item => (
						<MoviePoster movie={item.node} key={item.node.id} />
					))}
				</MoviesListWrapper>
			)}
		/>
	);
};
export default MovieList;
