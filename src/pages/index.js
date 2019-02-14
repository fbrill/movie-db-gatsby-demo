import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';
import MovieList from '../components/MovieList';

const Slider = styled.div`
	background: #333;
	text-align: center;
`;

const IndexPage = () => (
	<Slider>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<MovieList />
	</Slider>
);

export default IndexPage;
