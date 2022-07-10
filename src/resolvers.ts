import { Album } from './types/Album.t';
import { Artist } from './types/Artist.t';
import { Band } from './types/Band.t';
import { Favourite } from './types/Favourite.t';
import { Genre } from './types/Genre.t';
import { Response } from './types/Response.t';
import { Track } from './types/Track.t';
import { User } from './types/User.t';

export interface IDataSources {
	artistAPI: {
		getAllArtists(): Promise<Artist[]>;
		getArtist(id: number): Promise<Artist>;

		createArtist(data: any): Promise<Artist>;
		updateArtist(data: any): Promise<Artist>;
		deleteArtist(id: string): Promise<Response>;
	};

	bandAPI: {
		getAllBands(): Promise<Band[]>;
		getBand(id: number): Promise<Band>;

		createBand(data: any): Promise<Band>;
		updateBand(data: any): Promise<Band>;
		deleteBand(id: string): Promise<Response>;
	};

	genreAPI: {
		getAllGenres(): Promise<Genre[]>;
		getGenre(id: number): Promise<Genre>;

		createGenre(data: any): Promise<Genre>;
		updateGenre(data: any): Promise<Genre>;
		deleteGenre(id: string): Promise<Response>;
	};

	albumAPI: {
		getAllAlbums(): Promise<Album[]>;
		getAlbum(id: number): Promise<Album>;

		createAlbum(data: any): Promise<Album>;
		updateAlbum(data: any): Promise<Album>;
		deleteAlbum(id: string): Promise<Response>;
	};

	trackAPI: {
		getAllTracks(): Promise<Track[]>;
		getTrack(id: number): Promise<Track>;

		createTrack(data: any): Promise<Track>;
		updateTrack(data: any): Promise<Track>;
		deleteTrack(id: string): Promise<Response>;
	};

	userAPI: {
		getJwt(): Promise<string>;

		getUser(id: number): Promise<User>;
	};

	favouritesAPI: {
		getAllFavourites(): Promise<Favourite[]>;
	};
}

export const resolvers = {
	Query: {
		album: (_: any, { id }: { id: number }, { dataSources }: { dataSources: IDataSources }): Promise<Album> => {
			return dataSources.albumAPI.getAlbum(id);
		},

		albums: (_: any, __: any, { dataSources }: { dataSources: IDataSources }): Promise<Album[]> => {
			return dataSources.albumAPI.getAllAlbums();
		},

		artist: (_: any, { id }: { id: number }, { dataSources }: { dataSources: IDataSources }): Promise<Artist> => {
			return dataSources.artistAPI.getArtist(id);
		},

		artists: (_: any, __: any, { dataSources }: { dataSources: IDataSources }): Promise<Artist[]> => {
			return dataSources.artistAPI.getAllArtists();
		},

		band: (_: any, { id }: { id: number }, { dataSources }: { dataSources: IDataSources }): Promise<Band> => {
			return dataSources.bandAPI.getBand(id);
		},

		bands: (_: any, __: any, { dataSources }: { dataSources: IDataSources }): Promise<Band[]> => {
			return dataSources.bandAPI.getAllBands();
		},

		genre: (_: any, { id }: { id: number }, { dataSources }: { dataSources: IDataSources }): Promise<Genre> => {
			return dataSources.genreAPI.getGenre(id);
		},

		genres: (_: any, __: any, { dataSources }: { dataSources: IDataSources }): Promise<Genre[]> => {
			return dataSources.genreAPI.getAllGenres();
		},

		track: (_: any, { id }: { id: number }, { dataSources }: { dataSources: IDataSources }): Promise<Track> => {
			return dataSources.trackAPI.getTrack(id);
		},

		tracks: (_: any, __: any, { dataSources }: { dataSources: IDataSources }): Promise<Track[]> => {
			return dataSources.trackAPI.getAllTracks();
		},

		jwt: (_: any, __: any, { dataSources }: { dataSources: IDataSources }): Promise<string> => {
			return dataSources.userAPI.getJwt();
		},

		user: (_: any, { id }: { id: number }, { dataSources }: { dataSources: IDataSources }): Promise<User> => {
			return dataSources.userAPI.getUser(id);
		},

		favourites: (_: any, __: any, { dataSources }: { dataSources: IDataSources }): Promise<Favourite[]> => {
			return dataSources.favouritesAPI.getAllFavourites();
		},
	},

	Mutation: {
		createArtist: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Artist> => {
			return dataSources.artistAPI.createArtist(data);
		},

		updateArtist: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Artist> => {
			return dataSources.artistAPI.updateArtist(data);
		},

		deleteArtist: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Response> => {
			const { id } = data;
			return dataSources.artistAPI.deleteArtist(id);
		},

		createGenre: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Genre> => {
			return dataSources.genreAPI.createGenre(data);
		},

		updateGenre: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Genre> => {
			return dataSources.genreAPI.updateGenre(data);
		},

		deleteGenre: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Response> => {
			const { id } = data;
			return dataSources.genreAPI.deleteGenre(id);
		},
	},

	Artist: { id: ({ _id }: { _id: string }): string => _id },
	User: { id: ({ _id }: { _id: string }): string => _id },
	Band: { id: ({ _id }: { _id: string }): string => _id },
	Genre: { id: ({ _id }: { _id: string }): string => _id },
	Track: { id: ({ _id }: { _id: string }): string => _id },
	Favourites: { id: ({ _id }: { _id: string }): string => _id },
	Album: { id: ({ _id }: { _id: string }): string => _id },
};
