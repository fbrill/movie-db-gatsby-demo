import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const MovieItemWrapper = styled(Link)`
	text-decoration: none;
	padding: 20px;
	h2 {
		color: #fff;
		font-weight: 300;
		text-align: center;
		font-size: 1.3rem;
	}
	transition: all 0.2s ease-in-out;
	&:hover {
		opacity: 0.8;
		transform: scale(1.1);
	}
	position: relative;
	.rating {
		position: absolute;
		top: 20px;
		right: 20px;
		background: rgba(0, 0, 0, 0.8);
		font-size: 12px;
		color: #fff;
		padding: 2px 10px;
		border-bottom-left-radius: 4px;
	}
`;

const MoviePoster = ({ movie }) => {
	return (
		<MovieItemWrapper to={`/movies/${movie.slug}`}>
			<p className="rating">⭐{movie.acf.rating}%</p>
			<img src={movie.acf.cover.source_url} alt={movie.name} />
			{console.log(movie)}
			<h2 dangerouslySetInnerHTML={{ __html: movie.title }} />
		</MovieItemWrapper>
	);
};
export default MoviePoster;
