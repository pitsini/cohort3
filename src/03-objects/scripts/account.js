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
    addAccount(arr, accName, amount) {
        const newAccount = new Account(accName, amount);
        arr.push(newAccount);
        return arr;
    }

    removeAccount(arr, pointer) {
        arr.splice(pointer, 1);
        return arr;
    }

    totalBalance (arr) {
        let summary = 0;
        for (const eachAccount of arr) {
            summary += eachAccount.balance;
        }
        return summary;
    }

    checkHighest(arr) {
        const balanceArr = arr.map(each => each.balance);
        const highestValue = Math.max(...balanceArr);
        return highestValue;
    }

    checkLowest(arr) {
        const balanceArr = arr.map(each => each.balance);
        const lowestValue = Math.min(...balanceArr);
        return lowestValue;
    }
}
export { Account, AccountController };
