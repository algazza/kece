export const nomorKredit = [];
export const nomorDeposito = [];
export const nomorTabungan = [];

fetch('http://localhost:8000/api/noAdmin')
  .then(response => response.json())
  .then(data => {
    if (data && data.no_kredit) {
      nomorKredit.push(String(data.no_kredit));
    }
    if (data && data.no_deposit) {
      nomorDeposito.push(String(data.no_deposit)); 
    }
    if (data && data.no_tabungan) {
      nomorTabungan.push(String(data.no_tabungan));
    }
  })
  .catch(error => console.error('Error fetching data:', error));
