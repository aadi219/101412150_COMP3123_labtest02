import logo from './logo.svg';
import './App.css';
import LocationForm from './components/LocationForm';


const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

function App() {
  return (
    <>
      <LocationForm apiKey={API_KEY} />
    </>
  );
}

export default App;
