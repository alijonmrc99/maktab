window.onscroll = function () { changeNavbarHeight() };
const counters = document.querySelectorAll('.counter');
const changeNavbarHeight = () => {

    if (window.innerWidth >= 992)
        if (document.documentElement.scrollTop > 50) {
            document.getElementById("navbar").style.height = '66px';
        } else {
            document.getElementById("navbar").style.height = '110px';
        }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("showBtn")
    } else {
        scrollToTopBtn.classList.remove("showBtn")
    }

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
        count()
    else {
        counters.forEach(counter => {
            counter.innerHTML = '0';
        })
    }
}

// Sanagich uchun scriptlar


function count() {
    const speed = 200;
    counters.forEach(counter => {
        const counterNumber = +counter.getAttribute('count');
        const updateCount = setInterval(() => {
            const divContent = + counter.innerText;
            const incriseBy = counterNumber / speed;
            divContent < counterNumber ?
                counter.innerHTML = Math.ceil(divContent + incriseBy) :
                clearInterval(updateCount);
        }, 100)
    })
}




var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement


function scrollToTop() {
    // Scroll to top logic
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)


var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement


function scrollToTop() {
    // Scroll to top logic
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)


/* mobile menu */

const buttonToggle = document.querySelector('.toggle');

const itemMenu = buttonToggle.nextElementSibling;
buttonToggle.onclick = (e) => {

    if (!itemMenu.style.height) {
        itemMenu.style.height = 'calc(100vh - 66px)';
    }
    else {
        itemMenu.style.height = null;
    }
}



/* mobli menudagi carusel uchun stillar */

const coll = document.querySelectorAll(".collapsible");

coll.forEach(element => {
    element.onclick = () => {
        if (window.innerWidth <= 992) {
            coll.forEach(e => {
                const differentItems = e.nextElementSibling;
                if (e != element) {
                    differentItems.style.height = null;
                    e.classList.remove('press')
                }
            })

            const item = element.nextElementSibling

            if (!item.style.height) {
                item.style.height = item.scrollHeight + 'px';
                element.classList.add('press')
            } else {
                item.style.height = null;
                element.classList.remove('press')
            }
        }
    }
})


/* ob havo malumotlarini olish */
// agar foydalanuvchi geolocatsiyaga kirishga ruxsat bersa 
function succes(pos) {
    weather(pos.coords.latitude, pos.coords.longitude);
}
// agar foudalanuvchi geolocation ga ruxsat bermasa u uzbekistan uchun ma'lumot oladi

function error() {
    const UZB_LAT = 41.7075;
    const UZB_LON = 63.8491;
    weather(UZB_LAT, UZB_LON);
}


// foydalanuvchida geolocation ma'lumotlarini olish 
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(succes, error)
// } else {
//     alert('Sizda geolakatika ishlamaganligi sababli ob-havo ma\'mlumoti faqat Uzbekistan uchun ishlaydi')
// }


const APP_KEY = "aca4ffaeab37cbf4aaf1a4a5f7df281b";

const weather = async (x, y) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&units=metric&appid=${APP_KEY}`);
    const data = await response.json();
    writeWeather(data);
}

const writeWeather = (data) => {
    const temp = document.querySelector('.temp');
    const wind = document.querySelector('.wind');
    const weatherIcon = document.querySelector('.weather-icon');
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="icon">`;
    temp.innerHTML = data.main.temp;
    wind.innerHTML = data.wind.speed;
}

function Hozircha() {
    const UZB_LAT = 39.6542;
    const UZB_LON = 66.9597;
    weather(UZB_LAT, UZB_LON);
}

Hozircha()








