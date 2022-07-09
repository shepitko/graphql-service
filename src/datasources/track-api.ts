import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Track } from '../types/Track.t';

export class TrackAPI extends RESTDataSource {
	constructor() {
		super();
		// the Catstronauts catalog is hosted on this server
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
}
