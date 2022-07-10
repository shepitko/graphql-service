import { Band } from './Band.t';

export interface Artist {
	_id: string;
	firstName: string;
	secondName: string;
	middleName: string;
	birthDate: string;
	birthPlace: string;
	country: string;
	bandsIds: string[];
	bands: Band[];
	instruments: string[];
}
