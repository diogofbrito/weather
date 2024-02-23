import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.ipma.pt/open-data',
	timeout: 30000, // ms
});

export async function getCities( ) {
	const response = await api.get('/distrits-islands.json');

	//console.log("getCities()", response);

	return response.data;
}

export async function getCityForecast(globalIdLocal) {
	const response = await api.get(`/forecast/meteorology/cities/daily/${globalIdLocal}.json`);

	console.log('getCityForecast(globalIdLocal)', response);

	return response.data;
}
