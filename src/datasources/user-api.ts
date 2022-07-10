import { RESTDataSource } from 'apollo-datasource-rest';
import { User } from '../types/User.t';

export class UserAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'http://localhost:3004/v1/';
	}

	async getUser(userId: number): Promise<User> {
		const user = await this.get(`users/${userId}`);

		return user;
	}

	async getJwt(userId: number): Promise<string> {
		const user = await this.get(`users/${userId}`);

		return user.token;
	}

	async register(data: any): Promise<User> {
		const user = await this.get(`users/register`, data);

		return user;
	}
}
