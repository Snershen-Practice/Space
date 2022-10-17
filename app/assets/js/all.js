// const { resolveInclude } = require("ejs");

// nav 頁面狀態
window.addEventListener("load", function () {
  const navItem = document.querySelectorAll("nav a");
  const page = document.querySelector("main");
  console.log(page);
  navItem.forEach((i) => {
    if (
      page.getAttribute("data-page") === "home" &&
      i.getAttribute("data-pageName") === "Home"
    ) {
      i.classList.add("active");
    } else if (
      page.getAttribute("data-page") === "destination" &&
      i.getAttribute("data-pageName") === "Destination"
    ) {
      i.classList.add("active");
    } else if (
      page.getAttribute("data-page") === "crew" &&
      i.getAttribute("data-pageName") === "Crew"
    ) {
      i.classList.add("active");
    } else if (
      page.getAttribute("data-page") === "technology" &&
      i.getAttribute("data-pageName") === "Technology"
    ) {
      i.classList.add("active");
    }
  });
});

//漢堡選單
const ham_menu = document.querySelector(".ham-menu");
const nav = document.querySelector("nav");
ham_menu.addEventListener("click", (e) => {
  e.preventDefault();
  ham_menu.classList.toggle("ham-menu-close");
  nav.classList.toggle("d-block");
});

//Slider
const outlineSlider = document.querySelectorAll(".btn-outline");
const tabSlider = document.querySelectorAll(".tab-item");
const dottedSlider = document.querySelectorAll(".dotted-item");
//planet
const distance = document.querySelector("#distance");
const time = document.querySelector("#time");
//title
const img = document.querySelector("#img");
const title = document.querySelector("#title");
const paragraph = document.querySelector("#paragraph");
//crew
const role = document.querySelector("#role");

//更改圖片
function changeImg(data) {
  img.setAttribute("data-img", "");
  img.setAttribute("data-img", data);
}

//更改文字
function changeContent(titleContent, paragraphContent) {
  title.innerText = titleContent;
  paragraph.innerText = paragraphContent;
}

function changePlanet(distanceContent, timeContent) {
  distance.innerText = distanceContent;
  time.innerText = timeContent;
}
function changeRole(roleContent) {
  role.innerText = roleContent;
}

outlineSlider.forEach((i) =>
  i.addEventListener("click", (e) => {
    outlineSlider.forEach((i) => {
      i.classList.remove("active");
    });
    i.classList.add("active");
    if (e.target.innerText === "1") {
      changeImg("technology-img-1");
      changeContent(
        "Launch vehicle",
        "A launch vehicle or carrier rocket is a rocket-propelled vehicleused to carry a payload from Earth's surface to space, usually toEarth orbit or beyond. Our WEB-X carrier rocket is the most powerfulin operation. Standing 150 metres tall, it's quite an awe-inspiringsight on the launch pad!"
      );
    } else if (e.target.innerText === "2") {
      changeImg("technology-img-2");
      changeContent(
        "SPACEPORT",
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
      );
    } else if (e.target.innerText === "3") {
      changeImg("technology-img-3");
      changeContent(
        "PACE CAPSULE",
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
      );
    }
  })
);

tabSlider.forEach((i) =>
  i.addEventListener("click", (e) => {
    tabSlider.forEach((i) => {
      i.classList.remove("active");
    });
    i.classList.add("active");
    if (e.target.innerText === "MOON") {
      changeImg("destination-img-1");
      changeContent(
        "MOON",
        "A launch vehicle or carrier rocket is a rocket-propelled vehicleused to carry a payload from Earth's surface to space, usually toEarth orbit or beyond. Our WEB-X carrier rocket is the most powerfulin operation. Standing 150 metres tall, it's quite an awe-inspiringsight on the launch pad!"
      );
      changePlanet("384,400 km", "3 days");
    } else if (e.target.innerText === "MARS") {
      changeImg("destination-img-2");
      changeContent(
        "MARS",
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
      );
      changePlanet("225 MIL. km", "9 months");
    } else if (e.target.innerText === "EUROPA") {
      changeImg("destination-img-3");
      changeContent(
        "EUROPA",
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
      );
      changePlanet("628 MIL. km", "3 years");
    } else if (e.target.innerText === "TITAN") {
      changeImg("destination-img-4");
      changeContent(
        "TITAN",
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
      );
      changePlanet("1.6 BIL. km", "7 years");
    }
  })
);

dottedSlider.forEach((i) =>
  i.addEventListener("click", (e) => {
    dottedSlider.forEach((i) => {
      i.classList.remove("active");
    });
    i.classList.add("active");
    // console.log(e);
    // console.log(e.target.dataset.num);
    if (e.target.dataset.num === "1") {
      changeImg("crew-img-1");
      changeContent(
        "Douglas Hurley",
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      );
      changeRole("Commander");
    } else if (e.target.dataset.num === "2") {
      changeImg("crew-img-2");
      changeContent(
        "MARK SHUTTLEWORTHS",
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      );
      changeRole("PILOT");
      changeRole("Mission Specialist");
    } else if (e.target.dataset.num === "3") {
      changeImg("crew-img-3");
      changeContent(
        "Victor Glover",
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
      );
      changeRole("PILOT");
    } else if (e.target.dataset.num === "4") {
      changeImg("crew-img-4");
      changeContent(
        "Anousheh Ansari",
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
      );
      changeRole("Flight Engineer");
    }
  })
);
