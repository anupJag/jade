import React, { FC, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { mapStyles } from './storeMap.style';
import getConfig from 'next/config';

interface StoreMapProps {
  defaultCenter: { lat: number; lng: number };
  locations: any[];
}

export const StoreMap: FC<StoreMapProps> = ({ defaultCenter, locations }: any) => {
  const [selected, setSelected]: any = useState({});
  const onSelect = item => {
    setSelected(item);
  };
  const { publicRuntimeConfig } = getConfig();
  const { API_KEY } = publicRuntimeConfig;

  return (
    <>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
          {locations.map(item => {
            return (
              <Marker key={item.name} onClick={() => onSelect(item)} position={item.location} />
            );
          })}
          {selected.location && (
            <InfoWindow position={selected.location} onCloseClick={() => setSelected({})}>
              <p>{selected.name}</p>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
};
