import React from "react";

const Greetings = () => {


    let myDate = new Date();
    let hours = myDate.getHours();
    let greet;

    if(hours < 12)
        greet = "Pagi";
    else if (hours >=12 && hours <= 17)
        greet = "Siang";
    else if (hours >=17 && hours <=24)
        greet = "Malam";

        return <span>Selamat {greet}</span>
}

export default Greetings