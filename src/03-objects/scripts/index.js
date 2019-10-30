import { functions, Account, AccountController } from './account.js'
let pointer = 0;
let currentName;
let currentBalance;
let amt;
// let currentElement;
// let length;
const controller = new AccountController();

highest.addEventListener('click', ((event) => {
    alert('The hightest value is $' + controller.checkHighest());
}));

lowest.addEventListener('click', ((event) => {
    alert('The lowest value is $' + controller.checkLowest());
}));

// const bigContainer = document.getElementsByClassName("bigContainer");
activityBtn.addEventListener('click', ((event) => {
    amt = activityAmount.value;
    if (amt === "") {
        alert("Amount cannot be empty.");
    } else if (isNaN(amt)) {
        alert(`Sorry, ${amt} is not a number`);
    } else {
        amt = Number(amt);
        console.log(amt);
        // deposit
        switch (choice.selectedIndex) {
            case 0:
                if (amt > 0) {
                    controller.allAccounts[pointer].deposit(amt);
                    alert(`Successful! Your current balance is $${controller.allAccounts[pointer].balance}.`);
                    accountB.textContent = "Balance: $" + controller.allAccounts[pointer].balance;
                    activityAmount.value = "";
                    currentName.textContent = controller.allAccounts[pointer].accountName;
                    currentBalance.textContent = controller.allAccounts[pointer].balance
                } else {
                    alert("Sorry, You cannot deposit less than $0")
                }
                break;
        
            case 1:
                if (controller.allAccounts[pointer].balance < amt) {
                    alert("Sorry, You cannot withdraw less your balance")
                } else if (amt <= 0) {
                    alert("Sorry, You cannot withdraw less than $0")
                } else {
                    controller.allAccounts[pointer].withdraw(amt);
                    alert(`Successful! Your current balance is $${controller.allAccounts[pointer].balance}.`);
                    accountB.textContent = "Balance: $" + controller.allAccounts[pointer].balance;
                    activityAmount.value = "";
                    currentName.textContent = controller.allAccounts[pointer].accountName;
                    currentBalance.textContent = controller.allAccounts[pointer].balance
                }
                break;
        }
        if (choice.selectedIndex === 0) {
            
        }
    }
}));

bigShowArea.addEventListener('click', ((event) => {
    console.log(event.target.className);
    switch (event.target.className) {
        case "showBalance":
        case "showAccName":

            // unhighlight in show area
            for (let i = 0; i < bigShowArea.children.length; i++) {
                bigShowArea.children[i].style.backgroundColor = "";
            }
            event.target.parentElement.style.backgroundColor = "rgb(230, 230, 230)";

            bigActivity.style.visibility = "visible";
            lowHigh.style.visibility = "visible";
            currentName = event.target.parentElement.getElementsByClassName("showAccName")[0];
            // currentName = event.target.parentElement.getElementsByClassName("showAccName")[0].textContent;
            accountN.textContent = "Account name: " + currentName.textContent;
            
            // currentBalance = event.target.parentElement.getElementsByClassName("showBalance")[0].textContent;
            currentBalance = event.target.parentElement.getElementsByClassName("showBalance")[0];
            accountB.textContent = "Balance: $" + currentBalance.textContent;
            break;
        case "showArea":
            // unhighlight in show area
            for (let i = 0; i < bigShowArea.children.length; i++) {
                bigShowArea.children[i].style.backgroundColor = "";
            }

            // event.target.children.style.backgroundColor = "red";
            event.target.style.backgroundColor = "rgb(230, 230, 230)";

            // pointer = Array.prototype.slice.call(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);
            // event.target.parentElement.children[pointer].style.backgroundColor = "red";

            bigActivity.style.visibility = "visible";
            lowHigh.style.visibility = "visible";
            
            // currentName = event.target.getElementsByClassName("showAccName")[0].textContent;
            currentName = event.target.getElementsByClassName("showAccName")[0];
            accountN.textContent = "Account name: " + currentName.textContent;

            // currentBalance = event.target.getElementsByClassName("showBalance")[0].textContent;
            currentBalance = event.target.getElementsByClassName("showBalance")[0];
            accountB.textContent = "Balance: $" + currentBalance.textContent;
            break;
        case "removeAccount":
            console.log(event.target.parentElement.parentElement);

            // get index of current account
            pointer = Array.prototype.slice.call(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);
            
            event.target.parentElement.remove();
            console.log(controller.allAccounts);
            controller.removeAccount(pointer);
            console.log(controller.allAccounts);

            // unhighlight in show area
            for (let i = 0; i < bigShowArea.children.length; i++) {
                bigShowArea.children[i].style.backgroundColor = "";
            }
            bigActivity.style.visibility = "hidden";

            lowHigh.style.visibility = "hidden";
            break;
    };
}));
bigContainer.addEventListener('click', ((event) => {
    // console.log(event.target.className);
    // console.log(document.querySelectorAll(".removeAccount").length);
    switch (event.target.className) {
        // case ""
        case "account":
            // console.log(event.target.value);
            // console.log("hi");
            switch (event.target.getAttribute("value")) {
                case "Create Account":
                    accountDetail.style.visibility = "visible";
                    event.target.setAttribute("value", "Cancel");
                    break;
                case "Cancel":
                    accountDetail.style.visibility = "hidden";
                    event.target.setAttribute("value", "Create Account");
                    break;
            }
            break;

        case "addAccount":
            if (accountName.value !== "" && startingBalance.value !== "") {
                controller.addAccount(accountName.value, Number(startingBalance.value));
                // console.log(controller.allAccounts);
                // document.getElementsByClassName("showAccName")[0].textContent = controller.allAccounts[controller.allAccounts.length - 1].accountName;
                // document.getElementsByClassName("showBalance")[0].textContent = controller.allAccounts[controller.allAccounts.length - 1].balance;
                accountDetail.style.visibility = "hidden";
                document.getElementsByClassName("account")[0].setAttribute("value", "Create Account");

                let newDiv = functions.createShowArea();
                bigShowArea.appendChild(newDiv);

            // showCustName.appendChild(document.createElement('br'));


                const lastIndex = controller.allAccounts.length - 1;
                document.getElementsByClassName("showAccName")[lastIndex].textContent = controller.allAccounts[lastIndex].accountName;
                document.getElementsByClassName("showBalance")[lastIndex].textContent = controller.allAccounts[lastIndex].balance;

                // clear value
                accountName.value = "";
                startingBalance.value = "";
                
                // unhighlight in show area
                for (let i = 0; i < bigShowArea.children.length; i++) {
                    bigShowArea.children[i].style.backgroundColor = "";
                }
                bigActivity.style.visibility = "hidden";
                lowHigh.style.visibility = "hidden";
            } else {
                alert("Please fill in account name and starting balance.");
            };

            // console.log(accountName.value);
            // console.log(startingBalance.value);



            break;
    }
            // const checkingAccount = new Account('John Doe', 25);
            // showCustName.textContent = `${checkingAccount.accountName}`;
            // showBalance.textContent = `Your balance is $${checkingAccount.balance}`;
            // showCustName.appendChild(document.createElement('br'));
            // showCustName.appendChild(document.createTextNode(`${checkingAccount.customerName}`));
}));