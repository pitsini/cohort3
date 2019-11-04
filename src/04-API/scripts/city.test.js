global.fetch = require('node-fetch');
import { City, Controller } from './city'



test('test that the fetch works?', async () => {

    // test('test that the fetch works?', async () => {
    const cities = [
        { key: 1, name: "Calgary", latitude: 51.05, longitude: -114.05, population: 5000 },
        { key: 2, name: "Edmonton", latitude: 53.55, longitude: -113.49, population: 20000 },
        { key: 2, name: "Red Deer", latitude: 52.28, longitude: -113.81, population: 1000 }
    ]

    // Check that the server is running and clear any data
    // let data = await postData(url + 'clear');
    
    const controller = new Controller();
    let data = await controller.clearCity()
    expect(data.status).toEqual(200);

    // data = await postData(url + 'all');
    data = await controller.checkCity();
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);


    // --- add data ---
    // data = await postData(url + 'add', cities[0]);
    data = await controller.createCity(cities[0]);
    expect(data.status).toEqual(200);

    // data = await postData(url + 'all');
    data = await controller.checkCity();
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Calgary");

    // // add a second with the same key which should be an error
    // data = await postData(url + 'add', clients[0]);
    data = await controller.createCity(cities[0]);
    expect(data.status).toEqual(400);

    // // add a second which should be ok
    // data = await postData(url + 'add', clients[1]);
    data = await controller.createCity(cities[1]);
    expect(data.status).toEqual(200);

    // // --- check data ---
    // data = await postData(url + 'all');
    data = await controller.checkCity();
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe("Edmonton");

    // // --- update ----
    // data = await postData(url + 'read', { key: 1 });
    data = await controller.getCity({ key: 1 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Calgary");

    // -----------------------------------------------
    // data = await postData(url + 'update', { key: 1, name: "George" });
    // data = await controller.updateCity({ key: 1, name: "George" });
    // expect(data.status).toEqual(200);

    // // data = await postData(url + 'read', { key: 1 });
    // data = await controller.getCity({ key: 1 });
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("George");

    // -----------------------------------------------

    data = await controller.checkCity();
    console.log(data);
    // console.log(data[1]);


    // // --- delete ---
    // data = await postData(url + 'delete', { key: 1 });
    data = await controller.deleteCity({ key: 1 });
    expect(data.status).toEqual(200);


    data = await controller.checkCity();
    console.log(data);
    // console.log(data[1]);

    // data = await postData(url + 'read', { key: 1 });
    // expect(data.status).toEqual(400);
});