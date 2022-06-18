import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import BookAVisitScreen from "../screens/BookAVisitScreen";
import CafeScreen from "../screens/CafeScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import AdoptACatScreen from "../screens/AdoptACatScreen";
import ContactUs from "../screens/ContactUs";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

function AppNavigation() {
   return (
      <NavigationContainer>
         <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            initialRouteName="Home"
         >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Book a Visit" component={BookAVisitScreen} />
            <Drawer.Screen name="Cafe Menu" component={CafeScreen} />
            <Drawer.Screen name="Adopt a Cat" component={AdoptACatScreen} />
            <Drawer.Screen name="About Us" component={AboutUsScreen} />
            <Drawer.Screen name="Contact Us" component={ContactUs} />
         </Drawer.Navigator>
      </NavigationContainer>
   );
}

export default AppNavigation;
