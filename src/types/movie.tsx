export interface Root {
	status: string;
	endpointName: string;
	requestId: string;
	startedTimeStamp: number;
	data: Data;
	fulfilledTimeStamp: number;
	isUninitialized: boolean;
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	currentData: CurrentData;
	isFetching: boolean;
}

export interface Data {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	videos?: Videos;
	name?: string;
	first_air_date?: string;
}

export interface BelongsToCollection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path?: string;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface Videos {
	results: Result[];
}

export interface Result {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

export interface CurrentData {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection2;
	budget: number;
	genres: Genre2[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany2[];
	production_countries: ProductionCountry2[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage2[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	videos: Videos2;
}

export interface BelongsToCollection2 {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}

export interface Genre2 {
	id: number;
	name: string;
}

export interface ProductionCompany2 {
	id: number;
	logo_path?: string;
	name: string;
	origin_country: string;
}

export interface ProductionCountry2 {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage2 {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface Videos2 {
	results: Result2[];
}

export interface Result2 {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

export interface SearchResult {
	adult: boolean;
	backdrop_path: string;
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
