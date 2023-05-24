import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	headers: {
		Authorization: `Bearer ${process.env.API_KEY}`,
	},
	params: {
		language: 'ko-KR',
	},
});

export default instance;
