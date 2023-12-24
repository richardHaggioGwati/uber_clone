import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Point} from "react-native-google-places-autocomplete";

interface StateType {
    origin: PAYLOAD,
    destination: PAYLOAD,
    travelTimeInformation: null | string,
}

type PAYLOAD = { location: Point | undefined, description: string }

const initialState: StateType = {
    origin: {location: undefined, description: ''},
    destination: {location: undefined, description: ''},
    travelTimeInformation: null
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
        setTravelTimeInformation: (state, action: PayloadAction<string>) => {
            state.travelTimeInformation = action.payload
        },
    }
})

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions

// Selectors
export const selectOrigin = (state: { nav: StateType }) => state.nav.origin
export const selectDestination = (state: { nav: StateType }) => state.nav.destination
export const selectTravelTimeInformation = (state: { nav: StateType }) => state.nav.destination

export default navSlice.reducer
