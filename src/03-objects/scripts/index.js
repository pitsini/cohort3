import { functions, Account, AccountController } from './account.js'
let pointer = 0;
let currentName;
let currentBalance;
let amt;
const controller = new AccountController();

total.addEventListener('click', ((event) => {
    showResult.textContent = 'The total balance is $' + controller.totalBalance().toFixed(2);
}));

highest.addEventListener('click', ((event) => {
    showResult.textContent = 'The hightest value is $' + controller.checkHighest().toFixed(2);
}));

lowest.addEventListener('click', ((event) => {
    showResult.textContent = 'The lowest value is $' + controller.checkLowest().toFixed(2);
}));

activityBtn.addEventListener('click', ((event) => {
    amt = activityAmount.value;
    if (amt === "") {
        alert("Amount cannot be empty.");
    } else if (isNaN(amt)) {
        alert(`Sorry, ${amt} is not a number`);
    } else {
        amt = functions.round2Digit(Number(amt));
        console.log(amt);        

        switch (choice.selectedIndex) {
            case 0:     // deposit
                if (amt > 0) {
                    console.log("pointer: " + pointer);
                    controller.allAccounts[pointer].deposit(amt);
                    // alert(`Successful! Your current balance is $${controller.allAccounts[pointer].balance.toFixed(2)}`);
                    showResult.textContent = `Successful! Your current balance is $${controller.allAccounts[pointer].balance.toFixed(2)}`;
                    accountB.textContent = "Balance: $" + controller.allAccounts[pointer].balance.toFixed(2);
                    activityAmount.value = "";
                    currentName.textContent = controller.allAccounts[pointer].accountName;
                    currentBalance.textContent = controller.allAccounts[pointer].balance.toFixed(2);
                } else {
                    alert("Sorry, You cannot deposit less than $0")
                }
                break;
        
            case 1:     // withdraw
                if (controller.allAccounts[pointer].balance < amt) {
                    alert("Sorry, You cannot withdraw less your balance")
                } else if (amt <= 0) {
                    alert("Sorry, You cannot withdraw less than $0")
                } else {
                    console.log("pointer: " + pointer);
                    controller.allAccounts[pointer].withdraw(amt);
                    // alert(`Successful! Your current balance is $${controller.allAccounts[pointer].balance.toFixed(2)}`);
                    showResult.textContent = `Successful! Your current balance is $${controller.allAccounts[pointer].balance.toFixed(2)}`;
                    accountB.textContent = "Balance: $" + controller.allAccounts[pointer].balance.toFixed(2);
                    activityAmount.value = "";
                    currentName.textContent = controller.allAccounts[pointer].accountName;
                    currentBalance.textContent = controller.allAccounts[pointer].balance.toFixed(2);
                }
                break;
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

            // highlight background
            event.target.parentElement.style.backgroundColor = "rgb(230, 230, 230)";

            // showing 3 buttons and the selected account area
            bigActivity.style.visibility = "visible";
            lowHigh.style.visibility = "visible";

            // update account detail
            currentName = event.target.parentElement.getElementsByClassName("showAccName")[0];
            accountN.textContent = "Account name: " + currentName.textContent;            
            currentBalance = event.target.parentElement.getElementsByClassName("showBalance")[0];
            accountB.textContent = "Balance: $" + currentBalance.textContent;

            // reset pointer
            pointer = Array.prototype.slice.call(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);

            //clear result content
            showResult.textContent = "";
            break;

        case "showArea":
            // unhighlight in show area
            for (let i = 0; i < bigShowArea.children.length; i++) {
                bigShowArea.children[i].style.backgroundColor = "";
            }

            event.target.style.backgroundColor = "rgb(230, 230, 230)";

            bigActivity.style.visibility = "visible";
            lowHigh.style.visibility = "visible";
            
            currentName = event.target.getElementsByClassName("showAccName")[0];
            accountN.textContent = "Account name: " + currentName.textContent;

            currentBalance = event.target.getElementsByClassName("showBalance")[0];
            accountB.textContent = "Balance: $" + currentBalance.textContent;

            // reset pointer
            pointer = Array.prototype.slice.call(event.target.parentElement.children).indexOf(event.target);
            showResult.textContent = "";
            break;

        case "removeAccount":
            // get index of current account
            pointer = Array.prototype.slice.call(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);
            
            event.target.parentElement.remove();
            controller.removeAccount(pointer);

            // unhighlight in show area
            for (let i = 0; i < bigShowArea.children.length; i++) {
                bigShowArea.children[i].style.backgroundColor = "";
            }

            // hide div and buttons
            bigActivity.style.visibility = "hidden";
            lowHigh.style.visibility = "hidden";
            showResult.textContent = "";
            break;
    };
}));

bigContainer.addEventListener('click', ((event) => {
    switch (event.target.className) {

        // click create account button
        case "account":
            showResult.textContent = "";
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

        // click add account button
        case "addAccount":
            if (accountName.value !== "" && startingBalance.value !== "") {
                // rounding number
                const roundAmount = functions.round2Digit(Number(startingBalance.value));
                
                // create account
                controller.addAccount(accountName.value, roundAmount);

                // hide and show div
                accountDetail.style.visibility = "hidden";
                document.getElementsByClassName("account")[0].setAttribute("value", "Create Account");

                // create new div
                let newDiv = functions.createShowArea();
                bigShowArea.appendChild(newDiv);

                // show name and balance
                const lastIndex = controller.allAccounts.length - 1;
                document.getElementsByClassName("showAccName")[lastIndex].textContent = controller.allAccounts[lastIndex].accountName;
                document.getElementsByClassName("showBalance")[lastIndex].textContent = controller.allAccounts[lastIndex].balance.toFixed(2);

                // clear value
                accountName.value = "";
                startingBalance.value = "";
                showResult.textContent = "";
                
                // unhighlight in show area
                for (let i = 0; i < bigShowArea.children.length; i++) {
                    bigShowArea.children[i].style.backgroundColor = "";
                }
                
                bigActivity.style.visibility = "hidden";
                lowHigh.style.visibility = "visible";
            } else {
                alert("Please fill in account name and starting balance.");
            };
            break;
    }
}));