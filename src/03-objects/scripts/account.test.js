import Account from './account'

// ========== 130A - Account ==========
test('Account - deposit, withdraw, balance', () => {
    // Create an account ‘checkingAccount’ with an initial balance of $25
    const checkingAccount = new Account('John Doe', 25);

    // Check the balance to ensure we have $25
    expect(checkingAccount.balance()).toEqual(25);

    // Deposit $10
    checkingAccount.deposit(10);

    // Check the balance to ensure we have $35
    expect(checkingAccount.balance()).toEqual(35);

    // Withdraw $30
    checkingAccount.withdraw(30);

    // Check the balance to ensure we have $5
    expect(checkingAccount.balance()).toEqual(5);
});