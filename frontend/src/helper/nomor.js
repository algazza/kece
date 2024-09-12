export const nomorInduk = [];

fetch('http://localhost:8000/api/noAdmin')
  .then(response => response.json())
  .then(data => {
    if (data && data.no_induk) {
      nomorInduk.push(String(data.no_induk));
    }
  })
  .catch(error => console.error('Error fetching data:', error));


  