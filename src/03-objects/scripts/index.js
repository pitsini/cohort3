import Account from './account.js'

// const bigContainer = document.getElementsByClassName("bigContainer");

bigContainer.addEventListener('click', ((event) => {
    // console.log(event);
    switch (event.target.id) {
        case "account":            
            const checkingAccount = new Account('John Doe', 25);
            showCustName.textContent = `Hi! ${checkingAccount.accountName}`;
            showBalance.textContent = `Your balance is $${checkingAccount.balance}`;
            account.setAttribute("value", "Check Balance");
            break;
        case "submit":
            console.log(event.target.id);
            break;
    }
}));