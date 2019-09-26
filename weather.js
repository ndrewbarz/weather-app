class Weather {
	constructor(city, country) {
		this.apiKey = 'c17891d400ac78009d6ee124232a99c7';
		this.city = city;
		this.country = country;
	}

	// Fetch weather from API
	async getWeather() {
		// const proxy = 'https://cors-anywhere.herokuapp.com/';
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&lang=ua&units=metric&appid=${this.apiKey}`);

		const responseData = await response.json();

		return responseData;
	}

	// Change Weather location
	changeLocation(city, country) {
		this.city = city;
		this.country = country;
	}
}