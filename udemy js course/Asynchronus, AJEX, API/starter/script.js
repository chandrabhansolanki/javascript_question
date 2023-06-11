'use strict';
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderData = function (data) {
  const curr = Object.keys(data.currencies);
  const lang = Object.keys(data.languages);
  console.log(lang);
  const html = `
      <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 10000000
            ).toFixed(1)} crore</p>
            <p class="country__row"><span>🗣️</span>${lang.map(
              lan => data.languages[lan]
            )}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[curr].name
            } </p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};*/
/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country
    renderData(data);

    // Get neighbour country
    
    // console.log(data.borders);
    const [neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) {
      return;
    }
    // AJAX call country (2)
    const request2 = new XMLHttpRequest();
    console.log(request2);
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      // console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderData(data2);
    });
  });
};

getCountryAndNeighbour('india');
*/

// how to use modern method to fetch data with function method
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderData(data[0]);
    });
};
getCountryData('india');*/
/*
// how to use modern me
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderData(data[0]);
      console.log(data[0]);
      const neighbhours = data[0].borders;
      console.log(neighbhours);
      if (!neighbhours) {
        throw new Error('these country has "NO" neighbour');
      }
      neighbhours.map(neighbhour => getNeighbour(neighbhour));
    })
    .catch(err => {
      console.error(`${err}`);
      renderError(`something went wrong ${err.message}. Try again!`);
    });
  // .catch(err => alert(err));
};
const getNeighbour = neighb => {
  fetch(`https://restcountries.com/v3.1/alpha/${neighb}`)
    .then(data => data.json())
    .then(data => {
      renderData(data[0]);
    });
};

function updatevalue() {
  const val = document.querySelector('#border').value;
  console.log(val);
  countriesContainer.innerHTML = null;
  getCountryData(val);
}*/

// also remove function from click button from HTML.
/*
document.querySelector('#border').addEventListener('change', updatevalue);

function updatevalue() {
  const val = document.querySelector('#border').value;
  console.log(val);
  getCountryData(val);
  countriesContainer.innerHTML = null;
}
*/
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => res.json())
    .then(data => data);
};

whereAmI(52.508, 13.381);
