import { gql } from 'apollo-server';

export const typeDefs = gql`
	type Query {
		artists: [Artist]
		"Fetch a specific artis"
		artist(id: ID!): Artist
	}

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
`;
