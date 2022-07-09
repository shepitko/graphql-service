import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Favourite } from '../types/Favourite.t';

export class FavouritesAPI extends RESTDataSource {
	constructor() {
		super();
		// the Catstronauts catalog is hosted on this server
		this.baseURL = 'http://localhost:3007/v1/';
	}

	willSendRequest(request: RequestOptions): void {
		request.headers.set('Authorization', this.context.token);
	}

	async getAllFavourites(): Promise<Favourite[]> {
		const favourites = await this.get('favourites');

		return favourites.items || [];
	}
}
