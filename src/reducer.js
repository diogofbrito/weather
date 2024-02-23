export function reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CITIES':
			return { ...state, cities: payload };
		case 'SET_SEARCH_INPUT':
			return { ...state, inputValue: payload };
		case 'SET_SELECTED_CITY':
			return { ...state, selectedCity: payload };
		case 'RESET_INPUT_VALUE':
			return { ...state, inputValue: '' };

		default:
			return state;
	}
}
