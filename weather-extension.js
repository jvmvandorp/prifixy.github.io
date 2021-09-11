// Copyright Bram/sys-256 2021
// Distributed under the Boost Software License, Version 1.0.
// (See accompanying file LICENSE or copy at https://www.boost.org/LICENSE_1_0.txt)

//makes the function "weatherExtension", and executes it on page load
window.onload = async function weatherExtension()
{
    //tries to execute the whole script, but when it generates a error, it just skips the whole script so nothing gets shown
    try
    {
        //makes the variable "ip_api"
        const ip_api = "https://api.ipify.org?format=json";
        //fetches the users ip address
        const ip_response = await fetch(ip_api);
        //converts the ip_response to json
        const ip_data = await ip_response.json();
        //digs the ip out of the ip_data
        const ip = ip_data.ip;
        //fetches the weather data
        const weather_response = await fetch("https://api.weatherapi.com/v1/current.json?key=" + weather_api_key + "&q=" + ip);
        //converts the weather data into json
        const weather_data = await weather_response.json();
        
        //fetches the country the user is in, to dertermine if it uses fahrenheit or celcius
        var weather_country = weather_data.location.country;
        //executes if the country is the US, just like the ones below
        if (weather_country == "United States of America")
        {
            //finds the "temp_f" variable out of the weather data, just like the ones below
            var weather_temp_f = weather_data.current.temp_f;
            //puts the temperature in fahrenheit in the html, just like the ones below
            document.getElementById("temperature").textContent = weather_temp_f + "°F";
        }
        else if (weather_country == "Liberia")
        {
            var weather_temp_f = weather_data.current.temp_f;
            document.getElementById("temperature").textContent = weather_temp_f + "°F";
        }
        else if (weather_country == "Belize")
        {
            var weather_temp_f = weather_data.current.temp_f;
            document.getElementById("temperature").textContent = weather_temp_f + "°F";
        }
        else if (weather_country == "Bahamas")
        {
            var weather_temp_f = weather_data.current.temp_f;
            document.getElementById("temperature").textContent = weather_temp_f + "°F";
        }
        else if (weather_country == "Micronesia")
        {
            var weather_temp_f = weather_data.current.temp_f;
            document.getElementById("temperature").textContent = weather_temp_f + "°F";
        }
        //if the country is not one of the ones above, the country probably uses celcius, and this will get executed
        else
        {
            //finds the "temp_c" variable out of the weather data
            var weather_temp_c = weather_data.current.temp_c;
            //puts the temperature in fahrenheit in the html
            document.getElementById("temperature").textContent = weather_temp_c + "°c";
            
        }

        //fetches the place name
        var weather_place = weather_data.location.name;
        //puts the place name inside the html
        document.getElementById("place").textContent = weather_place;

        //fetches the weather icon
        var weather_logo = weather_data.current.condition.icon;
        //puts the icon inside the html
        document.getElementById("weather_logo").innerHTML = "<style>#weather-extension{background-image: url(https:" + weather_logo + ");}</style>";

        //fetches the weather text
        var weather_text = weather_data.current.condition.text;
        //puts the text inside the html
        document.getElementById("weather-text").textContent = weather_text;
    }
    //if it generates an error (for example: requests to the server are getting blocked), this will get executed, aka it does nothing (and shows nothing)
    catch{}
}
