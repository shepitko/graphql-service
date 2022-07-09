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

	"""
	type Mutation {
		"Artists"
		createArtist(): Artist
		deleteArtist(): Artist
		updateArtist(): Artist

		"Genres"
		createGenre(): Genre
		deleteGenre(): Genre
		updateGenre(): Genre

		"Bands"
		createBand(): Band
		deleteBand(): Band
		updateBand(): Band

		"Tracks"
		createTrack(): Track
		deleteTrack(): Track
		updateTrack(): Track

		"Albums"
		createAlbum(): Album
		deleteAlbum(): Album
		updateAlbum(): Album

		"Users"
		register(): User

		"Favourites"
		addTrackToFavourites(): Favourites
		addBandToFavourites(): Favourites
		addArtistToFavourites(): Favourites
		addGenreToFavourites(): Favourites
	}
	"""
	type Artist {
		_id: ID!
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
		bands: [Band]
		duration: Int
		released: Int
		genres: [Genre]
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
