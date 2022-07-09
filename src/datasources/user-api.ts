import { RESTDataSource } from 'apollo-datasource-rest';
import { User } from '../types/User.t';

export class UserAPI extends RESTDataSource {
	constructor() {
		super();
		// the Catstronauts catalog is hosted on this server
		this.baseURL = 'http://localhost:3004/v1/';
	}

	async getUser(userId: number): Promise<User[]> {
		const users = await this.get(`users/${userId}`);

		return users.items;
	}

	getJwt(userId: number): Promise<string> {
		return this.get(`users/${userId}`);
	}
}
