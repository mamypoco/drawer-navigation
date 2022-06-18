import * as React from "react";
import "react-native-gesture-handler";
import { Button, View } from "react-native";

function HomeScreen({ navigation }) {
   return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         <Button
            onPress={() => navigation.navigate("Book a Visit")}
            title="Book A Visit"
         />
      </View>
   );
}

export default HomeScreen;
