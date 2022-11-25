"use strict";

function requestToGetConnection(station) {
    const req = new XMLHttpRequest();

    req.open('GET', 'https://transport.opendata.ch/v1/stationboard?station='+station+'&limit=10');
    req.send();


    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            const data = JSON.parse(req.responseText);
            console.log(data);
            const departures = document.querySelector('#board');
            const dataDepartures = data.stationboard;
            data.stationboard.forEach(function (departure) {

                const article = document.createElement('article');
                const category = document.createElement('div');
                const time = document.createElement('div');
                const delay = document.createElement('div');
                const destination = document.createElement('div');
                const trainType = document.createElement('div');
                category.classList.add('category');
                category.style.display = 'flex';
                trainType.classList.add('train-type');
                trainType.style.display = 'flex';
                time.classList.add('time');
                time.style.display = 'flex';
                delay.classList.add('delay');
                delay.style.display = 'flex';
                destination.classList.add('destination');

                category.setAttribute('data-category', departure.category);

                category.textContent = departure.category;
                const departureTime = new Date(departure.stop.departureTimestamp * 1000);
                time.textContent = departureTime.toLocaleTimeString();
                const delayTime = departure.stop.delay;
                if(!delayTime){
                    delay.textContent = '';
                }
                else{
                    delay.textContent = ' +' + delayTime;
                }
                destination.textContent = departure.to;
                trainType.textContent = departure.number;
                article.appendChild(time);
                time.appendChild(delay);
                category.appendChild(trainType);
                article.appendChild(category);
                article.appendChild(destination);
                departures.appendChild(article);
            })
        } else {
            console.log('Error');
        }
    };

    req.onerror = function () {
        console.log('Connection error');
    };
}

requestToGetConnection("Yverdon-les-Bains");



//add event listener on element input with id input_station change to get the station name
document.getElementById('input_station').addEventListener('change', function () {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://transport.opendata.ch/v1/locations?query=' + this.value);
    req.send();
    req.onerror = function () {
        console.log('Connection error');
    }
    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            const data = JSON.parse(req.responseText);
            //change element h1 with id station to the first station name
            document.getElementById('station').textContent = data.stations[0].name;
            //remove all article
            document.querySelectorAll('article').forEach(function (article) {
                article.remove();
            });

            requestToGetConnection(data.stations[0].name);
        }
    }
});

//event listener pour chaque modification de caractère dans l'input
