import React, { useState, useCallback, memo, useImperativeHandle } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Circle,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "500px",
};

// const options = {
//   strokeColor: "#FF0000",
//   strokeOpacity: 0.8,
//   strokeWeight: 2,
//   fillColor: "#00FF00",
//   fillOpacity: 0.35,
//   clickable: true,
//   draggable: false,
//   editable: false,
//   visible: true,
//   radius: 200,
//   zIndex: 1,
// };

// When the user clicks anywhere outside of the modal, close it

function Map(props: { onClick: () => void }, ref) {
  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });
  useImperativeHandle(ref, () => {
    return {
      setMapCenter: (a) => {
        setCenter({
          lat: a[0],
          lng: a[1],
        });
      },
    };
  });
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
    <div style={{ border: "2px solid black" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
        <Marker
          // required
          onClick={props.onClick}
          position={center}
          // required
        />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default memo(React.forwardRef(Map));
