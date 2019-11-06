const url = 'http://localhost:5000/';
let data;
class City {
    // static url = 'http://localhost:5000/';
    // static data;
    
    constructor(key, name, latitude, longitude, population) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        
    }

    show() {
        return `City: ${this.name} | Latitude: ${this.latitude} | Longtitude: ${this.longitude} | Population: ${this.population}`;
        // const obj = { key: this.key, name: this.name, latitude: this.latitude, longitude: this.longitude, population: this.population };
        // return obj;
    }

    async movedIn(number) {
        this.population += number;
        data = await this.update_City(this);
        return data;
    }

    async movedOut(number) {
        this.population -= number;
        data = await this.update_City(this);
        return data;
    } 

    async get_City() {
        data = await postData(url + 'read', this.key);
        return data;
    }

    async update_City(obj) {
        data = await postData(url + 'update', obj);
        return data;

    }

    howBig() {
        let result;
        switch (true) {
            case (this.population > 100000):
                result = "City";
                break;
            case (this.population > 20000):
                result = "Large town";
                break;
            case (this.population > 1000):
                result = "Town";
                break;
            case (this.population > 100):
                result = "Village";
                break;
            case (this.population >= 1):
                result = "Hamlet";
                break;
            default:
                result = "No one live here!";
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

class Community {
    
    constructor() {
        this.allCity = [];
        this.url = 'http://localhost:5000/';
        this.data;
    }

    async getMostNorthern() {
        this.allCity = await this.getAllCities();
        // console.log(this.allCity);

        const allLatitude = this.allCity.map(each => each.latitude);
        const mostNorthernLatitude = Math.max(...allLatitude);
        const mostNorthernCities = this.allCity.filter(each => each.latitude === mostNorthernLatitude);
        return mostNorthernCities;

        // const maxObj = this.allCity.reduce((prev, current) => (prev.latitude > current.latitude) ? prev : current);
        // console.log(maxObj);
    }

    async getMostSouthern() {
        this.allCity = await this.getAllCities();

        const allLatitude = this.allCity.map(each => each.latitude);
        const mostSouthernLatitude = Math.min(...allLatitude);
        const mostSouthernCities = this.allCity.filter(each => each.latitude === mostSouthernLatitude);
        return mostSouthernCities;
    }

    async getPopulation() {
        this.allCity = await this.getAllCities();

        let total = 0;
        for (const eachCity of this.allCity) {
            total += eachCity.population;
        }
        return total;
    }

    async createCity(key, name, latitude, longitude, population) {
        const newCity = new City(key, name, latitude, longitude, population);
        // this.allCity.push(newCity);
        console.log(newCity);
        // console.log(newCity.show());
        this.data = await postData(this.url + 'add', newCity);
        return this.data;
    }

    // async createCity(obj) {
    //     const newCity = new City(obj.key, obj.name, obj.latitude, obj.longitude, obj.population);
    //     // this.allCity.push(newCity);

    //     this.data = await postData(this.url + 'add', newCity);
    //     return this.data;
    // }

    async deleteCity(obj) {
        // const newCityArr = this.allCity.filter(eachCity => eachCity.name != selectedCity);
        // this.allCity = newCityArr.slice();

        this.data = await postData(this.url + 'delete', obj);
        return this.data;
    }

    async clearCommunity() {
        this.data = await postData(this.url + 'clear');
        return this.data;
    }

    async getAllCities() {
        this.data = await postData(this.url + 'all');
        return this.data;
    }

    // async get_City(keyObj) {
    //     this.data = await postData(this.url + 'read', keyObj);        
    //     return this.data;
    // }

    // async update_City(obj) {
    //     this.data = await postData(this.url + 'update', obj);
    //     return this.data;
        
    // }

    async getHightestKey() {
        this.allCity = await this.getAllCities();
        // console.log(this.allCity);

        const allKey = this.allCity.map(each => each.key);
        
        let mostHighestKey;
        switch (true) {
            case (allKey.length !== 0):
                mostHighestKey = Math.max(...allKey);
                break;
            default:
                mostHighestKey = 0;
                break;
        }
        // console.log(mostHighestKey);
        return mostHighestKey;

        // const maxObj = this.allCity.reduce((prev, current) => (prev.latitude > current.latitude) ? prev : current);
        // console.log(maxObj);
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
export { City, Community }