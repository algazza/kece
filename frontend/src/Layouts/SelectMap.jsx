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

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const SelectMap = ({ selectPosition, setSelectPosition }) => {
  const [searchAddress, setSearchAddress] = useState("");
  const [listplace, setListplace] = useState([]);

  const ShowListAddress = () => {
    const params = {
      amenity: searchAddress,
      street: searchAddress,
      city: "Semarang",
      country: "Indonesia",
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };

    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setListplace(JSON.parse(result));
      })
      .catch((err) => console.log("err:", err));
  };

  return (
    <div className="w-full">
      <TextField
        fullWidth
        id="outlined-basic"
        variant="outlined"
        label="Lokasi"
        value={selectPosition ? selectPosition.display_name : searchAddress}
        onChange={(e) => {
          setSearchAddress(e.target.value);
          setSelectPosition(null)
          ShowListAddress();
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className="max-w-[700px] max-h-[15rem] overflow-auto">
        <List className={`${setSearchAddress && "bg-primary"} rounded-lg`}>
          {listplace.map((item) => (
            <div key={item}>
              <ListItem
                disablePadding
                onClick={() => {
                  setSelectPosition(item);
                  setSearchAddress(item.display_name);
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
      <p className="text-abuGelap ml-4">Map dibawah hanya bisa menampilkan</p>
    </div>
  );
};

export default SelectMap;
