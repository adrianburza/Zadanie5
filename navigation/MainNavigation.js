import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}
            initialRouteName={Routes.Home} >  
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Profile} component={Profile} />
        </Stack.Navigator>
    );
};

export default MainNavigation;