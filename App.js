import * as React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, View } from "react-native";
import AppNavigation from "./src/navigation";

function App() {
   return (
      <SafeAreaProvider>
         <AppNavigation />
      </SafeAreaProvider>
   );
}

export default App;
