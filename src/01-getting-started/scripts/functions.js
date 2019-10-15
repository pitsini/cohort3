
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

    // ========== Tax ========== 
    tax: (income) => {
        let line2, line4, line6, taxTotal;
        if (income <= 47630) {
            line2 = 0;
            line4 = 15;
            line6 = 0;
        } else if (income > 47630 && income <= 95259) {
            line2 = 47630;
            line4 = 20.5;
            line6 = 7144.5;
        } else if (income > 95259 && income <= 147667) {
            line2 = 95259;
            line4 = 26;
            line6 = 16908.445;
        } else if (income > 147667 && income <= 210371) {
            line2 = 147667;
            line4 = 29;
            line6 = 30534.525;
        } else if (income > 210371) {
            line2 = 210371;
            line4 = 33;
            line6 = 48718.685;
        }
        
        taxTotal = ((income-line2)*(line4/100))+line6;
        return taxTotal.toFixed(2);    
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
    }
};

export default functions;
