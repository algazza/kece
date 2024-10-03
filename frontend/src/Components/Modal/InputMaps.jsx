import React, { useState } from "react";
import Maps from "../../Layouts/Maps";
import { ThemeProvider } from "@emotion/react";
import {
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import styles from "../../helper/style";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useMap } from "react-leaflet";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const InputMaps = ({ handleModal }) => {
  const [searchAddress, setSearchAddress] = useState("");
  const [listplace, setListplace] = useState([]);
  const [selectPosition, setSelectPosition] = useState(null);

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
    <div className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed z-[101]">
      <div
        className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed bg-gray-900/50 backdrop-blur-sm"
        onClick={handleModal}
      >
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/4">
          <div className="grid sm:justify-center md:items-center md:gap-y-4 md:gap-x-20 md:grid-cols-x2440">
            <div className="mb-4">
                <div className="w-full">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    label="Cari Lokasi..."
                    onChange={(e) => {
                      setSearchAddress(e.target.value);
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
                </div>

              <div className="my-2 w-full max-h-[15rem] overflow-auto">
                <List
                  className={`${setSearchAddress && "bg-primary"} rounded-lg`}
                >
                  {listplace.map((item) => (
                    <div key={item}>
                      <ListItem
                        disablePadding
                        onClick={() => {
                          setSelectPosition(item);
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
            </div>

            <div className="m-4 grid justify-center gap-2 md:-order-1 md:row-[1/3]">
              <Maps selectPosition={selectPosition} />
            </div>

            <div className="bg-primary p-2 rounded-md w-full">
              <div className={styles.inputSpan}>
                <span>Catatan</span>
                <TextareaAutosize
                  className={`resize-none text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg 
                    border hover:border-black focus:border-blue-600 focus:border-2 focus-visible:outline-0 
                    box-border border-slate-300`}
                  aria-label="Catatan"
                  minRows={3}
                  placeholder="Catatan"
                  name="catatan"
                  // value={inputs.catatan || ""}
                  // onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputMaps;
