// Write the function after this comment ---
const functions = {
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
        if (Object.is(var1,var2)) {
            return true;
        } else {
            console.log("*** the two values are not the same:");
            console.log(`p1--> ${var1}`);
            console.log(`p2--> ${var2}`);
            return false;
        }
    }
};

export default functions;

// and before this comment ---
// functions.assertEquals("a", "b");
// functions.assertEquals("a", "a");
// functions.assertEquals(1, 2);
// functions.assertEquals(2, 2);
// functions.assertEquals("2", 2);
// functions.assertEquals("This value", "This value");