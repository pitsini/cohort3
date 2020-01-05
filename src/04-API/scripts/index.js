import { City, Community, functions } from './city_community.js'
import fetch_functions from './fetch_functions.js'

let amt, data, dataCommunity, currentKey = 0, maxIndexList, newCountKey, index;
const community = new Community();
let currentCityName, currentLatitude, currentLongitude, currentPopulation;

window.addEventListener('load', async (event) => {
    dataCommunity = await fetch_functions.getAllCities();
    if (dataCommunity.length === 0 || dataCommunity[0].countKey === undefined) {
        data = await fetch_functions.clearCommunity();
        data = await fetch_functions.reset_countKey();
        newCountKey = 0;
        if (data === 200) {
            data = community.setCountKey(newCountKey);
        }
    } else if (dataCommunity.length === 1) {
        newCountKey = dataCommunity[0].countKey;
        community.setCountKey(dataCommunity[0].countKey); // Added this line @Dec16
    } else {
        newCountKey = dataCommunity[0].countKey;
        // community.allCity.push({ key: 0, countKey: dataCommunity[0].countKey });
        community.setCountKey(dataCommunity[0].countKey);

        data = dataCommunity.filter(each => each.key !== 0);
        data.map( each => {
            const newCity = new City(each.key, each.name, each.latitude, each.longitude, each.population);
            community.allCity.push(newCity);
            let newDiv = functions.createShowArea();
            newDiv.setAttribute("data-key", each.key);

            newDiv.getElementsByClassName("showCityName")[0].textContent = each.name;
            newDiv.getElementsByClassName("showLatitude")[0].textContent = each.latitude;
            newDiv.getElementsByClassName("showLongitude")[0].textContent = each.longitude;
            newDiv.getElementsByClassName("showPopulation")[0].textContent = each.population;

            bigShowArea.appendChild(newDiv);
        });
    }
});

bigContainer.addEventListener('click', (async (event) => {
    switch (event.target.className) {
        case "createCity":
            switch (event.target.getAttribute("value")) {
                case "Create City":
                    communityDetail.style.visibility = "visible";
                    event.target.setAttribute("value", "Cancel");
                    break;
                case "Cancel":
                    communityDetail.style.visibility = "hidden";
                    event.target.setAttribute("value", "Create City");
                    resultArea1.textContent = "";
                    break;
            }
            break;

        case "addCity":
            let newName, newLat, newLong, newPop; 
            newName = cityName.value;
            newLat = Number(latitude.value);
            newLong = Number(longitude.value);
            newPop = Number(population.value);
            if (population.value < 0) {
                resultArea1.textContent = "Population can't be less than 0."
            } else if (Number.isInteger(newPop) == false) {
                resultArea1.textContent = "Population has to be integer."
            } else if (cityName.value !== "" && latitude.value !== "" && longitude.value !== "" && population.value !== "") {
                //**** dataCommunity = await fetch_functions.getAllCities();
                // data = await community.createCity(Number(newCountKey), newName, newLat, newLong, newPop);
                newCountKey += 1;
                const newCity = new City(Number(newCountKey), newName, newLat, newLong, newPop);
                data = await fetch_functions.add_aCity(newCity);
                resultArea1.textContent = (data.status === 200) ? "Successful!" : data.msg;
                switch (data.status) {
                    case 200:
                        community.createCity(newCity);
                        resultArea1.textContent = "Successful!";
                        // data = await community.updateCountKey(newCountKey);
                        data = await fetch_functions.update_countKey(newCountKey);
                        if (data.status === 200) {
                            // community.updateCountKey(newCountKey);
                            community.setCountKey(newCountKey);
                        }                        
                        break;                
                    default:
                        resultArea1.textContent = `Error! ${data.msg}`;
                        break;
                }

                communityDetail.style.visibility = "hidden";
                document.getElementsByClassName("createCity")[0].setAttribute("value", "Create City");
                let newDiv = functions.createShowArea();
                newDiv.setAttribute("data-key", newCountKey);
                bigShowArea.appendChild(newDiv);
                currentKey = newCountKey;

                maxIndexList = bigShowArea.getElementsByClassName("showArea").length;

                document.getElementsByClassName("showCityName")[maxIndexList -1 ].textContent = newName;
                document.getElementsByClassName("showLatitude")[maxIndexList-1].textContent = newLat;
                document.getElementsByClassName("showLongitude")[maxIndexList-1].textContent = newLong;
                document.getElementsByClassName("showPopulation")[maxIndexList-1].textContent = newPop;

                cityName.value = "";
                latitude.value = "";
                longitude.value = "";
                population.value = "";
                resultArea2.textContent = "";
                resultArea3Title.textContent = "";
                resultArea3.textContent = "";

                // unhighlight in show area
                for (let i = 0; i < bigShowArea.children.length; i++) {
                    bigShowArea.children[i].style.backgroundColor = "";
                }

                newDiv.style.backgroundColor = "rgb(230, 230, 230)";
                bigActivity.style.visibility = "visible";
                functionsArea.style.visibility = "visible";

                cityTxt.textContent = newName;
                latitudeTxt.textContent = newLat;
                longitudeTxt.textContent = newLong;
                populationTxt.textContent = newPop;

                //**** dataCommunity = await fetch_functions.getAllCities();

                initMap(newLat, newLong);
                index = community.allCity.findIndex((each) => each.key === Number(currentKey));
            } else {
                resultArea1.textContent = "Please fill up all information.";
            };
            break;
    }
    resultArea2.textContent = "";
}));

bigShowArea.addEventListener('click', ( async(event) => {
    switch (event.target.className) {
        case "showCityName":
        case "showLatitude":
        case "showLongitude":
        case "showPopulation":
            // unhighlight in show area
            for (let i = 0; i < bigShowArea.children.length; i++) {
                bigShowArea.children[i].style.backgroundColor = "";
            }

            // highlight background
            event.target.parentElement.style.backgroundColor = "rgb(230, 230, 230)";

            bigActivity.style.visibility = "visible";
            functionsArea.style.visibility = "visible";

            // update account detail
            currentCityName = event.target.parentElement.getElementsByClassName("showCityName")[0];
            cityTxt.textContent = currentCityName.textContent;
            currentLatitude = event.target.parentElement.getElementsByClassName("showLatitude")[0];
            latitudeTxt.textContent = currentLatitude.textContent;
            currentLongitude = event.target.parentElement.getElementsByClassName("showLongitude")[0];
            longitudeTxt.textContent = currentLongitude.textContent;
            currentPopulation = event.target.parentElement.getElementsByClassName("showPopulation")[0];
            populationTxt.textContent = currentPopulation.textContent;

            currentKey = event.target.parentElement.getAttribute("data-key");
            resultArea1.textContent = "";
            resultArea2.textContent = "";
            resultArea3Title.textContent = "";
            resultArea3.textContent = "";

            initMap(currentLatitude.textContent, currentLongitude.textContent);
            index = community.allCity.findIndex((each) => each.key === Number(currentKey));
            break;

        case "showArea":
            // unhighlight in show area
            for (let i = 0; i < bigShowArea.children.length; i++) {
                bigShowArea.children[i].style.backgroundColor = "";
            }

            event.target.style.backgroundColor = "rgb(230, 230, 230)";
            bigActivity.style.visibility = "visible";
            functionsArea.style.visibility = "visible";

            currentCityName = event.target.getElementsByClassName("showCityName")[0];
            cityTxt.textContent = currentCityName.textContent;
            currentLatitude = event.target.getElementsByClassName("showLatitude")[0];
            latitudeTxt.textContent = currentLatitude.textContent;
            currentLongitude = event.target.getElementsByClassName("showLongitude")[0];
            longitudeTxt.textContent = currentLongitude.textContent;
            currentPopulation = event.target.getElementsByClassName("showPopulation")[0];
            populationTxt.textContent = currentPopulation.textContent;

            currentKey = event.target.getAttribute("data-key");
            resultArea1.textContent = "";
            resultArea2.textContent = "";
            resultArea3Title.textContent = "";
            resultArea3.textContent = "";

            initMap(currentLatitude.textContent, currentLongitude.textContent);
            index = community.allCity.findIndex((each) => each.key === Number(currentKey));
            break;

        case "removeCity":
            currentKey = event.target.parentElement.getAttribute("data-key");
            // data = community.allCity.find((each) => Number(each.key) === Number(currentKey));
            dataCommunity = community.allCity.find( (each) => Number(each.key) === Number(currentKey));
                
            if (dataCommunity !== undefined) {
                event.target.parentElement.remove();
                // data = await community.deleteCity(data);
                data = await fetch_functions.delete_aCity(dataCommunity);
                if (data.status === 200) {
                    community.deleteCity(dataCommunity)
                } else {
                    console.log('Delete function error!')
                }
                currentKey -= 1;

                bigActivity.style.visibility = "hidden";
                functionsArea.style.visibility = "hidden";
            } else {
                resultArea1.textContent = "Something went wrong!";
            }
    };
}));

mostNorthern.addEventListener('click', (async (event) => {
    data = await fetch_functions.getAllCities();
    const mostNortherncity = community.getMostNorthern();

    switch (true) {
        case (mostNortherncity.length == 1):
            resultArea2.textContent = 'The northernmost city is ' + mostNortherncity[0].name + ' (Latitude = ' + mostNortherncity[0].latitude + ')';            
            break;    
        case (mostNortherncity.length > 1):
            console.log('2');
            const city = mostNortherncity.map(each => each.name);
            resultArea2.textContent = 'The northernmost cities are ' + city + ' (Latitude = ' + mostNortherncity[0].latitude + ')';
            break;    
        default:
            console.log('3');
            resultArea2.textContent = "There is no northernmost city in our database."
            break;
    }    
}));

mostSouthernBtn.addEventListener('click', (async (event) => {
    data = await fetch_functions.getAllCities();
    const mostSoutherncity = community.getMostSouthern();

    switch (true) {
        case (mostSoutherncity.length === 1):
            resultArea2.textContent = `The southernmost city is ${mostSoutherncity[0].name} (Latitude = ${mostSoutherncity[0].latitude})`;
            break;
        case (mostSoutherncity.length > 1):
            const city = mostSoutherncity.map(each => each.name);
            resultArea2.textContent = 'The southernmost cities are ' + city + " (Latitude = " + mostSoutherncity[0].latitude + ")";
            break;
        default:
            resultArea2.textContent = "There is no southernmost city in our database."
            break;
    }  
}));

totalPopulation.addEventListener('click', (async(event) => {
    // data = await community.getPopulation();
    data = await fetch_functions.getAllCities();
    const allPopulation = community.getPopulation();

    resultArea2.textContent = `Our community has a population of ${allPopulation}`;
}));

howBig.addEventListener('click', ((event) => {
    index = community.allCity.findIndex( (each) => each.key === Number(currentKey));
    data = community.allCity[index].howBig();
    resultArea3Title.textContent = "This is a";
    resultArea3.textContent = data;
}));

whichSphereBtn.addEventListener('click', ((event) => {
    index = community.allCity.findIndex((each) => each.key === Number(currentKey));
    data = community.allCity[index].whichSphere();
    resultArea3Title.textContent = "This city is in the";
    resultArea3.textContent = data;
}));

moveInOutBtn.addEventListener('click', (async (event) => {
    resultArea3Title.textContent = "";
    resultArea3.textContent = "";
    amt = Number(moveInOut.value);

    if (Number.isInteger(amt) == false) {
        resultArea3.textContent = "Population is not integer.";
    } else if (amt !== "") {
        index = community.allCity.findIndex((each) => each.key === Number(currentKey));
        const myCity = community.allCity[index];
        switch (choice.selectedIndex) {
            case 0:     // moved in
                if (amt > 0) {
                    // data = await community.allCity[index].movedIn(amt);
                    // data = await community.allCity[index].movedIn(amt);
                    data = await fetch_functions.update_aCity({ 
                        key: myCity.key, 
                        name: myCity.name, 
                        latitude: myCity.latitude, 
                        longitude: myCity.longitude, 
                        population: myCity.population + amt
                    });
                    
                    // community.allCity[index].movedIn(amt);
                    if (data.status === 200) {
                        myCity.movedIn(amt);
                        resultArea3.textContent = "Successful!!!";
                        populationTxt.textContent = myCity.population;
                        // document.getElementsByClassName("showPopulation")[index - 1].textContent = myCity.population;
                        // changed @dec16
                        console.log('index', index);
                        document.getElementsByClassName("showPopulation")[index - 1].textContent = myCity.population;
                        moveInOut.value = "";
                    } else {
                        resultArea3.textContent = "Error!!!";
                    }
                } else if (amt <= 0) {
                    resultArea3.textContent = "The amount can't be or less than zero";
                } else {
                    resultArea3.textContent = "The amount can't be blank.";
                }
                break;

            case 1:     // move out
                if (amt > 0) {
                    if (myCity.population === 0) {
                        resultArea3.textContent = "There is no population in this city.";
                    } else if (myCity.population < amt) {
                        resultArea3.textContent = "Moved out people can't be more than population.";
                    } else {
                        // data = await community.allCity[index].movedOut(amt);
                        data = await fetch_functions.update_aCity({
                            key: myCity.key,
                            name: myCity.name,
                            latitude: myCity.latitude,
                            longitude: myCity.longitude,
                            population: myCity.population - amt
                        });

                        if (data.status === 200) {
                            myCity.movedOut(amt);
                            resultArea3.textContent = "Successful!!!";
                            populationTxt.textContent = myCity.population;
                            document.getElementsByClassName("showPopulation")[index - 1].textContent = myCity.population;
                            moveInOut.value = "";
                        } else {
                            resultArea3.textContent = "Error!!!";
                        }
                    }
                } else if (amt <= 0) {
                    resultArea3.textContent = "The amount can't be or lese than zero";
                } else {
                    resultArea3.textContent = "The amount can't be blank.";
                }
                break;
        }
    } else {
        resultArea3.textContent = "Please fill in amount.";
    }
}));

// Initialize and add the map
function initMap(latNum, longNum) {
    // The location of Uluru 
    var uluru = { lat: Number(latNum), lng: Number(longNum) };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 9, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}