import React from "react";
import {View, SafeAreaView, Image} from "react-native";
import tw from "tailwind-react-native-classnames"
import NavOptions from "../components/NavOptions";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
// @ts-ignore
import {GOOGLE_MAPS_APIKEY} from "@env"
import {useDispatch} from "react-redux";
import {setOrigin} from "../slices/navSlice";

const HomeScreen = () => {
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`h-full bg-white`}>
            <View style={tw`p-5`}>
                <Image style={{width: 100, height: 100, resizeMode: 'contain'}}
                       source={require('../assets/uber_logo.png')}/>

                <GooglePlacesAutocomplete styles={{container: {flex: 0,}, textInput: {fontSize: 18}}}
                                          enablePoweredByContainer={false} minLength={2} fetchDetails={true}
                                          onPress={(data, detail) => {
                                              dispatch(setOrigin({location: detail?.geometry.location,
                                              description: data.description}))
                                          }}
                                          placeholder="Where from?" nearbyPlacesAPI="GooglePlacesSearch" debounce={400}
                                          query={{key: GOOGLE_MAPS_APIKEY, language: "en"}}/>

                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
