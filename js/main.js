import { GOOGLE_API_KEY } from "./apikey.js";

// HERO CLASIFICATION SLIDER

const previousSlide = document.querySelector(".ph-arrow-circle-left");
const nextSlide = document.querySelector(".ph-arrow-circle-right");

previousSlide.addEventListener("click", function () {
  document.querySelector(".container-division-a").classList.toggle("display-slide");
  document.querySelector(".container-division-b").classList.toggle("display-slide");
});

nextSlide.addEventListener("click", function () {
  document.querySelector(".container-division-a").classList.toggle("display-slide");
  document.querySelector(".container-division-b").classList.toggle("display-slide");
});

// HOW IT WORKS MENUS

const downSistema = document.querySelector(".sistema-down-arrow");
const downPuntuacion = document.querySelector(".puntuacion-down-arrow");
const downFormato = document.querySelector(".formato-down-arrow");

downSistema.addEventListener("click", function () {
  document.querySelector(".sistema").classList.toggle("show-list");
  downSistema.classList.toggle("rotate-arrow");
});

downPuntuacion.addEventListener("click", function () {
  document.querySelector(".puntuacion").classList.toggle("show-list");
  downPuntuacion.classList.toggle("rotate-arrow");
});

downFormato.addEventListener("click", function () {
  document.querySelector(".formato").classList.toggle("show-list");
  downFormato.classList.toggle("rotate-arrow");
});

// MOBILE NAVIGATION
const listMenu = document.querySelector(".list-icon-header");
const closeMenu = document.querySelector(".close-icon-header");

const menuLinks = document.querySelectorAll(".main-nav-link");

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    document.querySelector(".header-container").classList.remove("show-nav-mobile-menu");
  }),
);

listMenu.addEventListener("click", function () {
  console.log("click!");
  document.querySelector(".header-container").classList.add("show-nav-mobile-menu");

  closeMenu.addEventListener("click", function () {
    console.log("click!");
    document.querySelector(".header-container").classList.remove("show-nav-mobile-menu");
  });
});

//// AUTO UPDATE YEAR ////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

// FETCH GOOGLE SHEET LOGIC AND PRINT THE CLASIFICATION

// Fetchs the data from the google sheet classification
async function getSheetData() {
  try {
    // const res = await fetch("https://docs.google.com/spreadsheets/d/1AI-Lj_R4JQWqo1ud3oWHEcnhUJtFPQCcYW_AoJbP8Mw/gviz/tq?sheet=Clasificacion");

    const res = await fetch(GOOGLE_API_KEY);

    if (!res.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await res.text();
    // Because the returned data is a messy string, this logic turns it into an object to work with
    const dataTrim = data.slice(47, -2);
    const dataToJson = JSON.parse(dataTrim);
    return dataToJson;
  } catch (error) {
    console.error(error);
  }
}

// Display the updated players info in the the clasification container
async function getPLayersData() {
  try {
    const playersApiData = await getSheetData();
    const playerRows = playersApiData.table.rows;
    // console.log(playersApiData);
    // console.log(playersApiData.table.rows.length);
    // console.log(playersApiData.table.rows[0].c[0].v);

    //This loop uses the iterationCycle = i to link to the various html #ids that have already been definied before-hand with the proper numbers,
    // so every iteration equals to each playerObject from the returned Array
    // The -1 in playersApiData.table.rows.length - 1 is not necesary but prevents an message.error in the console created by the updateMessage
    // thats happens when adding then new row in the sheet (under the clasification) that eneables to also print a small message with the update date
    // IF THERE IS ANY ERROR WITH THE LOGIC DELETE ANY EXTRA DATA IN THE GOOGLE SHEET THAT IS NOT PART OF CLASIFICATION
    for (let i = 0; i < playersApiData.table.rows.length - 1; i++) {
      let iterationCycle = i;
      let playerObject = playerRows[i].c;
      // This loop cycles between the diferent the different array elements for any player object given, and uses it along with an if statement to access each property value
      for (let i = 0; i < playerObject.length; i++) {
        let playerLeague = playersApiData.table.rows[iterationCycle].c[0].v;
        let playerPosition = playersApiData.table.rows[iterationCycle].c[1].v;
        let playerName = playersApiData.table.rows[iterationCycle].c[2].v;
        let playerPoints = playersApiData.table.rows[iterationCycle].c[3].v;

        // console.log(iterationCycle, playerObject[i].v);

        // Every iteration of the playerObject matches one the of properties we want to print on the clasification, so everytime the loops runs [i] it takes that property and print it in
        // the proper html element (document.getElementById)
        if (i === 0) {
          printPlayerLeague(iterationCycle, playerLeague);
        } else if (i === 1) {
          printPlayerPosition(iterationCycle, playerPosition);
        } else if (i === 2) {
          printPlayerName(iterationCycle, playerName);
        } else if (i === 3) {
          printPlayerPoints(iterationCycle, playerPoints);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}
getPLayersData();

// Helping functions
function printPlayerLeague(division, value) {
  document.getElementById(`player-${division}-division`).innerText = value;
}

function printPlayerPosition(position, value) {
  document.getElementById(`player-${position}-position`).innerText = value;
}

function printPlayerName(img, value) {
  document.getElementById(`player-${img}-img`).src = `img/players/${value}.png`;
}

function printPlayerPoints(points, value) {
  document.getElementById(`player-${points}-points`).innerText = value;
}

// Displays update message
// IF THERE IS ANY ERROR WITH THE LOGIC THAT FETCH AND DISPLAY THE CLASIFICATION DELETE ANY EXTRA DATA IN THE GOOGLE SHEET THAT IS NOT PART OF CLASIFICATION AND DISABLE THIS FUNCTION
async function displayUpdateMessage() {
  try {
    const playersApiData = await getSheetData();
    const updateMessage = playersApiData.table.rows[16].c[0].v;
    document.querySelector(".clasification-subtitle").innerText = updateMessage;
  } catch (error) {
    console.error(error);
  }
}
displayUpdateMessage();
