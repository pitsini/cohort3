global.fetch = require('node-fetch');



class City {
    constructor(key, name, latitude, longitude, population) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {  
        return `City: ${this.name} | Latitude: ${this.latitude} | Longtitude: ${this.longitude} | Population: ${this.population}`;
    }

    movedIn(number) {
        this.population += number;
    }

    movedOut(number) {
        this.population -= number;
    }

    howBig() {
        let result;
        if (this.population > 100000) {
            result = "City";
        } else if (this.population > 20000) {
            result = "Large town";
        } else if (this.population > 1000) {
            result = "Town";
        } else if (this.population > 100) {
            result = "Village";
        } else if (this.population >= 1) {
            result = "Hamlet";
        } else {
            result = "No one live here!"
        }
        return result;
    }

    whichSphere() {
        if (this.latitude > 0) {
            return "Northern Hemisphere";
        } else {
            return "Southern Hemisphere"
        }
    }
}

class Controller {

    
    constructor() {
        this.allCity = [];
        this.url = 'http://localhost:5000/';
        this.data;
    }

    getMostNorthern() {
        const allLatitude = this.allCity.map(each => each.latitude);
        const mostNorthernLatitude = Math.max(...allLatitude);
        const mostNorthernCities = this.allCity.filter(each => each.latitude === mostNorthernLatitude);
        return mostNorthernCities;

        // const maxObj = this.allCity.reduce((prev, current) => (prev.latitude > current.latitude) ? prev : current);
        // console.log(maxObj);
    }

    getMostSouthern() {
        const allLatitude = this.allCity.map(each => each.latitude);
        const mostSouthernLatitude = Math.min(...allLatitude);
        const mostSouthernCities = this.allCity.filter(each => each.latitude === mostSouthernLatitude);
        return mostSouthernCities;
    }
    getPopulation() {
        let total = 0;
        for (const eachCity of this.allCity) {
            total += eachCity.population;
        }
        return total;
    }

    async createCity(obj) {
        const newCity = new City(obj.key, obj.name, obj.latitude, obj.longitude, obj.population);
        // this.allCity.push(newCity);

        this.data = await postData(this.url + 'add', newCity);
        return this.data;
    }

    async deleteCity(obj) {
        const newCityArr = this.allCity.filter(eachCity => eachCity.name != selectedCity);
        // this.allCity = newCityArr.slice();

        this.data = await postData(this.url + 'delete', obj);
        return this.data;
    }

    async clearCity() {
        this.data = await postData(this.url + 'clear');
        return this.data;
    }

    async checkCity() {
        this.data = await postData(this.url + 'all');
        return this.data;
    }

    async getCity(keyObj) {
        this.data = await postData(this.url + 'read', keyObj);        
        return this.data;
    }

    async updateCity(keyObj) {
        this.data = await postData(this.url + 'update', keyObj);
        return this.data;
    }
    
}
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
}
export { City, Controller }