global.fetch = require('node-fetch');
import { City, Community } from './city'


test('test that the City class works?', () => {    
    const newCity = new City(1, 'Calgary', 51.05, -114.05, 5000);
    expect(newCity.show()).toEqual("Key: 1 | City: Calgary | Latitude: 51.05 | Longtitude: -114.05 | Population: 5000");
    
    newCity.movedIn(100);
    expect(newCity.population).toEqual(5100);
    
    newCity.movedOut(4000);
    expect(newCity.population).toEqual(1100);
    
    expect(newCity.howBig()).toEqual("Town");
    const newCity1 = new City(2, 'New York', -51.05, -114.05, 900000);
    expect(newCity1.howBig()).toEqual("City");
    const newCity2 = new City(3, 'Airdrie', 51.05, -114.05, 25000);
    expect(newCity2.howBig()).toEqual("Large town");
    const newCity3 = new City(4, 'Old', 51.05, -114.05, 150);
    expect(newCity3.howBig()).toEqual("Village");
    const newCity4 = new City(5, 'Camrose', 51.05, -114.05, 50);
    expect(newCity4.howBig()).toEqual("Hamlet");
    const newCity5 = new City(6, 'Somewhere', 51.05, -114.05, 0);
    expect(newCity5.howBig()).toEqual("No one live here!");
    
    expect(newCity.whichSphere()).toEqual("Northern Hemisphere");
    expect(newCity1.whichSphere()).toEqual("Southern Hemisphere");
});

// ---- Community Class ----
let data;
const cities = [
    { key: 1, name: "Calgary", latitude: 51.05, longitude: -114.05, population: 5000 },
    { key: 2, name: "Edmonton", latitude: 53.55, longitude: -113.49, population: 20000 },
    { key: 3, name: "Red Deer", latitude: 52.28, longitude: -113.81, population: 1000 }
]

test('test that the Community class works?', async () => {

    const community = new Community();
    data = await community.clearCommunity()
    expect(data.status).toEqual(200);
    
    data = await community.createCity(cities[0]);
    expect(data.status).toEqual(200);
    data = await community.createCity(cities[1]);
    expect(data.status).toEqual(200);
    data = await community.createCity(cities[2]);
    expect(data.status).toEqual(200);

    data = await community.getAllCities();
    expect(data.status).toEqual(200);
    expect(data.length).toBe(3);

    const NorthernArr = await community.getMostNorthern();
    expect(NorthernArr.length).toEqual(1);
    expect(NorthernArr[0].name).toEqual("Edmonton");

    const SouthernArr = await community.getMostSouthern();
    expect(SouthernArr.length).toEqual(1);
    expect(SouthernArr[0].name).toEqual("Calgary");

    expect(await community.getPopulation()).toEqual(26000);
});


test('test that the fetch works?', async () => {
    
    const community = new Community();
    let data = await community.clearCommunity()
    expect(data.status).toEqual(200);

    // data = await postData(url + 'all');
    data = await community.getAllCities();
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);


    // --- add data ---
    data = await community.createCity(cities[0]);
    expect(data.status).toEqual(200);

    data = await community.getAllCities();
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Calgary");

    // add a second with the same key which should be an error
    data = await community.createCity(cities[0]);
    expect(data.status).toEqual(400);

    // add a second which should be ok
    data = await community.createCity(cities[1]);
    expect(data.status).toEqual(200);

    // --- check data ---
    data = await community.getAllCities();
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe("Edmonton");

    // --- update ----
    data = await community.get_aCity({ key: 2 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Edmonton");

    data[0].name = "Bangkok";

    data = await community.update_aCity(data[0]);
    expect(data.status).toEqual(200);

    data = await community.get_aCity({ key: 2 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Bangkok");

    data = await community.getAllCities();

    // // --- delete ---
    data = await community.deleteCity({ key: 1 });
    expect(data.status).toEqual(200);

    data = await community.get_aCity({ key: 1 });
    expect(data.status).toEqual(400);
});