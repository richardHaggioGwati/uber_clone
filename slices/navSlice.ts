import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Point} from "react-native-google-places-autocomplete";

interface StateType {
    origin: PAYLOAD,
    destination: PAYLOAD,
    travelTimeInformation: TRAVELING,
}

type PAYLOAD = { location: Point | undefined, description: string }
type TRAVELING = {
    distance: {
        text: string,
        value: number,
    },
    duration: {
        text: string,
        value: number,
    }
}

const initialState: StateType = {
    origin: {location: undefined, description: ''},
    destination: {location: undefined, description: ''},
    travelTimeInformation: {
        distance: {
            text: "470 mi",
            value: 756340,
        },
        duration: {
            text: "8 hours 7 min",
            value: 29240,
        },
    }
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action: PayloadAction<PAYLOAD>) => {
            state.origin = action.payload
        },
        setDestination: (state, action: PayloadAction<PAYLOAD>) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action: PayloadAction<TRAVELING>) => {
            state.travelTimeInformation = action.payload
        },
    }
})

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions

// Selectors
export const selectOrigin = (state: { nav: StateType }) => state.nav.origin
export const selectDestination = (state: { nav: StateType }) => state.nav.destination
export const selectTravelTimeInformation = (state: { nav: StateType }) => state.nav.travelTimeInformation

export default navSlice.reducer
