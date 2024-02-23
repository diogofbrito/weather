import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

function dateFormat(date) {
	const today = new Date();
	const dateObject = new Date(date);

	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

	if (dateObject.getDate() === today.getDate()) {
		return 'Hoje';
	} else if (dateObject.getDate() === today.getDate() + 1) {
		return 'Amanhã';
	}

	return weekDays[dateObject.getDay()];
}

function Forecast() {
	const { selectedCity } = useContext(AppContext);

	const { Forecast, cityName } = selectedCity;

	return (
		<>
			<h2 className='forecast-title'>{cityName}</h2>

			<div className='forecast'>
				{Forecast.map(day => {
					const imgId = day.idWeatherType < 10 ? `0${day.idWeatherType}` : day.idWeatherType;

					return (
						<div key={day.forecastDate} className='day'>
							<p>{dateFormat(day.forecastDate)}</p>

							<img src={`images/w_ic_d_${imgId}anim.svg`} />
							<p>TºC Min: {day.tMin}</p>
							<p>TºC Max: {day.tMax}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Forecast;
