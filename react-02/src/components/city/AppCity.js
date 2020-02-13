import React, { Component } from 'react'
import { City, Community, functions } from './CityPojo'
import fetch_functions from './fetch_functions.js'
import AddCity from "./AddCity";
import '../../css/city.css';
import MovenInMoveOutForm from './MoveInMoveOutForm';

export class AppCity extends Component {
    constructor() {
        super();
        this.newCountKey = 0;
        this.currentKey = 0;
        this.maxIndexList = 0;
        this.index = 0;
        this.data = '';        
        this.community = new Community();
        this.message = '';
        this.currentCityName = '';
        this.currentLatitude = '';
        this.currentLongitude  = '';
        this.currentPopulation = '';

        this.dataCommunity = '';
        this.state = {
            citiesArray: this.community.allCity,
            showCreateCityForm: false,
            createCityValue: 'Create City',
        }
    }

    visibleForm = () => {
        if (this.state.showCreateCityForm) {
            document.getElementById("communityDetail").style.visibility = 'hidden';
            this.setState({
                createCityValue: "Create City",
            });
        } else {
            document.getElementById("communityDetail").style.visibility = 'visible';
            this.setState({
                createCityValue: "Cancel",
            });
        }
        this.setState({
            showCreateCityForm: !this.state.showCreateCityForm,
        });
    }

    clickShowArea = async (event) => {

        // Clicking Remove button
        if (event.target.textContent === "Remove") {

            this.currentKey = event.target.parentElement.getAttribute("data-key");
            this.dataCommunity = this.community.allCity.find((each) => Number(each.key) === Number(this.currentKey));

            if (this.dataCommunity !== undefined) {
                event.target.parentElement.remove();
                // data = await community.deleteCity(data);
                this.data = await fetch_functions.delete_aCity(this.dataCommunity);
                if (this.data.status === 200) {
                    this.community.deleteCity(this.dataCommunity);
                    this.message = 'Successfully Deleted!'
                }
                this.currentKey -= 1;

                document.getElementById("bigActivity").style.visibility = "hidden";

                // hidden functionArea if there is no city
                if (document.getElementById("bigShowArea").childElementCount === 0) {
                    document.getElementById("functionsArea").style.visibility = "hidden";
                }

            } else {
                this.message = "Something went wrong!";
            }
            document.getElementById("resultArea1").textContent = this.message;
        
        // Highlight when you click/choose each city
        } else {
            switch (event.target.className) {
                case "showCityName":
                case "showLatitude":
                case "showLongitude":
                case "showPopulation":

                    // unhighlight in show area
                    for (let i = 0; i < document.getElementById("bigShowArea").children.length; i++) {
                        document.getElementById("bigShowArea").children[i].style.backgroundColor = "";
                        document.getElementById("bigShowArea").children[i].style.color = "white";
                    }

                    // highlight background
                    event.target.parentElement.style.backgroundColor = "rgb(214, 214, 214)";
                    event.target.parentElement.style.color = "#333";

                    document.getElementById("bigActivity").style.visibility = "visible";
                    document.getElementById("functionsArea").style.visibility = "visible";

                    // update account detail
                    this.currentCityName = event.target.parentElement.getElementsByClassName("showCityName")[0];
                    document.getElementById("cityTxt").textContent = this.currentCityName.textContent;

                    this.currentKey = event.target.parentElement.getAttribute("data-key");
                    document.getElementById("resultArea1").textContent = "";
                    document.getElementById("resultArea2").textContent = "";
                    document.getElementById("resultArea3Title").textContent = "";
                    document.getElementById("resultArea3").textContent = "";

                    this.index = this.community.allCity.findIndex((each) => each.key === Number(this.currentKey));
                    break;

                case "showArea":
                    // unhighlight in show area
                    for (let i = 0; i < document.getElementById("bigShowArea").children.length; i++) {
                        document.getElementById("bigShowArea").children[i].style.backgroundColor = "";
                        document.getElementById("bigShowArea").children[i].style.color = "white";
                    }

                    event.target.style.backgroundColor = "rgb(214, 214, 214)";
                    event.target.style.color = "#333";
                    document.getElementById("bigActivity").style.visibility = "visible";
                    document.getElementById("functionsArea").style.visibility = "visible";

                    this.currentCityName = event.target.getElementsByClassName("showCityName")[0];
                    document.getElementById("cityTxt").textContent = this.currentCityName.textContent;

                    this.currentKey = event.target.getAttribute("data-key");
                    document.getElementById("resultArea1").textContent = "";
                    document.getElementById("resultArea2").textContent = "";
                    document.getElementById("resultArea3Title").textContent = "";
                    document.getElementById("resultArea3").textContent = "";

                    this.index = this.community.allCity.findIndex((each) => each.key === Number(this.currentKey));
                    break;
                default:
                    break;
            }
        }
    }

    addCity = async (city, lat, long, population) => {
        document.getElementById("resultArea1").textContent = "Connecting..."; 

        // set state for showing adding form
        this.visibleForm();

        await this.checkServer();
        if (this.message.includes("Failed")) {
            this.message = `Connection to Server Failed! \nTry again later.`;

        } else if (this.message.includes("Successfully")) {
            //remove all child nodes
            let node = document.getElementById("bigShowArea");
            while (node.hasChildNodes()) {
                node.removeChild(node.lastChild);
            }

            await this.loadServer();

            // reset data
            this.data = '';

            if (Number(population) < 0) {
                document.getElementById('resultArea1').textContent = "Population can't be less than 0.";
            } 
            //-------------Roman-lat----------------
            else if (Number(lat) > 90) {
                document.getElementById('resultArea1').textContent = "Latitude can't be more than 90."
            } else if (Number(lat) < -90) {
                document.getElementById('resultArea1').textContent = "Latitude can't be less than -90."
            }
            else if (Number(long) > 180) {
                document.getElementById('resultArea1').textContent = "Longitude can't be more than 180."
            } else if (Number(long)  < -180) {
                document.getElementById('resultArea1').textContent = "Longitude can't be less than -180."
            }

            //---------------------------------            
            else if (Number.isInteger(Number(population)) === false) {
                document.getElementById('resultArea1').textContent = "Population has to be integer."
            } else if (city !== "" && lat !== "" && long !== "" && population !== "") {
                this.newCountKey++;
                console.log('newCountKey', this.newCountKey);
                const newCity = new City(Number(this.newCountKey), city, Number(lat), Number(long), Number(population))

                try {
                    this.data = await fetch_functions.add_aCity(newCity);         
                } catch (error) {
                    this.message = `Connection to Server Failed! \nTry again later.`;

                    document.getElementById("bigShowArea").style.visibility = "hidden";
                }
                
                switch (this.data.status) {
                    case 200:
                        this.community.createCity(newCity);
                        document.getElementById("bigShowArea").style.visibility = "visible";

                        // reset data
                        this.data = '';
                        try {
                            this.data = await fetch_functions.update_countKey(this.newCountKey);          
                        } catch (error) {
                            this.message = `Connection to Server Failed! \nTry again later.`;
                            console.log('message: ', error);
                        }


                        if (this.data.status === 200) {
                            this.community.setCountKey(this.newCountKey);
                            this.message = "Successfully Added."

                            //----------------- moved from bottom ------------
                            document.getElementById("communityDetail").style.visibility = "hidden";
                            document.getElementsByClassName("createCity")[0].setAttribute("value", "Create City");
                            let newDiv = functions.createShowArea();
                            newDiv.setAttribute("data-key", this.newCountKey);

                            // onClick
                            newDiv.onclick = this.clickShowArea;
                            newDiv.getElementsByClassName("removeCity").onclick = this.deleteCity;

                            document.getElementById("bigShowArea").appendChild(newDiv);
                            this.currentKey = this.newCountKey;

                            this.maxIndexList = document.getElementById("bigShowArea").getElementsByClassName("showArea").length;

                            document.getElementsByClassName("showCityName")[this.maxIndexList - 1].textContent = city;
                            document.getElementsByClassName("showLatitude")[this.maxIndexList - 1].textContent = lat;
                            document.getElementsByClassName("showLongitude")[this.maxIndexList - 1].textContent = long;
                            document.getElementsByClassName("showPopulation")[this.maxIndexList - 1].textContent = population;

                            document.getElementById("cityName").value = "";
                            document.getElementById("latitude").value = "";
                            document.getElementById("longitude").value = "";
                            document.getElementById("population").value = "";
                            document.getElementById("resultArea2").textContent = "";
                            document.getElementById("resultArea3Title").textContent = "";
                            document.getElementById("resultArea3").textContent = "";

                            // unhighlight in show area
                            console.log('f: ', document.getElementById("bigShowArea").children.length);
                            for (let i = 0; i < document.getElementById("bigShowArea").children.length; i++) {
                                document.getElementById("bigShowArea").children[i].style.backgroundColor = "";
                                document.getElementById("bigShowArea").children[i].style.color = "white";
                            }

                            newDiv.style.backgroundColor = "rgb(214, 214, 214)";
                            newDiv.style.color = "#333";
                            document.getElementById("bigActivity").style.visibility = "visible";
                            document.getElementById("functionsArea").style.visibility = "visible";
                            document.getElementById("cityTxt").textContent = city;
                            this.index = this.community.allCity.findIndex((each) => each.key === Number(this.currentKey));
                        }
                        break;
                    default:
                        break;
                }
            } else {
                this.message = "Please fill up all information.";
            };
        }

        console.log("I'm here.");
        // document.getElementById('resultArea1').textContent = this.message;
        document.getElementById("resultArea2").textContent = ""; 

    }

    loadServer = async () => {
        if (this.dataCommunity.length === 0 || this.dataCommunity[0].countKey === undefined) {
            this.data = await fetch_functions.clearCommunity();
            this.data = await fetch_functions.reset_countKey();
            this.newCountKey = 0;
            if (this.data === 200) {
                this.data = this.community.setCountKey(this.newCountKey);
            }
        } else if (this.dataCommunity.length === 1) {
            this.newCountKey = this.dataCommunity[0].countKey;
            this.community.setCountKey(this.dataCommunity[0].countKey); // Added this line @Dec16
        } else {
            // clear array
            this.community.allCity = [];
            this.newCountKey = this.dataCommunity[0].countKey;
            this.community.setCountKey(this.dataCommunity[0].countKey);

            this.data = this.dataCommunity.filter(each => each.key !== 0);
            this.data.forEach(each => {
                const newCity = new City(each.key, each.name, each.latitude, each.longitude, each.population);
                this.community.allCity.push(newCity);
                let newDiv = functions.createShowArea();

                newDiv.onclick = this.clickShowArea;
                newDiv.getElementsByClassName("removeCity").onclick = this.deleteCity;

                newDiv.setAttribute("data-key", each.key);

                newDiv.getElementsByClassName("showCityName")[0].textContent = each.name;
                newDiv.getElementsByClassName("showLatitude")[0].textContent = each.latitude;
                newDiv.getElementsByClassName("showLongitude")[0].textContent = each.longitude;
                newDiv.getElementsByClassName("showPopulation")[0].textContent = each.population;

                if (document.getElementById('bigShowArea')) {
                    document.getElementById('bigShowArea').appendChild(newDiv);
                }

                // visible functionsArea div
                document.getElementById("functionsArea").style.visibility = "visible";

            });
        }
    }

    checkServer = async () => {
        console.log("Work!");
        try {
            this.dataCommunity = await fetch_functions.getAllCities();
            this.message = `Successfully Connect to Server!`;
            
        } catch (error) {
            this.message = `Connection to Server Failed! \nTry again later.`;
            console.log('message: ', error);
        }
        if (document.getElementById("resultArea1"))
            document.getElementById("resultArea1").textContent = this.message;
    }
    mostSouthern = async () => {
        console.log("south!");
        this.data = await fetch_functions.getAllCities();
        const mostSoutherncity = this.community.getMostSouthern();

        switch (true) {
            case (mostSoutherncity.length === 1):
                document.getElementById("resultArea2").textContent = `The southernmost city is ${mostSoutherncity[0].name} (Latitude = ${mostSoutherncity[0].latitude})`;
                break;
            case (mostSoutherncity.length > 1):
                const city = mostSoutherncity.map(each => each.name);
                document.getElementById("resultArea2").textContent = 'The southernmost cities are ' + city + " (Latitude = " + mostSoutherncity[0].latitude + ")";
                break;
            default:
                document.getElementById("resultArea2").textContent = "There is no southernmost city in our database."
                break;
        }  
    }

    mostNorthern = async () => {

        this.data = await fetch_functions.getAllCities();
        const mostNortherncity = this.community.getMostNorthern();

        switch (true) {
            case (mostNortherncity.length === 1):
                document.getElementById("resultArea2").textContent = 'The northernmost city is ' + mostNortherncity[0].name + ' (Latitude = ' + mostNortherncity[0].latitude + ')';
                break;
            case (mostNortherncity.length > 1):
                const city = mostNortherncity.map(each => each.name);
                document.getElementById("resultArea2").textContent = 'The northernmost cities are ' + city + ' (Latitude = ' + mostNortherncity[0].latitude + ')';
                break;
            default:
                document.getElementById("resultArea2").textContent = "There is no northernmost city in our database."
                break;
        }  
    }
    
    checkPopulation = async () => {
        this.data = await fetch_functions.getAllCities();
        const allPopulation = this.community.getPopulation(this.data);
        document.getElementById("resultArea2").textContent = `Our community has a population of ${allPopulation}`;
    }

    howBig = () => {
        this.index = this.community.allCity.findIndex((each) => each.key === Number(this.currentKey));
        this.data = this.community.allCity[this.index].howBig();
        document.getElementById("resultArea3Title").textContent = "This is a";
        document.getElementById("resultArea3").textContent = this.data;
    }

    whichSphere = () => {
        this.index = this.community.allCity.findIndex((each) => each.key === Number(this.currentKey));
        this.data = this.community.allCity[this.index].whichSphere();
        document.getElementById("resultArea3Title").textContent = "This city is in the";
        document.getElementById("resultArea3").textContent = this.data;
    }

    async componentDidMount() {
        document.getElementById("resultArea1").textContent = "Connecting..."; 
        await this.checkServer();
        await this.loadServer();       
    }

    moveInMoveOut = async (activityType, amount) => {
        document.getElementById("resultArea1").textContent = '';
        document.getElementById("resultArea3").textContent = 'Connecting...';
        amount = Number(amount);

        if (Number.isInteger(amount) === false) {
            document.getElementById("resultArea3").textContent = "Population is not integer.";
        } else if (amount !== "") {
            this.index = this.community.allCity.findIndex((each) => each.key === Number(this.currentKey));
            const myCity = this.community.allCity[this.index];
            switch (activityType) {
                case 'moveIn':
                        if (amount > 0) {
                            // reset data
                            this.data = '';
                            try {
                                this.data = await fetch_functions.update_aCity({
                                    key: myCity.key,
                                    name: myCity.name,
                                    latitude: myCity.latitude,
                                    longitude: myCity.longitude,
                                    population: myCity.population + amount
                                });
                                if (this.data.status === 200) {
                                    myCity.movedIn(amount);
                                    document.getElementById("resultArea3").textContent = "Move In Successful!";
                                    console.log('index', this.index);
                                    document.getElementsByClassName("showPopulation")[this.index - 1].textContent = myCity.population;
                                } else {
                                    document.getElementById("resultArea1").textContent = `Connection to Server Failed! \nTry again later.`;
                                      document.getElementById("bigActivity").style.visibility = "hidden";
                                    document.getElementById("bigShowArea").style.visibility = "hidden";
                                }           
                            } catch (error) {
                                document.getElementById("resultArea1").textContent = `Connection to Server Failed! \nTry again later.`;
                                console.log('message: ', error);

                                document.getElementById("bigActivity").style.visibility = "hidden";
                                document.getElementById("bigShowArea").style.visibility = "hidden";
                            }
                        } else if (amount <= 0) {
                            document.getElementById("resultArea3").textContent = "Amount can't be or less than zero";
                        } else {
                            document.getElementById("resultArea3").textContent = "The amount can't be blank.";
                        }
                    
                    break;
                case 'movedOut':
                    console.log("move out!")
                    if (amount > 0) {
                        // reset data
                        this.data = '';
                        try {
                            if (myCity.population === 0) {
                                document.getElementById("resultArea3").textContent = "There is no population in this city.";
                            } else if (myCity.population < amount) {
                                document.getElementById("resultArea3").textContent = "Moved out people can't be more than population.";
                            } else {
                                this.data = await fetch_functions.update_aCity({
                                    key: myCity.key,
                                    name: myCity.name,
                                    latitude: myCity.latitude,
                                    longitude: myCity.longitude,
                                    population: myCity.population - amount
                                });

                                if (this.data.status === 200) {
                                    myCity.movedOut(amount);
                                    document.getElementById("resultArea3").textContent = "Move Out Successful!!!";
                                    document.getElementsByClassName("showPopulation")[this.index - 1].textContent = myCity.population;
                                } else {
                                    document.getElementById("resultArea3").textContent = "Error!!!";
                                }
                            }            
                        } catch (error) {
                            document.getElementById("resultArea3").textContent = `Connection to Server Failed! \nTry again later.`;
                            console.log('message: ', error);
                        }
                    } else if (amount <= 0) {
                        document.getElementById("resultArea3").textContent = "Amount can't be or less than zero";
                    } else {
                        document.getElementById("resultArea3").textContent = "The amount can't be blank.";
                    }
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        return (
            <div id="bigContainer">
                <div className="container" id="communityArea">
                    <div id="heading">
                        <div><h3>Welcome to our community!</h3></div>
                        <div id="resultArea1"></div>
                        <input type="submit" value={this.state.createCityValue} className="createCity" onClick={this.visibleForm} />
                    </div>

                    <div id="outter_Detail">
                        <hr/>
                        <AddCity addCity={this.addCity} />
                        <hr/>
                        <div className="titleText">
                            <span className="border titleTxt">&nbsp;&nbsp;&nbsp;&nbsp;City</span>
                            <span className="border titleTxt">Latitude</span>
                            <span className="border titleTxt">Longitude</span>
                            <span className="border titleTxt">Population</span>
                        </div>
                    </div>
                    <div id="bigShowArea"></div>
                    <div className="container" id="functionsArea">
                        <input type="submit" value="Most Northern" id="mostNorthern" onClick={this.mostNorthern} />
                        <input type="submit" value="Most Southern" id="mostSouthern" onClick={this.mostSouthern} />
                        <input type="submit" value="Check Population" id="totalPopulation" onClick={this.checkPopulation} />
                    </div>
                    <div id="resultArea2"></div>
                </div>
                <div id="city">
                    <div className="container" id="bigActivity">
                        <div>
                            <div>City Name: <span className="yellow_text" id="cityTxt" /></div>
                        </div>
                        <hr/>
                        <div id="flex_center">
                            <div className="activity">
                                <div className="center" id="resultArea3Title"></div>
                                <div className="center" id="resultArea3"></div>
                                <div className="center">
                                    <input type="submit" value="How Big?" id="howBig" onClick={this.howBig} />
                                    <input type="submit" value="Which Hemisphere?" id="whichSphereBtn" onClick={this.whichSphere} />
                                </div>
                                <hr/>
                                <div className="border center">
                                    <MovenInMoveOutForm activities={this.moveInMoveOut} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}