const url = 'http://localhost:5000/';
let data;
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

    async movedIn(number) {
        this.population += number;
        data = await this.update_aCity(this);
        return data;
    }

    async movedOut(number) {
        this.population -= number;
        data = await this.update_aCity(this);
        return data;
    } 

    async get_aCity(key) {
        data = await postData(url + 'read', key);
        return data;
    }

    async update_aCity(obj) {
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
            return "Southern Hemisphere";
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
        this.data = await this.getAllCities();
        const allLatitude = this.data.map(each => each.latitude).filter(each => each !== undefined);
        const mostNorthernLatitude = Math.max(...allLatitude);
        const mostNorthernCities = this.data.filter(each => (each.latitude === mostNorthernLatitude) ? each : undefined);
        return mostNorthernCities;
    }

    async getMostSouthern() {
        this.data = await this.getAllCities();
        const allLatitude = this.data.map(each => each.latitude).filter(each => each !== undefined);
        const mostSouthernLatitude = Math.min(...allLatitude);
        const mostSouthernCities = this.data.filter(each => (each.latitude === mostSouthernLatitude) ? each : undefined );
        return mostSouthernCities;
    }

    async getPopulation() {
        this.data = await this.getAllCities();
        const allPop = this.data.map(each => each.population).filter(each => each !== undefined);
        const total = allPop.reduce((acc, population) => acc + population);
        return total;
    }

    async createCity(key, name, latitude, longitude, population) {
        const newCity = new City(key, name, latitude, longitude, population);
        this.data = await postData(this.url + 'add', newCity);
        if (this.data.status === 200) {
            this.allCity.push(newCity);
        }
        return this.data;
    }

    async deleteCity(obj) {
        this.data = await postData(this.url + 'delete', obj);
        const newCityArr = this.allCity.filter(eachCity => eachCity.name != obj.name);
        this.allCity = newCityArr.slice();
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

    async setCountKey() {
        this.data = await postData(this.url + 'add', { key: 0, countKey: 0 });
        if (this.data.status === 200) {
            this.allCity.push({ key: 0, countKey: 0 });
        }
        return this.data;
    }

    async updateCountKey(newCountKey) {
        this.data = await postData(this.url + 'update', { key: 0, countKey: newCountKey });
        if (this.data.status === 200) {
            console.log(this.allCity.length);
            console.log(this.allCity);
            this.allCity.forEach( each => {
                if (each.key === 0) {
                    each.countKey = newCountKey;
                }
            });
        }
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

const functions = {
    createShowArea: () => {
        let parentDiv = document.createElement("div");
        parentDiv.className = "showArea";

        // create showAccName div
        let childDiv1 = document.createElement("div");
        childDiv1.className = "showCityName";
        parentDiv.appendChild(childDiv1);

        // create showLatitude div
        let childDiv2 = document.createElement("div");
        childDiv2.className = "showLatitude";
        parentDiv.appendChild(childDiv2);

        // create showLongitude div
        let childDiv3 = document.createElement("div");
        childDiv3.className = "showLongitude";
        parentDiv.appendChild(childDiv3);

        // create showPopulation div
        let childDiv4 = document.createElement("div");
        childDiv4.className = "showPopulation";
        parentDiv.appendChild(childDiv4);

        // create "Remove" button
        let newRemoveBtn = document.createElement("button");
        newRemoveBtn.className = "removeCity";
        let removeBtnContent = document.createTextNode("Remove");

        newRemoveBtn.appendChild(removeBtnContent);
        parentDiv.appendChild(newRemoveBtn);
        return parentDiv
    }
};
export { City, Community, functions }