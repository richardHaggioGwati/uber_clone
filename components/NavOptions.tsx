import React from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native'
import tw from "tailwind-react-native-classnames";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectOrigin} from "../slices/navSlice";

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: require('../assets/uberX.png'),
        screen: "MapScreen" //TODO: implement feature
    },
    {
        id: "456",
        title: "Order food",
        image: require('../assets/uber_food.png'),
        screen: "EatsScreen" //TODO: implement feature
    },
]

const NavOptions = () => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <FlatList data={data} horizontal keyExtractor={item => item.id} renderItem={({item}) => (
            // @ts-ignore
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)} disabled={!origin}
                              style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View style={tw`${!origin ? "opacity-20" : ""}`}>
                    <Image style={{width: 120, height: 120, resizeMode: 'contain'}} source={item.image}/>
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name="arrowright" color="white"
                          type="antdesign"/>
                </View>
            </TouchableOpacity>
        )}/>
    )
}

export default NavOptions
