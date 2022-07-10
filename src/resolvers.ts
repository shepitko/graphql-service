import { Album } from './types/Album.t';
import { Artist } from './types/Artist.t';
import { Band } from './types/Band.t';
import { Favourite } from './types/Favourite.t';
import { Genre } from './types/Genre.t';
import { PaginatedReponse } from './types/PaginatedResponse.t';
import { Response } from './types/Response.t';
import { Track } from './types/Track.t';
import { User } from './types/User.t';

export interface IDataSources {
	artistAPI: {
		getAllArtists(limit: number, offset: number): Promise<PaginatedReponse<Artist>>;
		getArtist(id: string): Promise<Artist>;

		createArtist(data: any): Promise<Artist>;
		updateArtist(data: any): Promise<Artist>;
		deleteArtist(id: string): Promise<Response>;
	};

	bandAPI: {
		getAllBands(limit: number, offset: number): Promise<PaginatedReponse<Band>>;
		getBand(id: string): Promise<Band>;

		createBand(data: any): Promise<Band>;
		updateBand(data: any): Promise<Band>;
		deleteBand(id: string): Promise<Response>;
	};

	genreAPI: {
		getAllGenres(limit: number, offset: number): Promise<PaginatedReponse<Genre>>;
		getGenre(id: string): Promise<Genre>;

		createGenre(data: any): Promise<Genre>;
		updateGenre(data: any): Promise<Genre>;
		deleteGenre(id: string): Promise<Response>;
	};

	albumAPI: {
		getAllAlbums(limit: number, offset: number): Promise<PaginatedReponse<Album>>;
		getAlbum(id: string): Promise<Album>;

		createAlbum(data: any): Promise<Album>;
		updateAlbum(data: any): Promise<Album>;
		deleteAlbum(id: string): Promise<Response>;
	};

	trackAPI: {
		getAllTracks(limit: number, offset: number): Promise<PaginatedReponse<Track>>;
		getTrack(id: string): Promise<Track>;

		createTrack(data: any): Promise<Track>;
		updateTrack(data: any): Promise<Track>;
		deleteTrack(id: string): Promise<Response>;
	};

	userAPI: {
		getJwt(): Promise<string>;

		getUser(id: string): Promise<User>;

		register(data: any): Promise<User>;
	};

	favouritesAPI: {
		getAllFavourites(): Promise<Favourite[]>;

		addSomethingToFavourites(data: any): Promise<Favourite>;
	};
}

export const resolvers = {
	Query: {
		album: (_: any, { id }: { id: string }, { dataSources }: { dataSources: IDataSources }): Promise<Album> => {
			return dataSources.albumAPI.getAlbum(id);
		},

		albums: (
			_: any,
			{ limit, offset }: { limit: number; offset: number },
			{ dataSources }: { dataSources: IDataSources },
		): Promise<PaginatedReponse<Album>> => {
			return dataSources.albumAPI.getAllAlbums(limit, offset);
		},

		artist: (_: any, { id }: { id: string }, { dataSources }: { dataSources: IDataSources }): Promise<Artist> => {
			return dataSources.artistAPI.getArtist(id);
		},

		artists: (
			_: any,
			{ limit, offset }: { limit: number; offset: number },
			{ dataSources }: { dataSources: IDataSources },
		): Promise<PaginatedReponse<Artist>> => {
			return dataSources.artistAPI.getAllArtists(limit, offset);
		},

		band: (_: any, { id }: { id: string }, { dataSources }: { dataSources: IDataSources }): Promise<Band> => {
			return dataSources.bandAPI.getBand(id);
		},

		bands: (
			_: any,
			{ limit, offset }: { limit: number; offset: number },
			{ dataSources }: { dataSources: IDataSources },
		): Promise<PaginatedReponse<Band>> => {
			return dataSources.bandAPI.getAllBands(limit, offset);
		},

		genre: (_: any, { id }: { id: string }, { dataSources }: { dataSources: IDataSources }): Promise<Genre> => {
			return dataSources.genreAPI.getGenre(id);
		},

		genres: (
			_: any,
			{ limit, offset }: { limit: number; offset: number },
			{ dataSources }: { dataSources: IDataSources },
		): Promise<PaginatedReponse<Genre>> => {
			return dataSources.genreAPI.getAllGenres(limit, offset);
		},

		track: (_: any, { id }: { id: string }, { dataSources }: { dataSources: IDataSources }): Promise<Track> => {
			return dataSources.trackAPI.getTrack(id);
		},

		tracks: (
			_: any,
			{ limit, offset }: { limit: number; offset: number },
			{ dataSources }: { dataSources: IDataSources },
		): Promise<PaginatedReponse<Track>> => {
			return dataSources.trackAPI.getAllTracks(limit, offset);
		},

		jwt: (_: any, __: any, { dataSources }: { dataSources: IDataSources }): Promise<string> => {
			return dataSources.userAPI.getJwt();
		},

		user: (_: any, { id }: { id: string }, { dataSources }: { dataSources: IDataSources }): Promise<User> => {
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

		createBand: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Band> => {
			return dataSources.bandAPI.createBand(data);
		},
		updateBand: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Band> => {
			return dataSources.bandAPI.updateBand(data);
		},
		deleteBand: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Response> => {
			const { id } = data;
			return dataSources.bandAPI.deleteBand(id);
		},

		createAlbum: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Album> => {
			return dataSources.albumAPI.createAlbum(data);
		},
		updateAlbum: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Album> => {
			return dataSources.albumAPI.updateAlbum(data);
		},
		deleteAlbum: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Response> => {
			const { id } = data;
			return dataSources.albumAPI.deleteAlbum(id);
		},

		createTrack: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Track> => {
			return dataSources.trackAPI.createTrack(data);
		},
		updateTrack: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Track> => {
			return dataSources.trackAPI.updateTrack(data);
		},
		deleteTrack: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Response> => {
			const { id } = data;
			return dataSources.trackAPI.deleteTrack(id);
		},

		register: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<User> => {
			return dataSources.userAPI.register(data);
		},

		addTrackToFavourites: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Favourite> => {
			return dataSources.favouritesAPI.addSomethingToFavourites(data);
		},
		addBandToFavourites: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Favourite> => {
			return dataSources.favouritesAPI.addSomethingToFavourites(data);
		},
		addArtistToFavourites: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Favourite> => {
			return dataSources.favouritesAPI.addSomethingToFavourites(data);
		},
		addGenreToFavourites: (_: any, data: any, { dataSources }: { dataSources: IDataSources }): Promise<Favourite> => {
			return dataSources.favouritesAPI.addSomethingToFavourites(data);
		},
	},

	Artist: {
		id: ({ _id }: { _id: string }): string => _id,
		bands(artist: Artist, args: any, { dataSources }: { dataSources: IDataSources }): Promise<any> {
			return Promise.all(artist.bandsIds.map((bandId: string) => dataSources.bandAPI.getBand(bandId)));
		},
	},
	User: { id: ({ _id }: { _id: string }): string => _id },
	Band: {
		id: ({ _id }: { _id: string }): string => _id,
		genres(band: Band, args: any, { dataSources }: { dataSources: IDataSources }): Promise<any> {
			return Promise.all(band.genresIds.map((genreId: string) => dataSources.genreAPI.getGenre(genreId)));
		},
	},
	Genre: { id: ({ _id }: { _id: string }): string => _id },
	Track: { id: ({ _id }: { _id: string }): string => _id },
	Favourites: { id: ({ _id }: { _id: string }): string => _id },
	Album: { id: ({ _id }: { _id: string }): string => _id },
};
