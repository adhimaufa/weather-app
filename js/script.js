window.addEventListener('load',()=>{
    let longitude;
    let latitude;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureValue = document.querySelector('.temperature');
    const temperatureUnit = document.querySelector('.temperature-unit')
    const proxy = "https://cors-anywhere.herokuapp.com/" ;
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/" ;
            const API = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${latitude},${longitude}`;
            
            fetch(API)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const{temperature,icon,summary} = data.currently;
                    //set DOM
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                    let celcius = (temperature - 32) * (5 / 9);
                
                    temperatureValue.addEventListener('click', () => {
                        if(temperatureUnit.textContent === "F"){
                            temperatureUnit.textContent = "C";
                            temperatureDegree.textContent = Math.floor(celcius);
                        }else{
                            temperatureUnit.textContent = "F";
                            temperatureDegree.textContent = temperature;
                        }
                    });

                    setIcon(icon,document.querySelector('.weather-icon'));    
                });
            

        });
    }


    let temperatureDescriptionKdr = document.querySelector('.temperature-description-kediri');
    let temperatureDegreeKdr = document.querySelector('.temperature-degree-kediri');
    let temperatureDescriptionSby = document.querySelector('.temperature-description-sby');
    let temperatureDegreeSby = document.querySelector('.temperature-degree-sby');
    let temperatureDescriptionMlg = document.querySelector('.temperature-description-mlg');
    let temperatureDegreeMlg = document.querySelector('.temperature-degree-mlg');
    let temperatureValue1 = document.querySelector('.temperature-sby');
    let temperatureValue2 = document.querySelector('.temperature-kdr');
    let temperatureValue3 = document.querySelector('.temperature-mlg');
    const temperatureUnitKdr = document.querySelector('.temperature-unit-kdr');
    const temperatureUnitSby = document.querySelector('.temperature-unit-sby');
    const temperatureUnitMlg = document.querySelector('.temperature-unit-mlg')

    const APIKDR = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/-7.822840,112.011864`;
    fetch (APIKDR)
        .then(response =>{
            return response.json()
        })
        .then(data => {
            console.log(data);
            const{temperature,icon,summary} = data.currently;
            temperatureDegreeKdr.textContent = temperature;
            temperatureDescriptionKdr.textContent = summary;
            
            let celcius = (temperature - 32) * (5 / 9);

            temperatureValue2.addEventListener('click', () => {
                if(temperatureUnitKdr.textContent === "F"){
                    temperatureUnitKdr.textContent = "C";
                    temperatureDegreeKdr.textContent = Math.floor(celcius);
                }else{
                    temperatureUnitKdr.textContent = "F";
                    temperatureDegreeKdr.textContent = temperature;
                }
            });
            
            setIcon1(icon,document.querySelector('.weather-icon-kdr'));    
        })

    

    const APISBY = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/-7.2574719,112.7520883`;
    fetch (APISBY)
        .then(response =>{
            return response.json()
        })
        .then(data => {
            console.log(data);
            const{temperature,icon,summary} = data.currently;
            temperatureDegreeSby.textContent = temperature;
            temperatureDescriptionSby.textContent = summary;
            
            let celcius = (temperature - 32) * (5 / 9);
            
            temperatureValue1.addEventListener('click', () => {
                if(temperatureUnitSby.textContent === "F"){
                    temperatureUnitSby.textContent = "C";
                    temperatureDegreeSby.textContent = Math.floor(celcius);
                }else{
                    temperatureUnitSby.textContent = "F";
                    temperatureDegreeSby.textContent = temperature;
                }
            });

            setIcon1(icon,document.querySelector('.weather-icon-sby'));
        })

    const APIMLG = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/-7.983908,112.621391`;
    fetch (APIMLG)
        .then(response =>{
            return response.json()
        })
        .then(data => {
            console.log(data);
            const{temperature,icon,summary} = data.currently;
            temperatureDegreeMlg.textContent = temperature;
            temperatureDescriptionMlg.textContent = summary;

            let celcius = (temperature - 32) * (5 / 9);

            temperatureValue3.addEventListener('click', () => {
                if(temperatureUnitMlg.textContent === "F"){
                    temperatureUnitMlg.textContent = "C";
                    temperatureDegreeMlg.textContent = Math.floor(celcius);
                }else{
                    temperatureUnitMlg.textContent = "F";
                    temperatureDegreeMlg.textContent = temperature;
                }
            });

            setIcon1(icon,document.querySelector('.weather-icon-mlg'));
        })

    function setIcon1(icon,iconID){
        const skycons = new Skycons({"color" : "rgb(47,150,163)"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
    
    function setIcon(icon,iconID){
        const skycons = new Skycons({"color" : "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});