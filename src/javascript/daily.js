// Write the function after this comment ---
const functions = {
    // --- More Array Exercises - October 29, 2019
    loopStaffTotalBalance: (staff) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let balanceArr = [];

        balanceArr = staff.map(eachStaff => eachStaff.balance);
        return balanceArr.reduce(reducer);
    },

    loopStaffAverage: (staff) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let balanceArr = [];

        balanceArr = staff.map(eachStaff => eachStaff.balance);
        const total = balanceArr.reduce(reducer);
        const average = total / balanceArr.length;
        return Number(Number.parseFloat(average).toFixed(2));
        
    },

    // --- loopStaff each / map - October 25, 2019
    loopStaffForEach: (staff) => {
        let emailArray = [];
        let newEmail = "";

        staff.forEach(function (eachStaff) {
            newEmail = functions.makeEmailObj(eachStaff);
            emailArray.push(newEmail);
        });
        return emailArray;
    },

    loopStaffMap: (staff) => {
        let emailArray = [];
        
        emailArray = staff.map(eachStaff => functions.makeEmailObj(eachStaff));
        return emailArray;
    }, 

    // --- loopStaff: in / of - October 24, 2019
    loopStaffIn: (staff) => {
        let emailArray = [];
        let newEmail = "";

        for (const prop in staff) {
            newEmail = functions.makeEmailObj(staff[prop]);
            emailArray.push(newEmail);
        }
        return emailArray;
    },

    loopStaffOf: (staff) => {
        let emailArray = [];
        let newEmail = "";

        for (const eachStaff of staff) {
            newEmail = functions.makeEmailObj(eachStaff);
            emailArray.push(newEmail);
        }
        return emailArray;
    }, 

      // --- loopStaff - October 21, 2019
    loopStaff: (arr) => {
        const mapArray = arr.map((staff) => {
            const newArray = functions.makeEmailObj(staff);
            return newArray;
        });
        return mapArray;
    },

    // --- Prepare for Array Work - October 15, 2019    
    slice: (index, arr) => {
        return arr.slice(index);
    },

    splice: (index, replace, content, arr) => {
        arr.splice(index, replace, content);
        return arr;
    },

    forEach: (arr) => {
        let newArr = [];
        arr.forEach((item) => newArr.push(item + "!"));
        return newArr;
    },

    map: (arr) => {
        const newArr = arr.map((item) => item.replace("!", "?"));
        return newArr;
    },

    howManyCharUsingReduce: (arr) => {
        const charTotal = arr.reduce((acc, item) => acc + item.length, 0);
        return charTotal;
    },

    arrayStartWithR: (start, arr) => {
        let newArr = arr.filter(item => item[0] === start);
        return newArr;
    },
    
    sort: (arr) => {
        return arr.sort();
    },

    // --- Prepare for Array Work - October 15, 2019
    sumFromArray: (arr1) => {
        let summary = 0;
        for (let i = 1; i <= arr1.length; i++) {
            summary = summary + i;
        }
        return summary;
    },

    doubleArray: (arr2) => {
        let result = [];
        let i = 0;
        while (i < arr2.length) {
            result.push(arr2[i]*2);
            i++;
        }
        return result;
    },

    subtractBy1: (arr3) => {
        let result = [];
        let i = 0;
        do {
            result.push(arr3[i]-1);
            i++;
        }
        while (i < arr3.length);
        return result;
    },

    // for...in should not be used to iterate over an Array where the index order is important.
    totalPrice: (arr4) => {
        let sum = 0;
        for (const index in arr4) {
            sum = sum + arr4[index];
        }
        return sum;
    },

    
    addExclamationMark: (arr5) => {
        let result = [];
        for (const element of arr5) {
            result.push("$" + element);
        }
        return result;
    },

    // --- makeEmailObj - October 11, 2019
    makeEmailObj: (obj1) => {
        let lowerCaseFname = obj1.fname.toLowerCase();
        let lowerCaseLname = obj1.lname.toLowerCase();
        let email = `${lowerCaseFname}.${lowerCaseLname}@evolveu.ca`;
        return email;
    },

    // --- makeEmailArr - October 9, 2019
    makeEmailArr: (array1) => {
        return `${array1[0].toLowerCase()}.${array1[1].toLowerCase()}@evolveu.ca`;
    },

    // --- AssertEquals - October 7, 2019
    assertEquals: (var1, var2) => {
        
        if (!Object.is(var1, var2)) {
            console.log("*** the two values are not the same:");
            console.log(`p1--> ${var1}`);
            console.log(`p2--> ${var2}`);
            return false;
        } else {
            return true;
        }
    }
};

export default functions;