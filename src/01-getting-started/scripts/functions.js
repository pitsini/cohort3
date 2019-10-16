
const functions = {
    
    size: (num) => {
        if (num < 0) return "Negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num > 100) return "extra large";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    //calculator
    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },

    // ========== arrays ========== 
    isNumber: (text) => {
        if (isNaN(Number(text)) === true) {
            return false;
        } else {
            return true;
        }
    },

    addArray: (number, arr) => {
        arr.push(number);
        return arr;
    },

    // ========== Dictionaries ==========
    searchProv: (key, obj) => {
        let result;
        Object.entries(obj).map( value => {
            if (value[0] === key.toLowerCase()) {
                result = value[1];
            }
        });
        if (result === undefined) {
            result = `${key} can't be found in dictionary.`;
        }
        return result;
    }

};

export default functions;
