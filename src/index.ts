import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { ArtistAPI } from './datasources/artist-api';
import { BandAPI } from './datasources/band-api';
import GenreAPI from './datasources/genre-api';
import { AlbumAPI } from './datasources/album-api';
import { FavouritesAPI } from './datasources/favourites-api';
import { TrackAPI } from './datasources/track-api';
import { UserAPI } from './datasources/user-api';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		albumAPI: new AlbumAPI(),
		artistAPI: new ArtistAPI(),
		bandAPI: new BandAPI(),
		favouritesAPI: new FavouritesAPI(),
		genreAPI: new GenreAPI(),
		trackAPI: new TrackAPI(),
		userAPI: new UserAPI(),
	}),
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
