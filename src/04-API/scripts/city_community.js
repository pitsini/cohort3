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
        // const obj = { key: this.key, name: this.name, latitude: this.latitude, longitude: this.longitude, population: this.population };
        // return obj;
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

    async get_aCity() {
        data = await postData(url + 'read', this.key);
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
        // this.allCity = await this.getAllCities();
        // const allLatitude = this.allCity.map(each => each.latitude).filter(each => each !== undefined);
        // console.log(allLatitude);
        // const mostNorthernLatitude = Math.max(...allLatitude);
        // console.log(mostNorthernLatitude);
        // console.log(this.allCity);
        // const mostNorthernCities = this.allCity.filter(each => (each.latitude === mostNorthernLatitude) ? each : undefined );

        this.data = await this.getAllCities();
        const allLatitude = this.data.map(each => each.latitude).filter(each => each !== undefined);
        console.log(allLatitude);
        const mostNorthernLatitude = Math.max(...allLatitude);
        console.log(mostNorthernLatitude);
        console.log(this.data);
        const mostNorthernCities = this.data.filter(each => (each.latitude === mostNorthernLatitude) ? each : undefined);

        console.log(mostNorthernCities);
        return mostNorthernCities;
    }

    async getMostSouthern() {
        this.data = await this.getAllCities();
        const allLatitude = this.data.map(each => each.latitude).filter(each => each !== undefined);
        const mostSouthernLatitude = Math.min(...allLatitude);
        console.log(mostSouthernLatitude);
        const mostSouthernCities = this.data.filter(each => (each.latitude === mostSouthernLatitude) ? each : undefined );

        console.log(mostSouthernCities);
        return mostSouthernCities;

        // this.allCity = await this.getAllCities();
        // const allLatitude = this.allCity.map(each => each.latitude);
        // const mostSouthernLatitude = Math.min(...allLatitude);
        // const mostSouthernCities = this.allCity.filter(each => each.latitude === mostSouthernLatitude);
        // return mostSouthernCities;
    }

    async getPopulation() {
        this.data = await this.getAllCities();

        const allPop = this.data.map(each => each.population).filter(each => each !== undefined);
        console.log(allPop);
        const total = allPop.reduce((acc, population) => acc + population);
        console.log(total);
        // let total = 0;
        // for (const eachCity of this.allCity) {
        //     console.log(eachCity.population);
        //     console.log(total);
        //     total += eachCity.population;
        // }


        console.log(total);
        return total;
    }

    async createCity(key, name, latitude, longitude, population) {
        const newCity = new City(key, name, latitude, longitude, population);
        this.allCity.push(newCity);
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
        console.log("obj.name" + obj.name);
        const newCityArr = this.allCity.filter(eachCity => eachCity.name != obj.name);
        this.allCity = newCityArr.slice();

        console.log(this.allCity);
        return this.data;
    }

    async clearCommunity() {
        this.data = await postData(this.url + 'clear');
        return this.data;
    }

    async getAllCities() {
        // this.data = await postData(this.url + 'all');
        // this.allCity = this.data;
        this.data = await postData(this.url + 'all');
        // this.data = this.allCity;
        return this.data;
    }

    async setCountKey() {
        this.data = await postData(this.url + 'add', { key: 0, countKey: 0 });
        return this.data;
    }

    async updateCountKey(newCountKey) {
        this.data = await postData(this.url + 'update', { key: 0, countKey: newCountKey });
        return this.data;
    }

    // async get_aCity(keyObj) {
    //     this.data = await postData(this.url + 'read', keyObj);        
    //     return this.data;
    // }

    // async update_aCity(obj) {
    //     this.data = await postData(this.url + 'update', obj);
    //     return this.data;
        
    // }

    // async getHightestKey() {
    //     this.allCity = await this.getAllCities();
    //     // console.log(this.allCity);

    //     const allKey = this.allCity.map(each => each.key);
        
    //     let mostHighestKey;
    //     switch (true) {
    //         case (allKey.length !== 0):
    //             mostHighestKey = Math.max(...allKey);
    //             break;
    //         default:
    //             mostHighestKey = 0;
    //             break;
    //     }
    //     // console.log(mostHighestKey);
    //     return mostHighestKey;

    //     // const maxObj = this.allCity.reduce((prev, current) => (prev.latitude > current.latitude) ? prev : current);
    //     // console.log(maxObj);
    // }
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