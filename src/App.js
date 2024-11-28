import logo from './logo.svg';
import './App.css';
import LocationForm from './components/LocationForm';
import ApiContext from './client/ApiContext';
import WeatherReport from './components/WeatherReport';


function App() {
  return (
      <div className='flex justify-center flex-col items-center p-8'>
        <WeatherReport />
      </div>
  );
}

export default App;