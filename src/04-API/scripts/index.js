import { City, Community, functions } from './city_community.js'
let data, dataCommunity;
const community = new Community();
let currentCityName, currentLatitude, currentLongitude, currentPopulation;

window.addEventListener('load', async (event) => {
    data = await community.clearCommunity();
    dataCommunity = await community.getAllCities();
    if (dataCommunity.length === 0) {
        // setup usedKey in the server   
        // data = await community.createCity(0, undefined, undefined, undefined, 0);
        data = await community.setCountKey();
        
    } else if (data.length === 1) {
        // console.log("1 " + data.length); 
    }
    // console.log(data);
    // data = await community.createCity(0, "Calgary", 51.05, -114.05, 5000);
});

bigContainer.addEventListener('click', (async (event) => {
    switch (event.target.className) {

        // click create account button
        case "createCity":
            // resultArea2.textContent = "";
            switch (event.target.getAttribute("value")) {
                case "Create City":
                    communityDetail.style.visibility = "visible";
                    event.target.setAttribute("value", "Cancel");
                    break;
                case "Cancel":
                    communityDetail.style.visibility = "hidden";
                    event.target.setAttribute("value", "Create City");
                    resultArea1.textContent = "";
                    break;
            }
            break;

        // click add account button
        case "addCity":
            if (cityName.value !== "" && latitude.value !== "" && longitude.value !== "" && population.value !== "") {

                dataCommunity = await community.getAllCities();
                // console.log("CountKey = " + data[0].countKey);
                const newCountKey = dataCommunity[0].countKey+1;
                data = await community.createCity(newCountKey, cityName.value, latitude.value, longitude.value, population.value);

                // console.log(data);
                
                resultArea1.textContent = (data.status === 200) ? "Successful!" : data.msg;
                switch (data.status) {
                    case 200:
                        resultArea1.textContent = "Successful!";
                        data = await community.updateCountKey(newCountKey);                        
                        break;
                
                    default:
                        resultArea1.textContent = `Error! ${data.msg}`;
                        break;
                }

                // // hide and show div
                communityDetail.style.visibility = "hidden";
                document.getElementsByClassName("createCity")[0].setAttribute("value", "Create City");

                // // create new div
                let newDiv = functions.createShowArea();
                bigShowArea.appendChild(newDiv);
                // console.log(data);
                // // show name and balance
                // const lastIndex = controller.allAccounts.length - 1;                
                // document.getElementsByClassName("showAccName")[lastIndex].textContent = controller.allAccounts[lastIndex].accountName;
                // document.getElementsByClassName("showBalance")[lastIndex].textContent = controller.allAccounts[lastIndex].balance.toFixed(2);
                document.getElementsByClassName("showCityName")[newCountKey-1].textContent = community.allCity[newCountKey-1].name;
                document.getElementsByClassName("showLatitude")[newCountKey-1].textContent = community.allCity[newCountKey-1].latitude;
                document.getElementsByClassName("showLongitude")[newCountKey-1].textContent = community.allCity[newCountKey-1].longitude;
                document.getElementsByClassName("showPopulation")[newCountKey-1].textContent = community.allCity[newCountKey-1].population;

                // // clear value
                cityName.value = "";
                latitude.value = "";
                longitude.value = "";
                population.value = "";
                // resultArea2.textContent = "";

                // // unhighlight in show area
                // for (let i = 0; i < bigShowArea.children.length; i++) {
                //     bigShowArea.children[i].style.backgroundColor = "";
                // }

                bigActivity.style.visibility = "hidden";
                functionsArea.style.visibility = "visible";
            } else {
                resultArea1.textContent = "Please fill up all information.";
            };
            break;
    }
}));

bigShowArea.addEventListener('click', ((event) => {
    console.log(event.target.className);
    switch (event.target.className) {

        case "showCityName":
        case "showLatitude":
        case "showLongitude":
        case "showPopulation":
            // unhighlight in show area
            for (let i = 0; i < bigShowArea.children.length; i++) {
                bigShowArea.children[i].style.backgroundColor = "";
            }

            // highlight background
            event.target.parentElement.style.backgroundColor = "rgb(230, 230, 230)";

            // showing 3 buttons and the selected account area
            bigActivity.style.visibility = "visible";
            functionsArea.style.visibility = "visible";

            // update account detail
            currentCityName = event.target.parentElement.getElementsByClassName("showCityName")[0];
            cityTxt.textContent = currentCityName.textContent;
            currentLatitude = event.target.parentElement.getElementsByClassName("showLatitude")[0];
            latitudeTxt.textContent = currentLatitude.textContent;
            currentLongitude = event.target.parentElement.getElementsByClassName("showLongitude")[0];
            longitudeTxt.textContent = currentLongitude.textContent;
            currentPopulation = event.target.parentElement.getElementsByClassName("showPopulation")[0];
            populationTxt.textContent = currentPopulation.textContent;

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
            functionsArea.style.visibility = "visible";

            // update account detail
            currentCityName = event.target.getElementsByClassName("showCityName")[0];
            cityTxt.textContent = currentCityName.textContent;
            currentLatitude = event.target.getElementsByClassName("showLatitude")[0];
            latitudeTxt.textContent = currentLatitude.textContent;
            currentLongitude = event.target.getElementsByClassName("showLongitude")[0];
            longitudeTxt.textContent = currentLongitude.textContent;
            currentPopulation = event.target.getElementsByClassName("showPopulation")[0];
            populationTxt.textContent = currentPopulation.textContent;

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
            functionsArea.style.visibility = "hidden";
            showResult.textContent = "";
            break;
    };
}));



