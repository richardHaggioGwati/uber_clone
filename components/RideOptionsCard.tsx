import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {useNavigation} from "@react-navigation/native";
import {Icon} from "react-native-elements";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectTravelTimeInformation} from "../slices/navSlice";

type Ride = { id: string, title: string, multiplier: number, image: any }

const rideOptionsData: Ride[] = [
    {
        id: "Uber-X-123",
        title: "Uber X",
        multiplier: 1,
        image: require('../assets/rides/UberX.webp')
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.4,
        image: require('../assets/rides/UberXL.webp')
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: require('../assets/rides/Lux.webp')
    },
]

const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState<Ride>()
    const travelTimeInfo = useSelector(selectTravelTimeInformation)


    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity onPress={() => {
                    // @ts-ignore
                    navigation.navigate('NavigateCard')
                }}
                                  style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInfo?.distance.text}</Text>
            </View>

            <FlatList data={rideOptionsData} keyExtractor={(item) => item.id} renderItem={({item}) => (
                <TouchableOpacity onPress={() => setSelected(item)}
                                  style={tw`flex-row items-center justify-between px-10 ${item.id === selected?.id ? "bg-gray-200" : ''}`}>
                    <Image style={{
                        width: 100, height: 100, resizeMode: "contain"
                    }} source={item.image}/>
                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                        <Text>{travelTimeInfo?.duration.text} time to travel</Text>
                    </View>
                    <Text style={tw`text-base font-bold`}>{
                        new Intl.NumberFormat("en-gb", {
                            style: 'currency',
                            currency: 'GBP'
                        }).format(travelTimeInfo?.duration.value * SURGE_CHARGE_RATE * item.multiplier / 100)
                    }</Text>
                </TouchableOpacity>
            )}/>

            <View>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected ? "bg-gray-300" : ''}`}>
                    <Text style={tw`text-center text-white text-lg`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RideOptionsCard
