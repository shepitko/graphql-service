import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Artist } from '../types/Artist.t';
import { PaginatedReponse } from '../types/PaginatedResponse.t';
import { Response } from '../types/Response.t';

export class ArtistAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'http://localhost:3002/v1/';
	}

	willSendRequest(request: RequestOptions): void {
		request.headers.set('Authorization', this.context.token);
	}

	async getAllArtists(limit = 5, offset = 0): Promise<PaginatedReponse<Artist>> {
		const artists = await this.get('artists', { limit, offset });

		return artists;
	}

	async getArtist(artistId: number): Promise<Artist> {
		const artist = await this.get(`artists/${artistId}`);
		return artist || null;
	}

	async createArtist(data: any): Promise<Artist> {
		const artist = await this.post(`artists`, data);

		return artist || null;
	}

	async updateArtist(data: any): Promise<Artist> {
		const { id, ...rest } = data;
		const artist = await this.put(`artists/${id}`, rest);

		return artist || null;
	}

	async deleteArtist(id: any): Promise<Response> {
		const reponse = await this.delete(`artists/${id}`);

		return reponse;
	}
}
