const path = require('path');

// Create pages for all movies
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return graphql(`
		{
			allWordpressWpMovies {
				edges {
					node {
						slug
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			throw result.errors;
		}

		// Create movie post pages.
		result.data.allWordpressWpMovies.edges.forEach(({ node }) => {
			createPage({
				path: `/movies/${node.slug}`,
				component: path.resolve('./src/components/SingleMovie.js'),
				context: {
					slug: node.slug
				}
			});
		});
	});
};
