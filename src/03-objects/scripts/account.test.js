import { Account, AccountController } from './account'

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
    let accountArray = [];
    const newAccontController = new AccountController();

    expect(accountArray.length).toEqual(0);
    accountArray = newAccontController.addAccount(accountArray, 'checking', 50);
    expect(accountArray.length).toEqual(1);
    accountArray = newAccontController.addAccount(accountArray, 'saving', 100);
    expect(accountArray.length).toEqual(2);
});

test('Remove Account', () => {
    let pointer = 2; 
    const newAccontController = new AccountController();
    let accountArray = [{ accountName: 'checking', balance: 50 },
                        { accountName: 'saving', balance: 100 },
                        { accountName: 'house saving', balance: 200 },
                        { accountName: 'education saving', balance: 300 }];
      
    accountArray = newAccontController.removeAccount(accountArray, pointer)
    expect(accountArray[2].accountName).not.toEqual('house saving');
});

test('Total Balance', () => {
    const newAccontController = new AccountController();
    let accountArray = [{ accountName: 'checking', balance: 50 }, { accountName: 'house saving', balance: 100 }];

    expect(newAccontController.totalBalance(accountArray)).toEqual(150);
});

test('Check Highest Value', () => {
    const newAccontController = new AccountController();
    let accountArray = [    { accountName: 'checking', balance: 50 }, 
                            { accountName: 'saving', balance: 500 },
                            { accountName: 'house saving', balance: 100 },
                            { accountName: 'education saving', balance: 300 } ];

    expect(newAccontController.checkHighest(accountArray)).toEqual(500);
});

test('Check Lowest Value', () => {
    const newAccontController = new AccountController();
    let accountArray = [{ accountName: 'checking', balance: 50 },
    { accountName: 'saving', balance: 500 },
    { accountName: 'house saving', balance: 100 },
    { accountName: 'education saving', balance: 300 }];

    expect(newAccontController.checkLowest(accountArray)).toEqual(50);
});