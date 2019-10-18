// Write the function after this comment ---
const functions = {
    // --- Daily Exercises - Prepare for Array Work - October 15, 2019
    
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


    // --- Daily Exercises - Prepare for Array Work - October 15, 2019
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

    //Warning from MDN => for...in should not be used to iterate over an Array where the index order is important.
    totalPrice: (arr4) => {
        let sum = 0;
        for (const index in arr4) {
            sum = sum + arr4[index];
        }
        return sum;
    },

    //
    addExclamationMark: (arr5) => {
        let result = [];
        for (const element of arr5) {
            result.push("$" + element);
        }
        return result;
    },

    // --- Daily Exercises - makeEmailObj - October 11, 2019
    makeEmailObj: (obj1) => {
        let lowerCaseFname = obj1.fname.toLowerCase();
        let lowerCaseLname = obj1.lname.toLowerCase();
        let email = `${lowerCaseFname}.${lowerCaseLname}@evolveu.ca`;        
        return email;
    },

    // --- Daily Exercises - makeEmailArr - October 9, 2019
    makeEmailArr: (array1) => {
        return `${array1[0].toLowerCase()}.${array1[1].toLowerCase()}@evolveu.ca`;
    },

    // --- Daily Exercises - AssertEquals - October 7, 2019
    assertEquals: (var1, var2) => {
        
        if (!Object.is(var1, var2)) {
            console.log("*** the two values are not the same:");
            console.log(`p1--> ${var1}`);
            console.log(`p2--> ${var2}`);
            return false;
        } else true;
    }
};

export default functions;