import { gql } from 'apollo-server';

export const typeDefs = gql`
	type Query {
		artists(limit: Int, offset: Int): PaginatedArtists
		artist(id: ID!): Artist

		genres(limit: Int, offset: Int): PaginatedGenres
		genre(id: ID!): Genre

		tracks(limit: Int, offset: Int): PaginatedTracks
		track(id: ID!): Track

		bands: PaginatedBands
		band(id: ID!): Band

		albums: PaginatedAlbums
		album(id: ID!): Album

		jwt: String
		user(id: ID!): User
		favourites: PaginatedFavourites
	}

	type Mutation {
		createArtist(
			firstName: String
			secondName: String
			middleName: String
			birthDate: String
			birthPlace: String
			country: String
			bandIds: [ID]
			instruments: [String]
		): Artist
		deleteArtist(id: ID!): Response
		updateArtist(
			id: ID!
			firstName: String
			secondName: String
			middleName: String
			birthDate: String
			birthPlace: String
			country: String
			bandIds: [ID]
			instruments: [String]
		): Artist

		createGenre(name: String, description: String, country: String, year: Int): Genre
		deleteGenre(id: ID!): Response
		updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre

		createBand(name: String!, origin: String, members: [MemberInput!], website: String, genresIds: [ID]): Band
		deleteBand(id: ID!): Response
		updateBand(id: ID!, name: String, origin: String, members: [MemberInput!], website: String, genresIds: [ID]): Band

		createTrack(
			title: String!
			albumId: ID
			artistIds: [ID]
			genresIds: [ID]
			bandIds: [ID]
			duration: Int
			released: Int
		): Track
		deleteTrack(id: ID!): Response
		updateTrack(
			id: ID!
			title: String!
			albumId: ID
			artistIds: [ID]
			genresIds: [ID]
			bandIds: [ID]
			duration: Int
			released: Int
		): Track

		createAlbum(
			name: String
			released: Int
			artistIds: [ID]
			bandIds: [ID]
			trackIds: [ID]
			genresIds: [ID]
			image: String
		): Album
		deleteAlbum(id: ID!): Response
		updateAlbum(
			id: ID!
			name: String
			released: Int
			artistIds: [ID]
			bandIds: [ID]
			trackIds: [ID]
			genresIds: [ID]
			image: String
		): Album

		register(id: ID!, firstName: String, secondName: String, password: String, email: String!): User

		addTrackToFavourites(userId: ID, trackIds: [ID!]): Favourites
		addBandToFavourites(userId: ID, bandIds: [ID!]): Favourites
		addArtistToFavourites(userId: ID, artistIds: [ID!]): Favourites
		addGenreToFavourites(userId: ID, genresIds: [ID!]): Favourites
	}

	type Artist {
		id: ID!
		firstName: String
		secondName: String
		middleName: String
		birthDate: String
		birthPlace: String
		country: String
		bands: [Band]
		instruments: [String]
	}

	type Member {
		artist: String
		instrument: String
		years: [String]
	}

	input MemberInput {
		artist: String
		instrument: String
		years: [String]
	}

	type Genre {
		id: ID!
		name: String
		description: String
		country: String
		year: Int
	}

	type Track {
		id: ID!
		title: String!
		album: Album
		artists: [Artist]
		genres: [Genre]
		bands: [Band]
		duration: Int
		released: Int
	}

	type Band {
		id: ID!
		name: String
		origin: String
		members: [Member]
		website: String
		genres: [Genre]
	}

	type Album {
		id: ID!
		name: String
		released: Int
		artists: [Artist]
		bands: [Band]
		tracks: [Track]
		genres: [Genre]
		image: String
	}

	type User {
		id: ID!
		firstName: String
		secondName: String
		password: String
		email: String!
	}

	type Favourites {
		id: ID!
		userId: ID
		bands: [Band]
		genres: [Genre]
		artists: [Artist]
		tracks: [Track]
	}

	type Response {
		acknowledged: Boolean
		deletedCount: Int
	}

	interface PaginatedResponse {
		offset: Int
		limit: Int
		total: Int
	}

	type PaginatedArtists implements PaginatedResponse {
		items: [Artist]
		offset: Int
		limit: Int
		total: Int
	}

	type PaginatedAlbums implements PaginatedResponse {
		items: [Album]
		offset: Int
		limit: Int
		total: Int
	}

	type PaginatedBands implements PaginatedResponse {
		items: [Band]
		offset: Int
		limit: Int
		total: Int
	}

	type PaginatedGenres implements PaginatedResponse {
		items: [Genre]
		offset: Int
		limit: Int
		total: Int
	}

	type PaginatedTracks implements PaginatedResponse {
		items: [Track]
		offset: Int
		limit: Int
		total: Int
	}

	type PaginatedFavourites implements PaginatedResponse {
		items: [Favourites]
		offset: Int
		limit: Int
		total: Int
	}
`;
