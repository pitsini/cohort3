import { City, Community, functions } from './city_community.js'
let amt,data, dataCommunity, currentKey=0, maxIndexList;
const community = new Community();
let currentCityName, currentLatitude, currentLongitude, currentPopulation;

window.addEventListener('load', async (event) => {
    data = await community.clearCommunity();
    dataCommunity = await community.getAllCities();
    if (dataCommunity.length === 0) {
        // setup usedKey in the server   
        // data = await community.createCity(0, undefined, undefined, undefined, 0);
        data = await community.setCountKey();
        
    } else if (dataCommunity.length === 1) {
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
            newName = cityName.value;
            newLat = Number(latitude.value);
            newLong = Number(longitude.value);
            newPop = Number(population.value);
            console.log(newPop);
            console.log(Number.isInteger(newPop));
            if (population.value < 0) {
                resultArea1.textContent = "Population can't be less than 0."
            } else if (Number.isInteger(newPop) == false) {
                resultArea1.textContent = "Population has to be integer."
            } else if (cityName.value !== "" && latitude.value !== "" && longitude.value !== "" && population.value !== "") {
                
                // newPop = Number(population.value);
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

                console.log("showArea = " + bigShowArea.getElementsByClassName("showArea").length);
                // // create new div
                let newDiv = functions.createShowArea();
                newDiv.setAttribute("data-key", newCountKey);
                bigShowArea.appendChild(newDiv);
                // currentKey = newCountKey;

                console.log("newCountKey" + newCountKey);
                console.log("currentKey" + currentKey);
                maxIndexList = bigShowArea.getElementsByClassName("showArea").length;
                currentKey = maxIndexList;
                console.log("showArea = " + bigShowArea.getElementsByClassName("showArea").length);
                // console.log(data);
                // // show name and balance
                // const lastIndex = controller.allAccounts.length - 1;                
                // document.getElementsByClassName("showAccName")[lastIndex].textContent = controller.allAccounts[lastIndex].accountName;
                // document.getElementsByClassName("showBalance")[lastIndex].textContent = controller.allAccounts[lastIndex].balance.toFixed(2);

                // document.getElementsByClassName("showCityName")[newCountKey-1].textContent = community.allCity[newCountKey-1].name;
                // document.getElementsByClassName("showLatitude")[newCountKey-1].textContent = community.allCity[newCountKey-1].latitude;
                // document.getElementsByClassName("showLongitude")[newCountKey-1].textContent = community.allCity[newCountKey-1].longitude;
                // document.getElementsByClassName("showPopulation")[newCountKey-1].textContent = community.allCity[newCountKey-1].population;

                // document.getElementsByClassName("showCityName")[newCountKey - 1].textContent = newName;
                // document.getElementsByClassName("showLatitude")[newCountKey - 1].textContent = newLat;
                // document.getElementsByClassName("showLongitude")[newCountKey - 1].textContent = newLong;
                // document.getElementsByClassName("showPopulation")[newCountKey - 1].textContent = newPop;


                document.getElementsByClassName("showCityName")[maxIndexList -1 ].textContent = newName;
                document.getElementsByClassName("showLatitude")[maxIndexList-1].textContent = newLat;
                document.getElementsByClassName("showLongitude")[maxIndexList-1].textContent = newLong;
                document.getElementsByClassName("showPopulation")[maxIndexList-1].textContent = newPop;

                // // clear value
                cityName.value = "";
                latitude.value = "";
                longitude.value = "";
                population.value = "";
                resultArea2.textContent = "";
                resultArea3Title.textContent = "";
                resultArea3.textContent = "";

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

bigShowArea.addEventListener('click', ( async(event) => {
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

        case "removeCity":
            // get index of current account
            // pointer = Array.prototype.slice.call(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);
           
            console.log(event.target.parentElement.getAttribute("data-key"));

            currentKey = event.target.parentElement.getAttribute("data-key");
            
            // console.log(community.allCity[currentKey]);
            // console.log(community.allCity[currentKey-1]);
            console.log(community.allCity);
                data = community.allCity.find( (each) => Number(each.key) === Number(currentKey));
                                

            if (data !== undefined) {
                console.log("Number(each.key) === Number(currentKey)");
                console.log(data);

                // const result = inventory.find(({ name }) => name === 'cherries');
                // // controller.removeAccount(pointer);
                // console.log(event.target);
                // data = await community.createCity(Number(newCountKey), newName, newLat, newLong, newPop);
                // community.allCity[currentKey-1]

                event.target.parentElement.remove();
                data = await community.deleteCity(data);
            } else {
                console.log("No no!!!");

            }
            currentKey -= 1;

            console.log("currentKey" + currentKey);
            // // unhighlight in show area
            // for (let i = 0; i < bigShowArea.children.length; i++) {
            //     bigShowArea.children[i].style.backgroundColor = "";
            // }

            // // hide div and buttons
            // bigActivity.style.visibility = "hidden";
            // functionsArea.style.visibility = "hidden";
            // showResult.textContent = "";
            // break;
    };
}));


mostNorthern.addEventListener('click', (async (event) => {
    resultArea2.textContent = "Hello";
    // data = await community.updateCountKey(newCountKey);  
    data = await community.getMostNorthern();
    resultArea2.textContent = "North";
    console.log(data);
    console.log(data.length);
    switch (true) {
        case (data.length == 1):
            console.log("Hey1");

            resultArea2.textContent = 'The northernmost city is ' + data[0].name + ' (Latitude = ' + data[0].latitude + ')';
            
            break;    
        case (data.length > 1):
            console.log("Hey2");
            const city = data.map(each => each.name);
            console.log(city);
            resultArea2.textContent = 'The northernmost cities are ' + city + ' (Latitude = ' + data[0].latitude + ')';
            break;    
        default:

            console.log("Hey3");
            resultArea2.textContent = "There is no northernmost city in our database."
            break;
    }    
}));

mostSouthernBtn.addEventListener('click', (async (event) => {

    console.log(community.allCity);
    // showResult.textContent = 'The hightest value is $' + controller.checkHighest().toFixed(2);
    data = await community.getMostSouthern();

    // resultArea2.textContent = "hell";
    console.log(data);
    console.log(data.length);
    switch (true) {
        case (data.length === 1):
            resultArea2.textContent = `The southernmost city is ${data[0].name} (Latitude = ${data[0].latitude})`;
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

    console.log(community.allCity);
    // resultArea2.style.visibility = "visible";
    // resultArea2.textContent = `Our community has a population of`;
}));

// mostSouthernBtn.addEventListener('click', ((event) => {
//     // showResult.textContent = 'The lowest value is $' + controller.checkLowest().toFixed(2);
//     // data = await community.getPopulation();
//     resultArea2.textContent = 'Hello';
// }));

totalPopulation.addEventListener('click', (async(event) => {
    // showResult.textContent = 'The lowest value is $' + controller.checkLowest().toFixed(2);
    data = await community.getPopulation();
    resultArea2.textContent = `Our community has a population of ${data}`;
}));


howBig.addEventListener('click', (async (event) => {
    // showResult.textContent = 'The lowest value is $' + controller.checkLowest().toFixed(2);
    // data = new.howBig();
    // console.log(community.allCity);


    console.log(currentKey);
    console.log(community.allCity);
    console.log(community.allCity[0]);
    console.log(community.allCity[1]);
    console.log(community.allCity[currentKey-1]);
    data = community.allCity[currentKey-1].howBig();

    // dataCommunity = await community.getAllCities();

    // community.allCity = await community.getAllCities();
    // console.log("run getAllCities");
    // console.log(currentKey);
    // console.log(community.allCity[0]);
    // console.log(community.allCity[1]);
    // console.log(community.allCity[currentKey]);
    // data = community.allCity[1].howBig();

    // console.log(dataCommunity[currentKey]);


    // data = await community.allCity[currentKey - 1].movedIn(amt);

    // console.log(dataCommunity[currentKey].howBig());
    // console.log(community.allCity[Number(currentKey)].howBig());
    resultArea3Title.textContent = "This is a";
    resultArea3.textContent = data;
}));

whichSphereBtn.addEventListener('click', ((event) => {
    console.log(currentKey);
    console.log(community.allCity);
    data = community.allCity[currentKey - 1].whichSphere();

    resultArea3Title.textContent = "This city is in the";
    resultArea3.textContent = data;
}));

moveInOutBtn.addEventListener('click', (async (event) => {
    resultArea3Title.textContent = "";
    resultArea3.textContent = "";

    amt = Number(moveInOut.value);
    if (Number.isInteger(amt) == false) {
        resultArea3.textContent = "Population is not integer.";
    } else if (amt !== "") {
        // amt = functions.round2Digit(Number(amt));
        console.log(amt);
        switch (choice.selectedIndex) {
            case 0:     // moved in
                if (amt > 0) {
                    console.log("currentKey: " + currentKey);
                    console.log(community.allCity[currentKey - 1]);
                    data = await community.allCity[currentKey - 1].movedIn(amt);
                    console.log(data.status);
                    console.log(community.allCity);
                    if (data.status === 200) {
                        resultArea3.textContent = "Successful!!!";
                        populationTxt.textContent = community.allCity[currentKey - 1].population;
                        console.log(currentKey);
                        console.log(document.getElementsByClassName("showPopulation")[currentKey - 1].textContent);
                        // console.log(event.target.getElementsByClassName("showPopulation")[currentKey - 1].textContent);
                        document.getElementsByClassName("showPopulation")[currentKey - 1].textContent = community.allCity[currentKey - 1].population;
                        moveInOut.value = "";
                    } else {
                        resultArea3.textContent = "Error!!!";
                    }
                    // showResult.textContent = `Successful! Your current balance is $${controller.allAccounts[pointer].balance.toFixed(2)}`;
                    // accountB.textContent = "Balance: $" + controller.allAccounts[pointer].balance.toFixed(2);
                    // activityAmount.value = "";
                    // currentName.textContent = controller.allAccounts[pointer].accountName;
                    // currentBalance.textContent = controller.allAccounts[pointer].balance.toFixed(2);
                } else if (amt < 0) {
                        resultArea3.textContent = "Amount can't be lese than 0";
                    } else {
                    resultArea3.textContent = "Amount can't be blank.";
                }
                break;

            case 1:     // move out
                if (amt > 0) {
                    if (community.allCity[currentKey - 1].population < amt) {
                        resultArea3.textContent = "Moved out people can't be more than population.";
                    } else {
                        console.log("currentKey: " + currentKey);
                        console.log(community.allCity[currentKey - 1]);
                        data = await community.allCity[currentKey - 1].movedOut(amt);
                        console.log(data.status);
                        console.log(community.allCity);
                        if (data.status === 200) {
                            resultArea3.textContent = "Successful!!!";
                            populationTxt.textContent = community.allCity[currentKey - 1].population;
                            console.log(currentKey);
                            console.log(document.getElementsByClassName("showPopulation")[currentKey - 1].textContent);
                            // console.log(event.target.getElementsByClassName("showPopulation")[currentKey - 1].textContent);
                            document.getElementsByClassName("showPopulation")[currentKey - 1].textContent = community.allCity[currentKey - 1].population;
                            moveInOut.value = "";
                        } else {
                            resultArea3.textContent = "Error!!!";
                        }
                    }
                    // showResult.textContent = `Successful! Your current balance is $${controller.allAccounts[pointer].balance.toFixed(2)}`;
                    // accountB.textContent = "Balance: $" + controller.allAccounts[pointer].balance.toFixed(2);
                    // activityAmount.value = "";
                    // currentName.textContent = controller.allAccounts[pointer].accountName;
                    // currentBalance.textContent = controller.allAccounts[pointer].balance.toFixed(2);
                } else if (amt < 0) {
                    resultArea3.textContent = "Amount can't be lese than 0";
                } else {
                    resultArea3.textContent = "Amount can't be blank.";
                }
                break;
        }
    } else {
        resultArea3.textContent = "Please fill in amount.";
    }
}));