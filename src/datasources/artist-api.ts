import { RESTDataSource } from 'apollo-datasource-rest';

export interface IArtist {
	// id: Number;
	firstName: String;
	secondName: String;
	middleName: String;
	birthDate: String;
	birthPlace: String;
	deathDate: String;
	deathPlace: String;
	country: String;
	bands: String;
	instruments: String;
	pseudonims: String;
	labels: String;
}

export class ArtistAPI extends RESTDataSource {
	constructor() {
		super();
		// the Catstronauts catalog is hosted on this server
		this.baseURL = 'http://localhost:3002/v1/';
	}

	async getAllArtists(): Promise<IArtist[]> {
		const artists = await this.get('artists');

		return artists.items;
	}

	getArtist(artistId: Number): Promise<IArtist> {
		return this.get(`artists/${artistId}`);
	}
}
