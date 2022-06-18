import React from "react";
import {
   View,
   Text,
   ImageBackground,
   Image,
   StyleSheet,
   ScrollView,
   SafeAreaView,
} from "react-native";
import {
   DrawerContentScrollView,
   DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
   return (
      <View style={{ flex: 1 }}>
         <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
               <Image
                  source={require("../images/cocoa_logo8.jpg")}
                  style={styles.drawerImage}
               />
            </View>
            <DrawerItemList {...props} />
         </DrawerContentScrollView>
         <View>
            <Text>Our Custom Text</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   drawerHeader: {
      backgroundColor: "#BB8760",
      height: 140,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      flexDirection: "row",
   },
   drawerHeaderText: {
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
   },

   drawerImage: {
      margin: 20,
      height: 80,
      width: 170,
   },
   stackIcon: {
      marginLeft: 10,
      color: "#fff",
      fontSize: 24,
   },
});

export default CustomDrawer;
