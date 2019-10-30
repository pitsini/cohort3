import { functions, Account, AccountController } from './account'

function createAccounts(controller) {
    controller.addAccount('checking', 50);
    controller.addAccount('saving', 500);
    controller.addAccount('house saving', 100);
    controller.addAccount('education saving', 300);
}

// ========== 130A - Account ==========
test('Account - deposit, withdraw, balance', () => {
    const newAccount = new Account('checkingAccount', 25);
    expect(newAccount.checkBalance()).toEqual(25);

    newAccount.deposit(10);
    expect(newAccount.checkBalance()).toEqual(35);

    newAccount.withdraw(30);
    expect(newAccount.checkBalance()).toEqual(5);
});

// ========== 130C - Multiple Account ==========
test('Add Account', () => {
    const controller = new AccountController();

    // we should have no account
    expect(controller.allAccounts.length).toEqual(0);    
    controller.addAccount('checking', 50);

    // we should have 1 account
    expect(controller.allAccounts.length).toEqual(1);
    controller.addAccount('saving', 100);

    // we should have 2 accounts
    expect(controller.allAccounts.length).toEqual(2);
});

test('Remove Account', () => {
    const controller = new AccountController();
    createAccounts(controller);     // creating 4 accounts to use

    // the 3rd account(index = 2) should be 'house saving' account
    expect(controller.allAccounts[2].accountName).toEqual('house saving');
    controller.removeAccount(2);

    // the 3rd account should not be 'house saving' account
    expect(controller.allAccounts[2].accountName).not.toEqual('house saving');
});

test('Total Balance', () => {
    const controller = new AccountController();
    createAccounts(controller);     // creating 4 accounts to use

    expect(controller.totalBalance()).toEqual(950);
});

test('Check Highest Value', () => {
    const controller = new AccountController();
    createAccounts(controller);     // creating 4 accounts to use

    expect(controller.checkHighest()).toEqual(500);
});

test('Check Lowest Value', () => {    
    const controller = new AccountController();
    createAccounts(controller);     // creating 4 accounts to use

    expect(controller.checkLowest()).toEqual(50);
});

// ========== 130C - extra functions ==========

test('Create new div', () => {
    const newDiv = functions.createShowArea();
    expect(newDiv.childElementCount).toEqual(3);
});

test('round 2 digits', () => {
    expect(functions.round2Digit(5.8958)).toBeCloseTo(5.90);
});