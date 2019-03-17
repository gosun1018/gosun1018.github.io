const elWeather = document.querySelector('.js-weather');

//api키
const API_KEY = 'e2911ee70ba85fb19c4f6c87ed2866bc';
const COORDS = 'coords';

//api 불러오기
function getWeather(lat,lng){
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
		.then(function(response){
		return response.json();
	})
		.then(function(json){
		const temperture = json.main.temp;
		const place = json.name;
		elWeather.innerText = `${temperture} @ ${place}`;
		
	});
}

function saveCoords(e){
	localStorage.setItem(COORDS,JSON.stringify(e));
}

function handleGeoSuccess(pos){
	const latitude = pos.coords.latitude;
	const longitude = pos.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude,longitude);
}

function handleGeoError(){
	
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}


function loadCoords(){
	const loadedCords = localStorage.getItem(COORDS);
	if(loadedCords === null){
		askForCoords();
	}else{
		const parseCoords = JSON.parse(loadedCords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
		
		
}


function fnWeather(){
	loadCoords();
}

fnWeather();