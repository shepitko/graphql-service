import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Favourite } from '../types/Favourite.t';
import { PaginatedReponse } from '../types/PaginatedResponse.t';

export class FavouritesAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'http://localhost:3007/v1/';
	}

	willSendRequest(request: RequestOptions): void {
		request.headers.set('Authorization', this.context.token);
	}

	async getAllFavourites(limit = 5, offset = 0): Promise<PaginatedReponse<Favourite>> {
		const favourites = await this.get('favourites', { limit, offset });

		return favourites;
	}

	async addSomethingToFavourites(data: any): Promise<Favourite> {
		const favourite = await this.get('favourites/add', data);

		return favourite;
	}
}
