import { City, Community } from './city_community.js'
let data;
const community = new Community();

window.addEventListener('load', async (event) => {
    data = await community.clearCommunity();
});

bigContainer.addEventListener('click', (async (event) => {
    switch (event.target.className) {

        // click create account button
        case "createCity":
            showResult.textContent = "";
            switch (event.target.getAttribute("value")) {
                case "Create City":
                    communityDetail.style.visibility = "visible";
                    event.target.setAttribute("value", "Cancel");
                    break;
                case "Cancel":
                    communityDetail.style.visibility = "hidden";
                    event.target.setAttribute("value", "Create City");
                    break;
            }
            break;

        // click add account button
        case "addCity":
            if (cityName.value !== "" && latitude.value !== "" && longitude.value !== "" && population.value !== "") {

                // rounding number
                // const roundAmount = functions.round2Digit(Number(startingBalance.value));

                // create account
                // controller.addAccount(accountName.value, roundAmount);

                // get the highest key
                const highestKey = await community.getHightestKey();
                
                // const city = [
                //     { key: 1, name: "Calgary", latitude: 51.05, longitude: -114.05, population: 5000 }
                // ];

                // // hide and show div
                // communityDetail.style.visibility = "hidden";
                // document.getElementsByClassName("account")[0].setAttribute("value", "Create Account");

                // // create new div
                // let newDiv = functions.createShowArea();
                // bigShowArea.appendChild(newDiv);

                // // show name and balance
                // const lastIndex = controller.allAccounts.length - 1;
                // document.getElementsByClassName("showAccName")[lastIndex].textContent = controller.allAccounts[lastIndex].accountName;
                // document.getElementsByClassName("showBalance")[lastIndex].textContent = controller.allAccounts[lastIndex].balance.toFixed(2);

                // // clear value
                // accountName.value = "";
                // startingBalance.value = "";
                // showResult.textContent = "";

                // // unhighlight in show area
                // for (let i = 0; i < bigShowArea.children.length; i++) {
                //     bigShowArea.children[i].style.backgroundColor = "";
                // }

                // bigActivity.style.visibility = "hidden";
                // lowHigh.style.visibility = "visible";
            } else {
                alert("Please fill in account name and starting balance.");
            };
            break;
    }
}));

