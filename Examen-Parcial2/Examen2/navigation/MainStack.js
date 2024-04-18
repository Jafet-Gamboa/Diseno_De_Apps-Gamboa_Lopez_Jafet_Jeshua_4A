import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import Home from "../Screens/Home";
import Uno from "../Screens/Uno";
import Dos from "../Screens/Dos";

const Stack = createNativeStackNavigator();

export default function MainStack(){
    return(
       <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Home} />
            <Stack.Screen name="Mis Pedidos" component={Pedidos} />
            <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
       </NavigationContainer>
    );
}
