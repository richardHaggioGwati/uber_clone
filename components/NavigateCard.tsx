import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
// @ts-ignore
import {GOOGLE_MAPS_APIKEY} from "@env"
import {useDispatch} from "react-redux";
import {setDestination} from "../slices/navSlice";
import {useNavigation} from "@react-navigation/native";
import NavFavourites from "./NavFavourites";

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good morning user</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete styles={inputBoxStyles} fetchDetails={true}
                                              onPress={(data, detail) => {
                                                  dispatch(setDestination({
                                                  location: detail?.geometry.location,
                                                  description: data.description
                                              }));
                                              // @ts-ignore
                                                  navigation.navigate('RideOptionsCard')
                                              }}
                                              enablePoweredByContainer={false} nearbyPlacesAPI="GooglePlacesSearch"
                                              debounce={400} placeholder="Where to?" query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en"
                    }}/>
                </View>
                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const inputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDD",
        borderRadius: 0,
        fontSize: 8,
    },

})
