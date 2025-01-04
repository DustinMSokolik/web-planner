let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".cal-dates");
const currentDay = document.querySelector("#current-md");
const navIcons = document.querySelectorAll(".cal-nav span");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Generates calendar
const manipulate = () => {
    // Gets first day of the month
    let firstDay = new Date(year, month, 1).getDay();
    // Gets the last date of the month
    let lastDate = new Date(year, month + 1, 0).getDate();
    // Gets the last day of the month
    let lastDay = new Date(year, month, lastDate).getDay();
    // Gets the last date of the previous month
    let lastMonthDate = new Date(year, month, 0).getDate();

    // Stores the generated HTML for the calendar
    let lit = "";

    // Loop to add the last dates of the previous month
    for (let i = firstDay; i > 0; i--) {
        lit += `<li class="inactive">${lastMonthDate - i + 1}</li>`;
    }

    // Loop that adds the dates of the current month
    for (let i = 1; i <= lastDate; i++) {
        // Check if the current date is today
        let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active" : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }

    // Loop to add the first dates of the next month
    for (let i = lastDay; i < 6; i++) {
        lit += `<li class="inactive">${i - lastDay + 1}</li>`;
    }

    // Update the text of the current date element with the formatted current month and year
    currentDay.innerText = `${months[month]} ${year}`;

    // Update the HTML of the dates element with the generated calendar
    day.innerHTML = lit;
}

// Initialize calendar
manipulate();

// Attach a click event listener to each icon
navIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // When an icon is clicked, adjust the month
        if (icon.id === "cal-prev-btn") {
            month--;
            if (month < 0) {
                month = 11; // December
                year--;
            }
        } else if (icon.id === "cal-next-btn") {
            month++;
            if (month > 11) {
                month = 0; // January
                year++;
            }
        }

        // Call the manipulate function to update the calendar display
        manipulate();
    });
});

//weather scripts
/*
const apiKey = "e3e938bc516fdcf96cd5b260275dad2f";
const searchBar = document.querySelector("#search-bar");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather() {
    var zipCode = document.querySelector(".search input").value;
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=" + zipCode + ",us&appid=" + apiKey + "";
    const response = await fetch(apiUrl);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " mph";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
};

searchBtn.addEventListener("click" , ()=> {
    checkWeather();
});

searchBar.addEventListener("keypress" , function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchBtn.click();
    }
}); */