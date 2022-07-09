import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Album } from '../types/Album.t';

export class AlbumAPI extends RESTDataSource {
	constructor() {
		super();
		// the Catstronauts catalog is hosted on this server
		this.baseURL = 'http://localhost:3005/v1/';
	}

	willSendRequest(request: RequestOptions): void {
		request.headers.set('Authorization', this.context.token);
	}

	async getAllAlbums(): Promise<Album[]> {
		const albums = await this.get('albums');

		return albums.items || [];
	}

	async getAlbum(albumId: Number): Promise<Album> {
		const album = await this.get(`albums/${albumId}`);

		return album || null;
	}
}
