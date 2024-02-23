import { createContext, useEffect} from 'react';
import { useReducer } from 'react';
import { reducer } from '../reducer';
import { getCities, getCityForecast } from '../services/api';

export const AppContext = createContext();

const initialState = {
	cities: [],
	inputValue: '',
	selectedCity: {
		cityName: '',
		Forecast: [],
	},
};

export function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		async function getCitiesForecast() {
			try {
				const country = await getCities();

				console.log('CITIES data ::', country);

				dispatch({ type: 'SET_CITIES', payload: country.data });
			} catch (error) {
				console.log(error);
			}
		}

		getCitiesForecast();
	}, []);

	function handleInputChange(event) {
		const { value } = event.target;

		dispatch({ type: 'SET_SEARCH_INPUT', payload: value });
	}

	function handleChosenCity(globalIdLocal, cityName) {
		dispatch({ type: 'RESET_INPUT_VALUE' });

		async function getCityForecastById() {
			try {
				const CityForecast = await getCityForecast(globalIdLocal);
				dispatch({ type: 'SET_SELECTED_CITY', payload: { cityName, Forecast: CityForecast.data } });
			} catch (error) {
				console.log(error);
			}
		}

		getCityForecastById();
	}

	return <AppContext.Provider value={{ ...state, handleInputChange, handleChosenCity}}>{children}</AppContext.Provider>;
}
