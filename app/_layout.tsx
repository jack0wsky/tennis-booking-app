import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "../store";
import { useFonts } from "expo-font";
import { TabBar } from "../modules/shared/TabBar";
import Search from "./search";
import Page from "./index";
import PlaceDetails from "./(place)/[id]";
import PlaceReviews from "./(place)/reviews";
import { enableScreens } from "react-native-screens";

enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="home"
        component={Page}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default function Layout() {
  const [loaded] = useFonts({
    SatoshiRegular: require("../assets/fonts/Satoshi-Regular.otf"),
    SatoshiMedium: require("../assets/fonts/Satoshi-Medium.otf"),
    SatoshiBold: require("../assets/fonts/Satoshi-Bold.otf"),
  });

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ animationEnabled: true }}>
        <Stack.Screen
          name="(place)/reviews"
          component={PlaceReviews}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name="(place)/[id]"
          options={{ headerShown: false }}
          component={PlaceDetails}
        />
        <Stack.Screen
          name="index"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Provider>
  );
}
