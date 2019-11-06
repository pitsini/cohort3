import functions from './daily.js'

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

