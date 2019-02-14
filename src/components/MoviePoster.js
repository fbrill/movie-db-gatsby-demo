import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MovieItemWrapper = styled(Link)`
	border: 1px solid #ccc;
`;

const MoviePoster = ({ movie }) => {
	return (
		<MovieItemWrapper to={`/movies/${movie.slug}`}>
			<h2 dangerouslySetInnerHTML={{ __html: movie.title }} />
		</MovieItemWrapper>
	);
};
export default MoviePoster;
