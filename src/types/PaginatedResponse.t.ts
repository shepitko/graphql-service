export interface PaginatedReponse<T> {
	items: T[];
	offset: number;
	limit: number;
	total: number;
}
