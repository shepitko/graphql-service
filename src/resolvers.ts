import { IArtist } from './datasources/artist-api';

interface iDataSources {
	artistAPI: {
		getAllArtists(): Promise<IArtist[]>;
		getArtist(id: number): Promise<IArtist>;
	};
}

export const resolvers = {
	Query: {
		artists: (_: any, __: any, { dataSources }: { dataSources: iDataSources }): Promise<IArtist[]> => {
			return dataSources.artistAPI.getAllArtists();
		},

		// get a single artist by ID
		artist: (_: any, { id }: { id: number }, { dataSources }: { dataSources: iDataSources }): Promise<IArtist> => {
			return dataSources.artistAPI.getArtist(id);
		},
	},

	Artist: {},
};
