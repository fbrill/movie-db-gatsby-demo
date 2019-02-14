import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderWrapper = styled.div`
	a {
		padding: 30px;
		display: block;
		background: #282344;
		color: #fff;
		text-decoration: none;
		text-transform: uppercase;
		transition: all 0.2s ease-in-out;
		&:hover {
			background: #3D336F;
		}
	}
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<Link to="/">
				<span role="img" aria-label="Back Arrow">
					⬅
				</span>
				️ BACK
			</Link>
		</HeaderWrapper>
	);
};
export default Header;
