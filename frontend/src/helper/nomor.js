import { localhostLink } from "./localhost";

export const nomorInduk = [];
export const nomorArmor = [];

fetch(`${localhostLink}/api/noAdmin`)
  .then(response => response.json())
  .then(data => {
    if (data && data.no_induk && data.no_armor) {
      nomorInduk.push(String(data.no_induk));
      nomorArmor.push(String(data.no_armor));
    }
  })
  .catch(error => console.error('Error fetching data:', error));
