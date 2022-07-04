import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { ArtistAPI } from './datasources/artist-api';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			artistAPI: new ArtistAPI(),
		};
	},
});

server
	.listen()
	.then(() => {
		console.log(`
			🚀  Server is running!
			🔉  Listening on port 4000
			📭  Query at https://studio.apollographql.com/dev
		`);
	})
	.catch((err) => {
		console.error(err);
	});
