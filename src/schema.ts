import { gql } from 'apollo-server';

export const typeDefs = gql`
	type Query {
		"Fetch a specific artist"
		artist(id: ID!): Artist
		artists: [Artist]
		genre(id: ID!): Genre
		genres: [Genre]
		track(id: ID!): Track
		tracks: [Track]
		band(id: ID!): Band
		bands: [Band]
		album(id: ID!): Album
		albums: [Album]
		jwt: String
		user(id: ID!): User
		favourites: [Favourites]
	}

	type Mutation {
		createArtist(
			firstName: String
			secondName: String
			middleName: String
			birthDate: String
			birthPlace: String
			deathDate: String
			deathPlace: String
			country: String
			bands: String
			instruments: String
			pseudonims: String
			labels: String
		): Artist
		deleteArtist(id: ID!): Artist
		updateArtist(
			id: ID!
			firstName: String
			secondName: String
			middleName: String
			birthDate: String
			birthPlace: String
			deathDate: String
			deathPlace: String
			country: String
			bands: String
			instruments: String
			pseudonims: String
			labels: String
		): Artist

		createGenre(name: String, description: String, country: String, year: Int): Genre
		deleteGenre(id: ID!): Genre
		updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre

		createBand(name: String, origin: String, memberIds: [ID], website: String, genreIds: [ID]): Band
		deleteBand(id: ID!): Band
		updateBand(name: String, origin: String, memberIds: [ID], website: String, genreIds: [ID]): Band

		createTrack(
			title: String!
			albumId: ID
			artistIds: [ID]
			genreIds: [ID]
			bandIds: [ID]
			duration: Int
			released: Int
		): Track
		deleteTrack(id: ID!): Track
		updateTrack(
			id: ID!
			title: String!
			albumId: ID
			artistIds: [ID]
			genreIds: [ID]
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
			genreIds: [ID]
			image: String
		): Album
		deleteAlbum(id: ID!): Album
		updateAlbum(
			id: ID!
			name: String
			released: Int
			artistIds: [ID]
			bandIds: [ID]
			trackIds: [ID]
			genreIds: [ID]
			image: String
		): Album

		register(id: ID!, firstName: String, secondName: String, password: String, email: String!): User

		addTrackToFavourites(userId: ID, trackIds: [ID!]): Favourites
		addBandToFavourites(userId: ID, bandIds: [ID!]): Favourites
		addArtistToFavourites(userId: ID, artistIds: [ID!]): Favourites
		addGenreToFavourites(userId: ID, genreIds: [ID!]): Favourites
	}

	type Artist {
		id: ID!
		firstName: String
		secondName: String
		middleName: String
		birthDate: String
		birthPlace: String
		deathDate: String
		deathPlace: String
		country: String
		bands: String
		instruments: String
		pseudonims: String
		labels: String
	}

	type Member {
		id: ID!
		firstName: String
		secondName: String
		middleName: String
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
`;
