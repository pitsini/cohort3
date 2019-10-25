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

export default Account;
