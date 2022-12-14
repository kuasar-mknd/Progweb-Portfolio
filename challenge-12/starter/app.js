"use strict";

// getCoordinates()
// Demande au navigateur de détecter la position actuelle de l'utilisateur et retourne une Promise
const getCoordinates = () => {
    return new Promise((res, rej) =>
        navigator.geolocation.getCurrentPosition(res, rej)
    );
};

// getPosition()
// Résout la promesse de getCoordinates et retourne un objet {lat: x, long: y}
const getPosition = async () => {
    const position = await getCoordinates();
    return {
        lat: position.coords.latitude,
        long: position.coords.longitude
    };
};

// renderWeather(min, max)
// Affiche la valeu des deux paramêtres dans le widget de météo
const renderWeather = (min, max) => {
    document.querySelector(".min").textContent = `${min}°C`;
    document.querySelector(".max").textContent = `${max}°C`;
    return;
};

// parseStationData(rawData)
// Reçoit la réponse JSON de l'API Transport/stationboard et recrache un objet
// ne contenant que les informations pertinentes.
const parseStationData = (rawData) => {
    const {stationboard} = rawData;
    const departures = stationboard.map((el) => {
        const date = new Date(el.stop.departure);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedHours = date.getHours() < 10 ? "0" + hours : hours;
        const formattedMinutes = date.getMinutes() < 10 ? "0" + minutes : minutes;
        return {
            departure: `${formattedHours}:${formattedMinutes}`,
            destination: el.to,
            category: el.category
        };
    });
    return {
        station: rawData.station.name,
        departures
    };
};

// renderTrain(train)
// Affiche une ligne de départ dans le widget CFF.
const renderTrain = (train) => {
    const board = document.querySelector(".departures");
    const html = `
    <article>
        <div class="time">${train.departure}</div>
        <div class="category" data-category="${train.category}">${train.category}</div>
        <div class="destination">${train.destination}</div>
    </article>
    `;
    board.insertAdjacentHTML("beforeend", html);
    return;
};

// renderStationName(station)
// Affiche le mot passé en paramettre dans le widget CFF. 
const renderStationName = (station) => {
    const stationElement = document.querySelector(".departures header p");
    stationElement.textContent = station;
};

// Votre code peut se trouver dans cette fonction. L'appel vers getPosition est
// déjà implémenté. Si vous jetez un coup d'oeil à votre console vous verrez un objet
// contenant votre position.
const getDashboardInformation = () => {
    getPosition().then((res) => {
        console.log(res);
        return res;
    }).then(async (res) => {
        const weather = await getWeather(res.lat, res.long);

        console.log(weather);
        console.log(res);
        return {weather, res};
    }).then(async (res) => {
        const station = getStation(res.res.lat, res.res.long);
        console.log(station);
        return {weather: res.weather, res: res.res, station};
    }).then((res) => {
        const stationBoard = getStationBoard(res.station.id);
        console.log(stationBoard);
        return {weather: res.weather, res: res.res, station: res.station, stationBoard};
    }).then(async (res) => {
        console.log(res);
        renderWeather(res.weather.fcst_day_0.tmin, res.weather.fcst_day_0.tmax);
        renderStationName(res.station.name);
        res.stationBoard.stationboard.forEach((train) => {
            renderTrain(train);
        });
    });
};

getDashboardInformation();

const getWeather = async (lat, long) => {
    const response = await fetch(`https://www.prevision-meteo.ch/services/json/lat=${lat}lng=${long}`);
    const data = await response.json();
    return data;
}

const getStation = async (lat, long) => {
    //fetch only station with only train
    const response = await fetch(`https://transport.opendata.ch/v1/locations?x=${long}&y=${lat}&&limit=100`);
    const data = await response.json();
    //console.log(data);
    //race to get the first stationboard with train
    const stationConst = await Promise.race(data.stations.map(async (station) => {
        const response = await fetch(`https://transport.opendata.ch/v1/stationboard?id=${station.id}&transportations[]=train&limit=100`);
        const data = await response.json();
        //console.log(data);
        //check if there is a train
        if (data.stationboard.length > 0) {
            console.log(station);
            return station;
        }
    return stationConst;
    }));

    //const response = await fetch(`https://transport.opendata.ch/v1/locations?type=station&x=${long}&y=${lat}`);

    //const response = await fetch(`https://transport.opendata.ch/v1/locations?x=${long}&y=${lat}&type=station`);
    //const data = await response.json();
    //return data;
}

const getStationBoard = async (id) => {
    const response = await fetch(`https://transport.opendata.ch/v1/stationboard?id=${id}`);
    const data = await response.json();
    return data;
}
