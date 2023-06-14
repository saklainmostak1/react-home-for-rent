import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: "99vw",
    height: "60vh",

};

const center = {
    lat: 23.745307744707024,
    lng: 90.34785554096965,
};

function MyComponent() {
    return (
        <div >
            <LoadScript
                googleMapsApiKey={process.env.REACT_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                >
                    <Marker
                        position={center}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(MyComponent)