const url = 'http://localhost:5000/';

const fetch_functions = {
    async get_aCity(key) {
        return await postData(url + 'read', key);
    },

    async update_countKey(newCountKey) {
        return await postData(url + 'update', { key: 0, countKey: newCountKey });
    },

    async reset_countKey() {
        return await postData(url + 'add', { key: 0, countKey: 0 });
    },

    async update_aCity (obj) {
        return await postData(url + 'update', obj);
    },

    async add_aCity(obj) {
        return await postData(url + 'add', obj);
    },

    async delete_aCity(obj) {
        return await postData(url + 'delete', obj);
    },
    
    async clearCommunity() {
        return await postData(url + 'clear');
    },

    async getAllCities() {
        return await postData(url + 'all');
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

export default fetch_functions
