import { useState, useCallback, memo } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Circle,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#00FF00",
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 200,
  zIndex: 1,
};

// When the user clicks anywhere outside of the modal, close it

function Map(props: { onClick: () => void }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDUDvpmQtipK5Se-zjce5zWSMNbG2LO2j4",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
      <Circle
        // required
        onClick={props.onClick}
        center={center}
        // required
        options={options}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(Map);
