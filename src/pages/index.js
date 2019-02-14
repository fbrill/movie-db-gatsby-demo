import React from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList';
import SEO from '../components/seo';
import LogoCSS from '../images/logos/css.svg';
import LogoGatsby from '../images/logos/gatsby.svg';
import LogoGraphQL from '../images/logos/graphql.svg';
import LogoHTML from '../images/logos/html.svg';
import LogoJS from '../images/logos/javascript.svg';
import LogoReact from '../images/logos/react.svg';
import LogoWP from '../images/logos/wordpress.svg';
import MainImage from '../images/site-main-slider.png';

const Slider = styled.div`
	background: #121016 url(${props => props.bg});
	background-size: cover;
	color: #fff;
	text-align: center;
	padding: 30px;
	min-height: 500px;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 100px 50px;
	h1 {
		font-weight: 300;
		align-self: center;
	}
	p {
		align-self: flex-end;
	}
	.logos {
		img {
			max-width: 50px;
			margin: 0 20px;
		}
	}
`;

const IndexPage = () => (
	<div>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<Slider bg={MainImage}>
			<h1>🎥 Movie Database</h1>
			<p>Powered by...</p>
			<div className="logos">
				<img src={LogoWP} alt="GraphQL" />
				<img src={LogoJS} alt="GraphQL" />
				<img src={LogoReact} alt="GraphQL" />
				<img src={LogoGatsby} alt="GraphQL" />
				<img src={LogoGraphQL} alt="GraphQL" />
				<img src={LogoHTML} alt="GraphQL" />
				<img src={LogoCSS} alt="GraphQL" />
			</div>
		</Slider>
		<MovieList />
	</div>
);

export default IndexPage;
