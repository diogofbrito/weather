import { useContext } from 'react';
import { AppContext } from '../context/AppContext';



function Search() {
	const { cities, handleInputChange, inputValue, handleChosenCity } = useContext
		(AppContext);

	const filteredCities = cities.filter(city => city.local.toLowerCase().includes(inputValue.toLowerCase()));

	return (
		<div className='search'>
			<input type='text' placeholder='ex. Lisboa' onChange={handleInputChange} value={inputValue} />

			{inputValue.length > 0 && (
				<div className='cities-list'>
					{filteredCities.map(city => {
						return (
							<div key={city.globalIdLocal}>
								<button onClick={() => handleChosenCity(city.globalIdLocal, city.local)}>{city.local}</button>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Search;
