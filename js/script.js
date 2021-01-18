window.addEventListener('load',()=>{
    let longitude;
    let latitude;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureValue = document.querySelector('.temperature');
    const temperatureUnit = document.querySelector('.temperature-unit')


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

  

    function setIcon(icon,iconID){
        const skycons = new Skycons({color : "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});