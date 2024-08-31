export const nomorKredit = [];
export const nomorDeposito = [];
export const nomorTabungan = [];
export const nomorSponsor = [];
export const nomorPickup = [];
export const nomorInduk = [];

fetch('http://localhost:8000/api/noAdmin')
  .then(response => response.json())
  .then(data => {
    if (data && data.no_kredit) {
      nomorKredit.push(String(data.no_kredit));
    }
    if (data && data.no_deposito) {
      nomorDeposito.push(String(data.no_deposito));
    }
    if (data && data.no_tabungan) {
      nomorTabungan.push(String(data.no_tabungan));
    }
    if (data && data.no_sponsor) {
      nomorSponsor.push(String(data.no_sponsor));
    }
    if (data && data.no_pickup) {
      nomorPickup.push(String(data.no_pickup));
    }
    if (data && data.no_induk) {
      nomorInduk.push(String(data.no_induk));
    }
  })
  .catch(error => console.error('Error fetching data:', error));
