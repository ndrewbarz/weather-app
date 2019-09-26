class UI {
	constructor() {
		this.location = document.querySelector('#w-location');
		this.desc = document.querySelector('#w-desc');
		this.string = document.querySelector('#w-string');
		this.details = document.querySelector('#w-details');
		this.icon = document.querySelector('#w-icon');
		this.humidity = document.querySelector('#w-humidity');
		this.feelsLike = document.querySelector('#w-feels-like');
		this.pressure = document.querySelector('#w-pressure');
		this.wind = document.querySelector('#w-wind');
	}

	paint(weather) {
		this.location.textContent = weather.name;
		this.desc.textContent = weather.weather[0].description.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
		this.string.innerHTML = `${Math.floor(weather.main.temp)}<span>&deg;С</span>`;
		this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
		this.humidity.textContent = `Влажность: ${weather.main.humidity} %`;
		this.wind.textContent = `Скорость ветра: ${weather.wind.speed} м/с`;
		this.pressure.textContent = `Давление: ${weather.main.pressure} hPa`;
	}
}