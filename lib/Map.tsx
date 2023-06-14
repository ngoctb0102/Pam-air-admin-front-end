import React, { useState, useCallback, memo, useImperativeHandle } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Circle,
  Marker,
} from "@react-google-maps/api";
import { HaNoiLocationList } from "./HaNoiLocationList";
import { HoChiMinhLocationList } from "./HoChiMinhLocationList";
const containerStyle = {
  width: "800px",
  height: "500px",
};
type MapProps = {
  onClick: () => void;
};

export type MapHandle = {
  setMapCenter: (a) => void;
};
const Map: React.ForwardRefRenderFunction<MapHandle, MapProps> = (
  props: MapProps,
  forwardedRef
) => {
  const [center, setCenter] = useState({
    lat: 105.78,
    lng: 21.08,
  });
  useImperativeHandle(forwardedRef, () => {
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
                  props.onClick();
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
        <>
          {HoChiMinhLocationList.map((items, index) => {
            return (
              <Marker
                // required
                key={index}
                onClick={() => {
                  props.onClick();
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
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default memo(React.forwardRef(Map));
