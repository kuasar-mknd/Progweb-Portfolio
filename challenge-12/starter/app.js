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
    })
        .then((res) => {
            Promise.all([getWeather(res.lat, res.long), getStation(res.lat, res.long)])
                .then((res) => {
                    const weather = res[0];
                    const station = res[1];
                    renderWeather(weather.fcst_day_0.tmin, weather.fcst_day_0.tmax);
                    return station;
                })
                .then((res) => {
                    console.log(res);
                    return getStationBoard(res.stations[1].id);
                })
                .then((res) => {
                    return parseStationData(res);
                })
                .then((res) => {
                    renderStationName(res.station);
                    res.departures.forEach((el) => {
                        renderTrain(el);
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
};

getDashboardInformation();

const getWeather = async (lat, long) => {
    const response = await fetch(`https://www.prevision-meteo.ch/services/json/lat=${lat}lng=${long}`);
    const data = await response.json();
    return data;
}

const getStation = async (lat, long) => {
    //fetcch only for train station
    const response = await fetch(`https://transport.opendata.ch/v1/locations?type=station&x=${long}&y=${lat}`);

    //const response = await fetch(`https://transport.opendata.ch/v1/locations?x=${long}&y=${lat}&type=station`);
    const data = await response.json();
    return data;
}

const getStationBoard = async (id) => {
    const response = await fetch(`https://transport.opendata.ch/v1/stationboard?id=${id}`);
    const data = await response.json();
    return data;
}
