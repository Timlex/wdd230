const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7493783231072&lon=6.634338593584977&units=imperial&appid=cdef6a837b4a6e9f4028eaf963b5e847';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  const temperature = Math.round(data.main.temp);
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;

  currentTemp.innerHTML = `${temperature}&deg;F`;
  const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = description;
}

apiFetch();
