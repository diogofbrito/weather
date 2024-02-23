import Forecast from './components/Forecast';
import Search from './components/Search';
import { AppProvider } from './context/AppContext';



function App() {
	

	return (
		<div className='app'>
			<h1>Meteorologia em Portugal</h1>

			<AppProvider>
				<Search/>
				<Forecast/>
			</AppProvider>
		</div>
	);
}

export default App;
