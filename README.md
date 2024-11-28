# COMP3123 - Lab Test 2
By Aadi Badola (101412150)

## Weather Report App
Fetches weather information for a city using OpenWeather API
### Running the App
Clone the repository
`git clone https://github.com/aadi219/101412150_COMP3123_labtest02.git`
`cd 101412150_COMP3123_labtest02`

Install node modules
`npm install`
Create .env file with your API_KEY
`echo "REACT_APP_API_KEY={your_api_key}" > .env`
Run the app
`npm start`

### Docs
The main component of the app is defined in `src/components/WeatherReport.jsx`. This component stores the state for the weather report being fetched from the endpoint and renders it using the `WeatherDetails` component.
The weather details being rendered can be dynamically changed by passing information to the `LocationForm` component. Upon pressing the `Get Weather Report` button, this component takes the values entered `InputControls` and uses them to make an axios get request to the server. A successful response sets the state of the parent component to the newly fetched data.