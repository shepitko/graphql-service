import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Track } from '../types/Track.t';

export class TrackAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'http://localhost:3006/v1/';
	}

	willSendRequest(request: RequestOptions): void {
		request.headers.set('Authorization', this.context.token);
	}

	async getAllTracks(): Promise<Track[]> {
		const tracks = await this.get('tracks');

		return tracks.items || [];
	}

	async getTrack(trackId: number): Promise<Track> {
		const track = await this.get(`tracks/${trackId}`);

		return track || null;
	}

	async createTrack(data: any): Promise<Track> {
		const track = await this.post(`tracks`, data);

		return track || null;
	}

	async updateTrack(data: any): Promise<Track> {
		const { id, ...rest } = data;
		const track = await this.put(`tracks/${id}`, rest);

		return track || null;
	}

	async deleteTrack(id: any): Promise<Response> {
		const reponse = await this.delete(`tracks/${id}`);

		return reponse;
	}
}
