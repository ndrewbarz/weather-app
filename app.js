// Init Storage
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();

// Init weather obj
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
	const city = document.querySelector('#city').value;
	const country = document.querySelector('#country').value;

	// Change location
	weather.changeLocation(city, country);

	// Set location in LS
	storage.setLocationData(city, country);

	// Get and display weather again
	getWeather();
	
	// Close modal
	$('#locModal').modal('hide');
});


function getWeather() {
	weather.getWeather()
		.then(results => {
			ui.paint(results);
		})
		.catch(err => console.log(err));
}
