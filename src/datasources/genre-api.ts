import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Genre } from '../types/Genre.t';

class GenreAPI extends RESTDataSource {
	constructor() {
		super();
		// the Catstronauts catalog is hosted on this server
		this.baseURL = 'http://localhost:3001/v1/';
	}

	willSendRequest(request: RequestOptions): void {
		request.headers.set('Authorization', this.context.token);
	}

	async getAllGenres(): Promise<Genre[]> {
		const genres = await this.get('genres');

		return genres.items || [];
	}

	async getGenre(genreId: number): Promise<Genre> {
		const genre = await this.get(`genres/${genreId}`);

		return genre || null;
	}
}

export default GenreAPI;
