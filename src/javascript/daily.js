/*
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
const functions = {
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
functions.assertEquals("a", "b");
functions.assertEquals("a", "a");
functions.assertEquals(1, 2);
functions.assertEquals(2, 2);
functions.assertEquals("2", 2);
functions.assertEquals("This value", "This value");