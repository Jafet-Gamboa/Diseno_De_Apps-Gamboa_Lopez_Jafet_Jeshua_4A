import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import Home from "../Screens/Home";
import Uno from "../Screens/Uno";
import Dos from "../Screens/Dos";
import Tres from "../Screens/Tres";
import Cuatro from "../Screens/Cuatro";
import Cinco from "../Screens/Cinco";
import Seis from "../Screens/Seis";
import Siete from "../Screens/Siete";

const Stack = createNativeStackNavigator();

export default function MainStack(){
    return(
       <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Uno" component={Uno} />
            <Stack.Screen name="Dos" component={Dos} />
            <Stack.Screen name="Tres" component={Tres} />
            <Stack.Screen name="Cuatro" component={Cuatro} />
            <Stack.Screen name="Cinco" component={Cinco} />
            <Stack.Screen name="Seis" component={Seis} />
            <Stack.Screen name="Siete" component={Siete} />
        </Stack.Navigator>
       </NavigationContainer>
    );
}
