import { City, Community, functions } from './city_community.js'
let data, dataCommunity, currentKey;
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
            let newName, newLat, newLong, newPop; 
            if (cityName.value !== "" && latitude.value !== "" && longitude.value !== "" && population.value !== "") {
                newName = cityName.value;
                newLat = Number(latitude.value);
                newLong = Number(longitude.value);
                newPop = Number(population.value);
                dataCommunity = await community.getAllCities();
                // console.log("CountKey = " + data[0].countKey);
                const newCountKey = dataCommunity[0].countKey+1;
                data = await community.createCity(Number(newCountKey), newName, newLat, newLong, newPop);

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
                newDiv.setAttribute("data-key", newCountKey);
                bigShowArea.appendChild(newDiv);
                currentKey = newCountKey;


                // console.log(data);
                // // show name and balance
                // const lastIndex = controller.allAccounts.length - 1;                
                // document.getElementsByClassName("showAccName")[lastIndex].textContent = controller.allAccounts[lastIndex].accountName;
                // document.getElementsByClassName("showBalance")[lastIndex].textContent = controller.allAccounts[lastIndex].balance.toFixed(2);

                // document.getElementsByClassName("showCityName")[newCountKey-1].textContent = community.allCity[newCountKey-1].name;
                // document.getElementsByClassName("showLatitude")[newCountKey-1].textContent = community.allCity[newCountKey-1].latitude;
                // document.getElementsByClassName("showLongitude")[newCountKey-1].textContent = community.allCity[newCountKey-1].longitude;
                // document.getElementsByClassName("showPopulation")[newCountKey-1].textContent = community.allCity[newCountKey-1].population;

                document.getElementsByClassName("showCityName")[newCountKey - 1].textContent = newName;
                document.getElementsByClassName("showLatitude")[newCountKey - 1].textContent = newLat;
                document.getElementsByClassName("showLongitude")[newCountKey - 1].textContent = newLong;
                document.getElementsByClassName("showPopulation")[newCountKey - 1].textContent = newPop;


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

                // bigActivity.style.visibility = "hidden";
                // functionsArea.style.visibility = "visible";


                // unhighlight in show area
                for (let i = 0; i < bigShowArea.children.length; i++) {
                    bigShowArea.children[i].style.backgroundColor = "";
                }

                // highlight background
                newDiv.style.backgroundColor = "rgb(230, 230, 230)";

                // showing 3 buttons and the selected account area
                bigActivity.style.visibility = "visible";
                functionsArea.style.visibility = "visible";

                // update account detail
                cityTxt.textContent = newName;
                // cityTxt.textContent = currentCityName.textContent;
                latitudeTxt.textContent = newLat;
                // latitudeTxt.textContent = currentLatitude.textContent;
                longitudeTxt.textContent = newLong;
                // longitudeTxt.textContent = currentLongitude.textContent;
                populationTxt.textContent = newPop;


                dataCommunity = await community.getAllCities();
            } else {
                resultArea1.textContent = "Please fill up all information.";
            };
            break;
    }
    resultArea2.textContent = "";
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

            currentKey = event.target.parentElement.getAttribute("data-key");
            // reset pointer
            // pointer = Array.prototype.slice.call(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);

            //clear result content
            resultArea1.textContent = "";
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

            currentKey = event.target.getAttribute("data-key");
            // reset pointer
            // pointer = Array.prototype.slice.call(event.target.parentElement.children).indexOf(event.target);
            resultArea1.textContent = "";
            break;

        case "removeAccount":
            // get index of current account
            // pointer = Array.prototype.slice.call(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);

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


mostNorthern.addEventListener('click', (async (event) => {

    // data = await community.updateCountKey(newCountKey);  
    data = await community.getMostNorthern();
    // console.log(data);
    console.log(data.length);
    switch (true) {
        case (data.length === 1):
            resultArea2.textContent = 'The northernmost city is ' + data[0].name + ' (Latitude = ' + data[0].latitude + ")";
            break;    
        case (data.length > 1):
            const city = data.map(each => each.name);
            console.log(city);
            resultArea2.textContent = 'The northernmost cities are ' + city + ' (Latitude = ' + data[0].latitude + ")";
            break;    
        default:
            resultArea2.textContent = "There is no northernmost city in our database."
            break;
    }    
}));

mostSouthern.addEventListener('click', ( async (event) => {
    // showResult.textContent = 'The hightest value is $' + controller.checkHighest().toFixed(2);
    data = await community.getMostSouthern();
    // console.log(data);
    console.log(data.length);
    switch (true) {
        case (data.length === 1):
            resultArea2.textContent = 'The southernmost city is ' + data[0].name + " (Latitude = " + data[0].latitude + ")";
            break;
        case (data.length > 1):
            const city = data.map(each => each.name);
            console.log(city);
            resultArea2.textContent = 'The southernmost cities are ' + city + " (Latitude = " + data[0].latitude + ")";
            break;
        default:
            resultArea2.textContent = "There is no southernmost city in our database."
            break;
    }    
}));

totalPopulation.addEventListener('click', (async(event) => {
    // showResult.textContent = 'The lowest value is $' + controller.checkLowest().toFixed(2);
    data = await community.getPopulation();
    resultArea2.textContent = `Our community has a population of ${data}`;
}));


howBig.addEventListener('click', ( (event) => {
    // showResult.textContent = 'The lowest value is $' + controller.checkLowest().toFixed(2);
    // data = new.howBig();
    // console.log(community.allCity);
    // console.log(currentKey);
    // console.log(community.allCity);
    // console.log(community.allCity[currentKey-1]);
    data = community.allCity[currentKey-1].howBig();

    // console.log(dataCommunity[currentKey]);

    // console.log(dataCommunity[currentKey].howBig());
    // console.log(community.allCity[Number(currentKey)].howBig());
    resultArea3.textContent = `This is a ${data}`;
}));

