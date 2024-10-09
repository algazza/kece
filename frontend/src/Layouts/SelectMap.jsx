import {
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

const GOOGLE_GEOCODING_BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?";
const API_KEY = "AIzaSyD7nfHS-PMyDVO17Hclom2q2MMVSyCkVms"; // Gantilah dengan API Key kamu

const SelectMap = () => {
  const [selectPosition, setSelectPosition] = useState(null);
  const [searchAddress, setSearchAddress] = useState("");
  const [listplace, setListplace] = useState([]);
  const [showList, setShowList] = useState(false); // State untuk mengontrol tampilan list

  const ShowListAddress = () => {
    const params = {
      address: searchAddress, // Gunakan parameter address
      key: API_KEY, // Sertakan API Key
    };

    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${GOOGLE_GEOCODING_BASE_URL}${queryString}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result); // Tambahkan ini untuk melihat hasil dari API
      if (result.results && result.results.length > 0) {
        setListplace(result.results);
        setShowList(true);
      } else {
        setListplace([]);
        setShowList(false);
      }
    })
    .catch((err) => console.log("Error:", err));
    console.log(`${GOOGLE_GEOCODING_BASE_URL}${queryString}`); // Tambahkan ini
  };


  return (
    <div className="w-full">
      <TextField
        fullWidth
        id="outlined-basic"
        variant="outlined"
        label="Lokasi"
        value={selectPosition ? selectPosition.formatted_address : searchAddress} // Tampilkan alamat yang dipilih
        onChange={(e) => {
          setSearchAddress(e.target.value);
          setSelectPosition(null); // Reset pilihan saat mengetik
          ShowListAddress(); // Panggil fungsi untuk pencarian baru
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {showList && ( // Tampilkan list jika `showList` true
        <div className="max-w-[700px] max-h-[15rem] overflow-auto">
          <List className={`${searchAddress && "bg-primary"} rounded-lg`}>
            {listplace.map((item) => (
              <div key={item.place_id}>
                <ListItem
                  disablePadding
                  onClick={() => {
                    setSelectPosition(item); // Set posisi yang dipilih
                    setSearchAddress(item.formatted_address); // Update input dengan alamat yang dipilih
                    setShowList(false); // Sembunyikan list setelah item dipilih
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.formatted_address} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      )}
      <p className="text-abuGelap ml-4">Map dibawah hanya bisa menampilkan</p>
    </div>
  );
};

export default SelectMap;
