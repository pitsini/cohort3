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

class AccountController extends Account {
    // constructor(customerName, accountNameArr, balanceArr) {
    //     super(customerName);
    //     // this.accountNameArr = [];
    //     // this.balanceArr = [];
    //     this.accountNameArr = accountNameArr;
    //     this.balanceArr = balanceArr;
    // }

    constructor() {
    }

    addAccount() {}
    removeAccount() {}
    totalBalance
}
export { Account, AccountController };
