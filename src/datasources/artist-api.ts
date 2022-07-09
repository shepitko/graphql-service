import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Artist } from '../types/Artist.t';

export class ArtistAPI extends RESTDataSource {
	constructor() {
		super();
		// the Catstronauts catalog is hosted on this server
		this.baseURL = 'http://localhost:3002/v1/';
	}

	willSendRequest(request: RequestOptions): void {
		request.headers.set('Authorization', this.context.token);
	}

	async getAllArtists(): Promise<Artist[]> {
		const artists = await this.get('artists');

		return artists.items || [];
	}

	async getArtist(artistId: number): Promise<Artist> {
		const artist = await this.get(`artists/${artistId}`);
		return artist || null;
	}

	async createArtist(data: any): Promise<Artist> {
		const artist = await this.post(`artists`, data);

		return artist || null;
	}
}
