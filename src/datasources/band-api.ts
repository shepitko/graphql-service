import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Band } from '../types/Band.t';

export class BandAPI extends RESTDataSource {
	constructor() {
		super();
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

	async createBand(data: any): Promise<Band> {
		const album = await this.post(`bands`, data);

		return album || null;
	}

	async updateBand(data: any): Promise<Band> {
		const { id, ...rest } = data;
		const band = await this.put(`bands/${id}`, rest);

		return band || null;
	}

	async deleteBand(id: any): Promise<Response> {
		const reponse = await this.delete(`bands/${id}`);

		return reponse;
	}
}
