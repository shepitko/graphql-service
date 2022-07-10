import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Genre } from '../types/Genre.t';

class GenreAPI extends RESTDataSource {
	constructor() {
		super();
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

	async createGenre(data: any): Promise<Genre> {
		const genre = await this.post(`genres`, data);

		return genre || null;
	}

	async updateGenre(data: any): Promise<Genre> {
		const { id, ...rest } = data;
		const genre = await this.put(`genres/${id}`, rest);

		return genre || null;
	}

	async deleteGenre(id: any): Promise<Response> {
		const reponse = await this.delete(`genres/${id}`);

		return reponse;
	}
}

export default GenreAPI;
