import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Album } from '../types/Album.t';
import { PaginatedReponse } from '../types/PaginatedResponse.t';

export class AlbumAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'http://localhost:3005/v1/';
	}

	willSendRequest(request: RequestOptions): void {
		request.headers.set('Authorization', this.context.token);
	}

	async getAllAlbums(limit = 5, offset = 0): Promise<PaginatedReponse<Album>> {
		const albums = await this.get('albums', { limit, offset });

		return albums;
	}

	async getAlbum(albumId: Number): Promise<Album> {
		const album = await this.get(`albums/${albumId}`);

		return album || null;
	}

	async createAlbum(data: any): Promise<Album> {
		const album = await this.post(`albums`, data);

		return album || null;
	}

	async updateAlbum(data: any): Promise<Album> {
		const { id, ...rest } = data;
		const album = await this.put(`albums/${id}`, rest);

		return album || null;
	}

	async deleteAlbum(id: any): Promise<Response> {
		const reponse = await this.delete(`genres/${id}`);

		return reponse;
	}
}
