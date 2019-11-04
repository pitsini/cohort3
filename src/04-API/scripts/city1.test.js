import { City, Controller } from './city'

const newCity = new City('Calgary', 51.05, -114.05, 5000);

test('show function', () => {
    expect(newCity.show()).toEqual("City: Calgary | Latitude: 51.05 | Longtitude: -114.05 | Population: 5000");
});

test('movedIn function', () => {
    newCity.movedIn(100);
    expect(newCity.population).toEqual(5100);
});

test('movedOut function', () => {
    newCity.movedOut(4000);
    expect(newCity.population).toEqual(1100);
});

test('howBig function', () => {
    expect(newCity.howBig()).toEqual("Town");
});

test('whichSphere function', () => {
    expect(newCity.whichSphere()).toEqual("Northern Hemisphere");
});

// ---- Controller ----
function createCities(controller) {
    controller.createCity('Calgary', 51.05, -114.05, 5000);
    controller.createCity('Edmonton', 53.55, -113.49, 20000);
    controller.createCity('Red Deer', 52.28, -113.81, 1000);
}

test('Get Most Northern / Southern', () => {
    const controller = new Controller();
    createCities(controller);

    const NorthernArr = controller.getMostNorthern();
    expect(NorthernArr.length).toEqual(1);
    expect(NorthernArr[0].name).toEqual("Edmonton");

    const SouthernArr = controller.getMostSouthern();
    expect(SouthernArr.length).toEqual(1);
    expect(SouthernArr[0].name).toEqual("Calgary");

    expect(controller.getPopulation()).toEqual(26000);
});

test('Create City', () => {
    const controller = new Controller();

    expect(controller.allCity.length).toEqual(0);
    controller.createCity('Calgary', 51.05, -114.05, 5000);
    expect(controller.allCity.length).toEqual(1);
});

test('Delete City', () => {
    const controller = new Controller();
    createCities(controller);

    expect(controller.allCity[0].name).toEqual("Calgary");
    controller.deleteCity('Calgary');
    expect(controller.allCity[0].name).not.toEqual("Calgary");
});