import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Point} from "react-native-google-places-autocomplete";

interface StateType {
    origin: Origin,
    destination: null | string,
    travelTimeInformation: null | string,
}

type Origin = { location: Point | undefined, description: string }

const initialState: StateType = {
    origin: {location: undefined, description: ''},
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action: PayloadAction<Origin>) => {
            state.origin = action.payload
        },
        setDestination: (state, action: PayloadAction<string>) => {
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
