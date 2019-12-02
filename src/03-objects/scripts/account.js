class Account {
    constructor(accountName, startingBalance) {
        this.accountName = accountName;
        this.balance = startingBalance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    checkBalance() {
        return this.balance;
    }
}

class AccountController {
    constructor () {
        this.allAccounts = [];
    }

    addAccount(accName, amount) {
        const newAccount = new Account(accName, amount);
        this.allAccounts.push(newAccount);
    }

    removeAccBtn(pointer) {
        this.allAccounts.splice(pointer, 1);
    }

    totalBalance () {
        let summary = 0;
        for (const eachAccount of this.allAccounts) {
            summary += eachAccount.balance;
        }
        return summary;
    }

    checkHighest() {        
        const balanceArr = this.allAccounts.map(each => each.balance);
        const highestValue = Math.max(...balanceArr);
        return highestValue;
    }

    checkLowest() {
        const balanceArr = this.allAccounts.map(each => each.balance);
        const lowestValue = Math.min(...balanceArr);
        return lowestValue;
    }
}

const functions = {
    createShowArea: () => {
        let parentDiv = document.createElement("div");
        parentDiv.className = "showArea";

        // create showAccName div
        let childDiv1 = document.createElement("div");
        childDiv1.className = "showAccName";
        parentDiv.appendChild(childDiv1);

        // create showBalance div
        let childDiv2 = document.createElement("div");
        childDiv2.className = "showBalance";
        parentDiv.appendChild(childDiv2);

        // create "Remove" button
        let newRemoveBtn = document.createElement("button");
        newRemoveBtn.className = "removeAccBtn";
        let removeBtnContent = document.createTextNode("Remove");

        newRemoveBtn.appendChild(removeBtnContent);
        parentDiv.appendChild(newRemoveBtn);

        return parentDiv
    },

    round2Digit: (amount) => {
        return Math.round(Number(amount) * 100) / 100;
    } 
};
export { functions, Account, AccountController };
