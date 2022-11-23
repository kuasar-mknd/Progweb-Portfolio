"use strict";

const req = new XMLHttpRequest();

req.open('GET', 'https://transport.opendata.ch/v1/stationboard?station=yverdon&limit=10');
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
            const destination = document.createElement('div');
            const trainType = document.createElement('div');
            category.classList.add('category');
            category.style.display = 'flex';
            trainType.classList.add('train-type');
            trainType.style.display = 'flex';
            time.classList.add('time');
            destination.classList.add('destination');

            category.setAttribute('data-category', departure.category);

            category.textContent = departure.category;
            const departureTime = new Date(departure.stop.departureTimestamp * 1000);
            time.textContent = departureTime.toLocaleTimeString();
            destination.textContent = departure.to;
            trainType.textContent = departure.number;
            article.appendChild(time);
            category.appendChild(trainType);
            article.appendChild(category);
            article.appendChild(destination);
            departures.appendChild(article);
        })

//Add event listener on article to display the next 2 departures from the destination and the time
        departures.addEventListener('click', function (event) {
            if (true) {
                //requête pour récupéer l'heure d'arrivée à la destination
                //get the destination
                console.log(event.target);

                //get the article of the clicked element
                const article = event.target.closest('article');
                console.log(article);

                //get the destination from parentArticle
                const destination = article.querySelector('.destination').textContent;
                console.log(destination);

                //get the time
                const time = article.querySelector('.time').textContent;
                //convert time to YYYY-MM-DD hh:mm
                const timeConverted = new Date(time);
                //get departure station
                const departureStation = data.station.name;
                console.log(destination);
                console.log(time);
                console.log(departureStation);
                const req2 = new XMLHttpRequest();
                req2.open('GET', 'https://transport.opendata.ch/v1/connections?from=' + departureStation + '&to=' + destination + '&limit=1');
                req2.send();
                req2.onerror = function () {
                    console.log('Connection error');
                }
                req2.onload = function () {
                    //requête pour récupérer les 2 prochains départs depuis la destination et l'heure
                    if (req2.status >= 200 && req2.status < 400) {
                        const data2 = JSON.parse(req2.responseText);
                        console.log(data2);
                        //get the time arrival
                        const timeArrival = data2.connections[0].to.arrivalTimestamp;
                        console.log(timeArrival);
                        //convert time to hh:mm
                        const timeArrivalConverted = new Date(timeArrival * 1000).toLocaleTimeString();

                        const req3 = new XMLHttpRequest();
                        req3.open('GET', 'https://transport.opendata.ch/v1/stationboard?station=' + destination + '&limit=2' + '&datetime=' + timeArrivalConverted);
                        req3.send();
                        console.log('https://transport.opendata.ch/v1/stationboard?station=' + destination + '&limit=2' + '&datetime=' + timeArrivalConverted);
                        req3.onerror = function () {
                            console.log('Connection error');
                        }
                        req3.onload = function () {
                            if (req3.status >= 200 && req3.status < 400) {
                                const data3 = JSON.parse(req3.responseText);
                                console.log(data3);
                                //Create a temp div on top of the board to display the next 2 departures
                                const tempDiv = document.createElement('div');
                                tempDiv.classList.add('temp-div');
                                tempDiv.style.display = 'flex';
                                tempDiv.style.flexDirection = 'column';
                                tempDiv.style.position = 'absolute';
                                tempDiv.style.top = '0';
                                tempDiv.style.left = '0';
                                tempDiv.style.width = '100%';
                                tempDiv.style.height = '100%';
                                tempDiv.style.backgroundColor = 'white';
                                tempDiv.style.zIndex = '100';
                                tempDiv.style.justifyContent = 'center';
                                tempDiv.style.alignItems = 'center';
                                tempDiv.style.padding = '20px';
                                tempDiv.style.boxSizing = 'border-box';
                                tempDiv.style.border = '1px solid black';
                                tempDiv.style.borderRadius = '5px';
                                tempDiv.style.boxShadow = '0 0 10px 0 rgba(0,0,0,0.5)';
                                tempDiv.style.fontSize = '1.5rem';
                                tempDiv.style.fontWeight = 'bold';
                                tempDiv.style.color = 'black';
                                tempDiv.style.textAlign = 'center';
                                tempDiv.style.cursor = 'pointer';
                                tempDiv.style.transition = 'all 0.3s ease-in-out';
                                tempDiv.style.opacity = '0';
                                tempDiv.style.transform = 'translateY(-100%)';
                                //put next 2 departures in the temp div
                                const nextDepartures = data3.stationboard;
                                nextDepartures.forEach(function (nextDeparture) {
                                    const article = document.createElement('article');
                                    const category = document.createElement('div');
                                    const time = document.createElement('div');
                                    const destination = document.createElement('div');
                                    const trainType = document.createElement('div');
                                    category.classList.add('category');
                                    category.style.display = 'flex';
                                    trainType.classList.add('train-type');
                                    trainType.style.display = 'flex';
                                    time.classList.add('time');
                                    destination.classList.add('destination');

                                    category.setAttribute('data-category', nextDeparture.category);

                                    category.textContent = nextDeparture.category;
                                    const departureTime = new Date(nextDeparture.stop.departureTimestamp * 1000);
                                    time.textContent = departureTime.toLocaleTimeString();
                                    destination.textContent = nextDeparture.to;
                                    trainType.textContent = nextDeparture.number;
                                    article.appendChild(time);
                                    category.appendChild(trainType);
                                    article.appendChild(category);
                                    article.appendChild(destination);
                                    departures.appendChild(article);
                                });
                                tempDiv.addEventListener('click', function () {
                                    tempDiv.style.opacity = '0';
                                    tempDiv.style.transform = 'translateY(-100%)';
                                    tempDiv.style.pointerEvents = 'none';
                                }
                                )
                                departures.appendChild(tempDiv);
                                setTimeout(function () {
                                    tempDiv.style.opacity = '1';
                                    tempDiv.style.transform = 'translateY(0)';
                                    tempDiv.style.pointerEvents = 'auto';
                                }, 100);

                            }
                        }
                    }

                }
            }
            else{
                console.log('error');
            }
        });

    } else {
        console.log('Error');
    }
};

req.onerror = function () {
    console.log('Connection error');
};
