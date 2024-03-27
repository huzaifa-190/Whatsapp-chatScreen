import * as React from 'react';
// import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import { Platform, NativeModules ,Dimensions} from 'react-native';
const { StatusBarManager } = NativeModules;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlashMessage from "react-native-flash-message";
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import { StyleSheet, View ,Text,TouchableOpacity} from "react-native";


// ************************************* Importing own components 
// import Home from "./views/Home"
import Chat from "./views/Chat"
// import Practice from "./views/Practice"
// import Pr2 from "./views/Pr2"
import Inbox from "./views/Inbox"
import { TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App()  {

  const chatHeaderTitle =  () => {
    const screenWidth = Dimensions.get('window').width;
    return(
      
      <View style={{ flex:1,flexDirection: 'row',width:"100%",alignItems: 'center', }}> 

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start' }}> 
          <Text style={{ color: 'rgb(34, 168, 84)', fontSize: 22,fontWeight:'600',}}> WhatsApp</Text>
        </View>     

       
    </View>
      ) }

      const chatHeaderRight = () =>{

        return(
          <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'  ,}}>       
            <Icon2 name="camera-outline"  size={23} color="black" style={{ marginRight: 10, }} />
            <Icon1 name="search"  size={23} color="black" style={{ marginRight: 10, }} />
            <Icon1 name="more-vert"  size={23} color="black" style={{ marginRight: 10, }} />
        </View>
        )
      }

      // ********************************************************** APP RETURN ********************************************************************************
  return (


    <View style={styles.container}>
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: true }}>
          
         


          <Stack.Screen name="Chat" component={Chat } options={{headerShown:true,
                                                              
                                                              headerStyle: {
                                                               backgroundColor: "white",
                                                               
                                                             },
                                                             headerTitle: chatHeaderTitle,
                                                             headerRight: chatHeaderRight
                                                             // headerTintColor: "#fff",
                                                             // headerBackTitle: "Back",
                                                             }}/>
          <Stack.Screen name="Inbox" component={Inbox}  options={{headerShown:true}}/>

      </Stack.Navigator>
    </NavigationContainer>
   
     <FlashMessage />
     </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});