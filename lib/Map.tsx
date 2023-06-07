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
import { HaNoiLocationList } from "./HaNoiLocationList";

function Map(props: { onClick: () => void }, ref) {
  const [center, setCenter] = useState({
    lat: 105.78,
    lng: 21.08,
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
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {HaNoiLocationList.map((items, index) => {
            return (
              <Marker
                // required
                key={index}
                onClick={() => {
                  alert(items[1] + "," + items[2]);
                  props.onClick;
                }}
                position={{
                  lat: items[3],
                  lng: items[4],
                }}
                // required
              />
            );
          })}
        </>
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
