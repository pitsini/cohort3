import functions from './fetch'

const data = [
    { "name": "Lise", "surname": "Lemaire", "gender": "female", "region": "Belgium" }, { "name": "Rebeca", "surname": "Răceanu", "gender": "female", "region": "Romania" }, { "name": "Eremia", "surname": "Neamțu", "gender": "male", "region": "Romania" }, { "name": "Noemi", "surname": "Brâncuși", "gender": "female", "region": "Romania" }, { "name": "Rune", "surname": "Eriksen", "gender": "male", "region": "Norway" }, { "name": "Victor", "surname": "Maas", "gender": "male", "region": "Netherlands" }, { "name": "Maja", "surname": "Izetbegović", "gender": "female", "region": "Bosnia and Herzegovina" }, { "name": "Ηγήσιππος", "surname": "Μακρής", "gender": "male", "region": "Greece" }, { "name": "Vibhushan", "surname": "Tandon", "gender": "male", "region": "Nepal" }, { "name": "Sorina", "surname": "Cupșa", "gender": "female", "region": "Romania" }
]

test('Get First Name', () => {
    expect(functions.getFirstName(data)).toEqual("Lise");
});

test('Get All First Name', () => {
    const allFirstName = ["Lise", "Rebeca", "Eremia", "Noemi", "Rune", "Victor", "Maja", "Ηγήσιππος", "Vibhushan", "Sorina"];
    expect(functions.getAllFirstNames(data)).toEqual(allFirstName);
});
