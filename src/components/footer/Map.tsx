import React from "react";
import { Map, Marker, GoogleApiWrapper, GoogleAPI } from "google-maps-react";
import LocationIcon from "../../assets/icons/location-icon.svg";

interface MapProps {
  google: GoogleAPI;
}

const mapStyles = {
  borderRadius: "50%",
  width: "200px",
  height: "200px",
};

const _MapContainer = ({ google }: MapProps) => (
  <div className="map-container">
    {/* 
  // @ts-ignore */}
    <Map
      google={google}
      zoom={17}
      style={mapStyles}
      disableDefaultUI
      initialCenter={{
        lat: 52.403124,
        lng: 16.9078014
      }}
    >
      <Marker icon={LocationIcon} />
    </Map>
  </div>
);

export const MapContainer = GoogleApiWrapper({
  apiKey: "AIzaSyDP6ZhhJeNA_Ec-UtnXQdgxfFm7P4aOs70"
})(_MapContainer);
