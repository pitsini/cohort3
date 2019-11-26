import functions from './daily.js'
let myArray = [
    { num: 5, str: "apples", origin: "BC" },
    { num: 7, str: "oranges", origin: "Florida" },
    { num: 2, str: "lemons", origin: "Mexico" },
    { num: 8, str: "bananas", origin: "Ecuador" },
    { num: 6, str: "avocados", origin: "Mexico" },
    { num: 4, str: "pineapple", origin: "Brazil" },
    { num: 3, str: "blueberries", origin: "Chile" },
    { num: 9, str: "pears", origin: "Oregon" },
    { num: 1, str: "cantaloupe", origin: "California" }
];

// --- Destructuring-assignment - November 26, 2019
test('Test if Destructuring assignment works?', () => {
    
    // 1) Anonymous function
    myArray.sort(function (a, b) {
        return a.num - b.num;
    });
    console.log(myArray);

    let [obj1, ...rest] = myArray;       // Array destructuring
    let { num, str, origin } = obj1;    // Object destructuring

    console.log(obj1);
    expect(num).toEqual(1);
    expect(str).toEqual('cantaloupe');
    expect(origin).toEqual('California');

    // 2) Named function
    myArray.sort(function sortFruitAlphabetic(a, b) {
        if (a.str > b.str) {
            return 1;
        } else {
            return -1;
        }
    });
    console.log(myArray);

    [obj1, ...rest] = myArray;       // Array destructuring
    ({ num, str, origin } = obj1);    // Object destructuring (Assignment without declaration)

    console.log(obj1);
    expect(num).toEqual(5);
    expect(str).toEqual('apples');
    expect(origin).toEqual('BC');

    // 3) Arrow function
    myArray.sort((a, b) => {
        if (a.origin < b.origin) {
            return 1;
        } else {
            return -1;
        }
    });
    console.log(myArray);

    [obj1, ...rest] = myArray;       // Array destructuring
    ({ num, str, origin } = obj1);    // Object destructuring (Assignment without declaration)

    console.log(obj1);
    expect(num).toEqual(9);
    expect(str).toEqual('pears');
    expect(origin).toEqual('Oregon');
});

// --- Three ways of functions - November 22, 2019
test('Test if Three ways of functions works?', () => {

    // 1) Anonymous function
    let result = functions.numberAscending(myArray);
    console.log("numberAscending = ", result);

    // 2) Named function
    result = functions.fruitAlphabetic(myArray);
    console.log("fruitAlphabetic = ", result);

    // 3) Arrow function
    result = functions.originReverseAlphabetic(myArray);
    console.log("originReverseAlphabetic = ", result);
});

const people = [
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
    { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
    { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
    { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
    { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
    { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
    { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
    { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
    { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
    { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
    { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
    { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
    { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
    { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
    { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
    { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
    { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
    { fname: "James", lname: "Kramer", province: "AB", age: 57 },
    { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
    { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
    { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
    { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
    { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
    { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
    { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
    { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
    { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
    { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
    { fname: "Luis", lname: "Price", province: "BC", age: 23 },
    { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
    { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
    { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
    { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
    { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
    { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
    { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
    { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
    { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
    { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
    { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
    { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
    { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
    { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
    { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];
// --- Callback Exercise (Part 2) - November 21, 2019
test('Test if the summaryBC_AB function works?', () => {
    let totalObj = functions.summaryBC_AB(people);
    expect(totalObj.totalCount).toEqual(22);
    expect(totalObj.totalAge).toEqual(838);
    expect(totalObj.avgAge).toEqual(38);

});

// --- Callback Exercise (Part 1) - November 8, 2019
test('Test if the Callback function works?', () => {
    let peopleArray = functions.fullnameBC_AB(people);
    
    expect(peopleArray.count).toEqual(22);
    expect(peopleArray.fullName[0]).toEqual('Alex Smith');

});

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

// --- More Array Exercises (Really) - November 6, 2019
test('Test if filterBalance function working?', () => {
    const staffArray = functions.filterBalance(data.staff);
    expect(staffArray[1].balance).toEqual(1330);
});

// --- More Array Exercises - October 29, 2019
test('loopStaff: totalBalance', () => {
    expect(functions.loopStaffTotalBalance(data.staff))
        .toEqual(3823);
});

test('loopStaff: averageBalance', () => {
    expect(functions.loopStaffAverage(data.staff))
        .toEqual(546.14);
});

// --- loopStaff each / map - October 25, 2019
test('loopStaff: forEach', () => {
    const staffEmail = functions.loopStaffForEach(data.staff);
    
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('loopStaff: map', () => {
    const staffEmail = functions.loopStaffMap(data.staff);

    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// --- loopStaff: in / of - October 24, 2019
test('loopStaff: for in', () => {
    const staffEmail = functions.loopStaffIn(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});


// ---  loopStaff: in / of - October 24, 2019
test('loopStaff: for in', () => {
    const staffEmail = functions.loopStaffIn(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('loopStaff: for of', () => {
    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// --- loopStaff - October 21, 2019
test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// --- Array slice | splice | forEach | map | reduce | filter | sort - October (16-17), 2019
test('More Array Work', () => {
    const arr = ["red", "green", "blue", "white", "black"];
    expect(functions.slice(3, arr)).toEqual(["white", "black"]);
    expect(functions.splice(2, 3, "rainbow", arr)).toEqual(["red", "green", "rainbow"]); //At position 2, remove 3 items and add the new item(s)
    expect(functions.forEach(arr)).toEqual(["red!", "green!", "rainbow!"]);
    expect(functions.map(arr)).toEqual(["red", "green", "rainbow"]);
    expect(functions.howManyCharUsingReduce(arr)).toEqual(15);
    expect(functions.arrayStartWithR("r", arr)).toEqual(["red", "rainbow"]);
    expect(functions.sort(arr)).toEqual(["green", "rainbow", "red"]);
});

// --- for | while | do while | for in | for of - October 15, 2019
test('prepare for Array work', () => {
    const arr = [1,2,3,4,5];
    expect(functions.sumFromArray(arr)).toEqual(15);
    expect(functions.doubleArray(arr)).toEqual([2,4,6,8,10]);
    expect(functions.subtractBy1(arr)).toEqual([0,1,2,3,4]);
    expect(functions.totalPrice(arr)).toEqual(15);
    expect(functions.addExclamationMark(arr)).toEqual(["$1", "$2", "$3", "$4", "$5"]);
});

// --- makeEmailObj - October 11, 2019
test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

// --- Daily Exercises - makeEmailArr - October 9, 2019
test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

// --- AssertEquals - October 7, 2019 ---
test('Compare parameter', () => {
    expect(functions.assertEquals(10, 10)).toEqual(true);
    expect(functions.assertEquals(-1, -1)).toEqual(true);   
    expect(functions.assertEquals("10", "10")).toEqual(true);
    expect(functions.assertEquals("John", "John")).toEqual(true); 
    expect(functions.assertEquals(10, -10)).toEqual(false);
    expect(functions.assertEquals("10", 10)).toEqual(false);
    expect(functions.assertEquals("John", "john")).toEqual(false);
});

