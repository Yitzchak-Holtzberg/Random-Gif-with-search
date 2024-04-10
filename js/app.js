/**
 * API key for Giphy API
 * @type {string}
 */
const API_KEY = 'hy38bbEpRWVHL3dHHb7o9uaetAgMbzqF';

/**
 * Base URL for Giphy API
 * @type {string}
 */
const BASE_URL = 'https://api.giphy.com/v1/gifs';

/**
 * Image element in the DOM
 * @type {HTMLElement}
 */
const img = document.querySelector('img');

/**
 * Search button element in the DOM
 * @type {HTMLElement}
 */
const searchButton = document.getElementById("searchButton");

/**
 * Search box element in the DOM
 * @type {HTMLElement}
 */
const searchBox = document.getElementById('searchBox');

/**
 * Fetches a gif from the Giphy API and sets it as the source for the image element.
 * @param {string} url - The URL to fetch the gif from.
 */
async function fetchGif(url) {
  try {
    /**
     * Fetches a gif from the Giphy API.
     * @type {Response}
     */
    const response = await fetch(url, {mode: 'cors'});

    // Converts the response to JSON and sets the image source to the URL of the gif.
    const data = await response.json();
    img.src = data.data.images.original.url;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Fetches a cat gif on page load.
document.addEventListener("DOMContentLoaded", () => {
  const url = `${BASE_URL}/translate?api_key=${API_KEY}&s=cats`;
  fetchGif(url);
  spinImage(10000)
});

// Fetches a random gif related to the search term when the search button is clicked.
searchButton.addEventListener("click", () => {
  const searchTerm = searchBox.value.trim();
  const url = `${BASE_URL}/random?api_key=${API_KEY}&tag=${searchTerm}`;
  fetchGif(url);
  spinImage(10000)
});


/**
 * Spins the image for a specified duration.
 * @param {number} duration - The duration of the spin in milliseconds.
 */
async function spinImage(duration) {
  img.classList.add('spin');
  await new Promise(resolve => setTimeout(resolve, duration));
  img.classList.remove('spin');
}

