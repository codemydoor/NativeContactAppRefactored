import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import logo1 from '../assets/logo1.png'
import {StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../component/LandingPage';
import SigninAndLogin from '../component/SigninAndLogin';
import RegisterScreen from '../component/RegisterScreen';
import SignInScreen from '../component/SignInScreen';
import HomeScreen from '../component/HomeScreen';
import CameraScreen from '../component/CameraScreen';
import DetailScreen from "../component/DetailScreen";




const Stack = createStackNavigator();

function Navigation() {
    return (
            <NavigationContainer>
              <Stack.Navigator>
              
                <Stack.Screen options={{
                  header:()=>null
                }}
                 name="LandingPage" 
                 component={LandingPage} />
                <Stack.Screen options={{
                   header:()=>null
                }} name="SigninAndLogin" component={SigninAndLogin} />
                <Stack.Screen options={{
                   headerStyle:{
                     height: 120,
                     backgroundColor:"#F8B806",
                   },
                   headerTitle:"Register",
                   headerBackTitleVisible:false,
                   headerTitleStyle:{
                     fontSize: 17,
                     fontWeight:"bold"
                   }
                   
                 }} name="RegisterScreen" component={RegisterScreen} />
                 <Stack.Screen
                 options={{
                  headerStyle:{
                    height: 120,
                    backgroundColor:"#F8B806",
                  },
                  headerTitle:"Sign In",
                  headerBackTitleVisible:false,
                  headerTitleStyle:{
                    fontSize: 17,
                    fontWeight:"bold"
                  }
                }}
                  name="SignInScreen" component={SignInScreen} />
                    <Stack.Screen 
                options={({ navigation, route }) => ({
                  headerStyle:{
                    height: 120,
                    backgroundColor:"white",
                  },
                  headerTitle:()=>null,
                  headerLeft:()=>{
                    return(
                      <View style={styles.companyTag}>
                        <Image style={styles.logo} source={logo1} />
                        <Text style={styles.companyName}>Devgate</Text>
                     </View>
                    )
                   },
                   headerRight:()=>{
                    return(
                      <View style={styles.profileContainer}>
                       <AntDesign onPress={()=>{
                         navigation.navigate("DetailScreen",{
                           name: "Edmund Quashie",
                           role: "Mobile & Web Developer"
                         })
                       }} name="user" size={23} color="blue" />
                      </View>
                    )
                   }
                })}
                 name='HomeScreen' component={HomeScreen} />
                 
                <Stack.Screen
                options={{
                  headerStyle:{
                    height: 120,
                    backgroundColor:"#F8B806",
                  },}}
                  name="CameraScreen" component={CameraScreen} />

                <Stack.Screen  name="DetailScreen" component={DetailScreen} />
              </Stack.Navigator>
              
            </NavigationContainer>
     
    )
}

export default Navigation

const styles=StyleSheet.create({
companyTag:{
    flexDirection:'row',
    marginVertical: 250,
    alignSelf:'center',
    marginLeft:120
},
logo:{
   height: 40,
   width:40
},
companyName:{
fontSize:20,
fontWeight:"bold",
marginVertical:7
},
profileContainer:{
  marginRight:25
},
})
