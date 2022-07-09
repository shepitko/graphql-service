import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Band } from '../types/Band.t';

export class BandAPI extends RESTDataSource {
	constructor() {
		super();
		// the Catstronauts catalog is hosted on this server
		this.baseURL = 'http://localhost:3003/v1/';
	}

	willSendRequest(request: RequestOptions): void {
		request.headers.set('Authorization', this.context.token);
	}

	async getAllBands(): Promise<Band[]> {
		const bands = await this.get('bands');

		return bands.items || [];
	}

	async getBand(bandId: Number): Promise<Band> {
		const band = await this.get(`bands/${bandId}`);
		return band || null;
	}
}
