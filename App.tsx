import {Provider} from "react-redux";
import {store} from "./store";
import HomeScreen from "./screens/HomeScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <SafeAreaProvider>
                    <Stack.Navigator>
                        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
                        <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown: false}} />
                        <Stack.Screen name="EatsScreen" component={EatsScreen} options={{headerShown: false}} />
                    </Stack.Navigator>
                </SafeAreaProvider>
            </Provider>
        </NavigationContainer>
    );
}

