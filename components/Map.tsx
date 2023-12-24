import MapView, {Marker} from 'react-native-maps'
import tw from "tailwind-react-native-classnames";
import {useSelector} from "react-redux";
import {selectDestination, selectOrigin} from "../slices/navSlice";
import MapViewDirections from 'react-native-maps-directions'
// @ts-ignore
import {GOOGLE_MAPS_APIKEY} from '@env'
import {useEffect, useRef} from "react";

const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef<MapView>(null)

    useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: {top: 50, right: 50, left: 50, bottom: 50}
        })
    }, [origin, destination]);

    return (
        //TODO implement live location
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        >
            {origin && destination && (
                <MapViewDirections origin={origin.description} destination={destination.description}
                                   apikey={GOOGLE_MAPS_APIKEY} strokeWidth={3} strokeColor="black"/>
            )}

            {origin?.location && (
                <Marker coordinate={
                    {
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }
                }
                        title="Origin"
                        description={origin.description}
                        identifier="origin"
                />
            )}

            {destination?.location && (
                <Marker coordinate={
                    {
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }
                }
                        title="Destination"
                        description={destination.description}
                        identifier="destination"
                />
            )}
        </MapView>
    )
}

export default Map