import { Member } from './Member.t';

export interface Band {
	_id: string;
	name: string;
	origin: string;
	members: Member[];
	website: string;
	genresIds: string[];
}
