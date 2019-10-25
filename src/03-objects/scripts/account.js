    class Account {
        constructor(accountName, startingBalance) {
            this.accountName = accountName;
            this.startingBalance = startingBalance;
        }

        deposit(amount) {
            this.startingBalance += amount;
        }

        withdraw(amount) {
            this.startingBalance -= amount;
        }

        balance() {            
            return this.startingBalance;
        }
    }

export default Account;
