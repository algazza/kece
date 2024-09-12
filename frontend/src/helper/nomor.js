import { localhostLink } from "./localhost";

export const nomorInduk = [];

fetch(`${localhostLink}/api/noAdmin`)
  .then(response => response.json())
  .then(data => {
    if (data && data.no_induk) {
      nomorInduk.push(String(data.no_induk));
    }
  })
  .catch(error => console.error('Error fetching data:', error));
