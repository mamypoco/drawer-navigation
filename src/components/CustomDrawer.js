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
      // <View style={{ flex: 1 }}>
      //    <DrawerContentScrollView
      //       {...props}
      //       contentContainerStyle={{ backgroundColor: "#F5DF99" }}
      //    >
      //                   <Image
      //          source={require("../images/cocoa_logo8.jpg")}
      //          style={{
      //             height: 80,
      //             width: 170,
      //             margin: 20,
      //          }}
      //       />
      //       <DrawerItemList {...props} />
      //    </DrawerContentScrollView>
      //    <View>
      //       <Text>Our Custom Text</Text>
      //    </View>
      // </View>

      <ScrollView>
         <SafeAreaView
            style={styles.container}
            forceInset={{ top: "always", horizontal: "never" }}
         >
            <View style={styles.drawerHeader}>
               <View style={{ flex: 1 }}>
                  <Image
                     source={require("../images/cocoa_logo8.jpg")}
                     style={styles.drawerImage}
                  />
               </View>
               <View style={{ flex: 2 }}>
                  {/* <Text style={styles.drawerHeaderText}>Nucamp</Text> */}
               </View>
            </View>
            <View style={styles.drawerItemList}>
               <DrawerItemList {...props} />
            </View>
         </SafeAreaView>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   drawerHeader: {
      backgroundColor: "#205375",
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
   drawerItemList: {
      backgroundColor: "#FFE3A9",
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
