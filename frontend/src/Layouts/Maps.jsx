import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import styles from "../helper/style";

const iconHTML = ReactDOMServer.renderToString(
  <LocationOnIcon style={{ color: "red", fontSize: "32px" }} />
);

const icon = L.divIcon({
  html: iconHTML,
  className: "custom-div-icon",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const ResetCenterView = ({ selectPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition]);
  return null;
};

const position = [-6.9903758253622135, 110.4228685657542];

const Maps = ({ selectPosition }) => {
  const locationSelected = [selectPosition?.lat, selectPosition?.lon];

  return (
<>

      <MapContainer center={position} zoom={17} className="h-[500px] z-10">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=KH6Lbw2fJYcxOWB7ieVW"
        />
        {selectPosition && (
          <Marker position={locationSelected} icon={icon}>
            <Popup>{selectPosition?.address.amenity}</Popup>
          </Marker>
        )}
        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
</>
  );
};

export default Maps;
