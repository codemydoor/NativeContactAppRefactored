import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Entypo, Fontisto, Feather, EvilIcons } from "@expo/vector-icons";

export default function DetailScreen({route,navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <View>
              <Image source={require("../assets/profile.jpg")} style={styles.image} /> 
          </View>
        
         <View style={styles.textContainer}>
          <Text style={styles.Text}> {route.params.name}</Text>
          <Text style={styles.TechText}> {route.params.role} </Text>
        </View> 
      </View>

      <View style={styles.mediaContainer}>
        <Entypo name="twitter-with-circle" size={35} color="black" />
        <View style={styles.in}><Entypo name="linkedin-with-circle" size={35} color="black" /></View>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Feather name="phone" size={20} color="black" />
          <Text style={styles.Text}>+233 (244) 013204</Text>
        </View>
        <View style={styles.icon}>
          <Fontisto name="email" size={20} color="black" />
          <Text style={styles.Text}> dwolino@gmail.com</Text>
        </View>
        <View style={styles.icon} >
          <EvilIcons name="location" size={20} color="black" />
          <Text style={styles.Text}> Emefs Estate, Tema</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    paddingHorizontal: 20,
    marginTop: 40
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 45,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    marginBottom:20
    
  },
  textContainer: {
    flexDirection: "column",
  },
  mediaContainer: {
      flexDirection: 'row',
      flex:1 ,
      
  },
  icon: {
      flexDirection: 'row',
      marginBottom:40
  },
  iconContainer: {
    flex: 8
  },
  Text: {
      paddingHorizontal: 10,
      fontWeight:"bold"
  },
  TechText: {
    paddingHorizontal: 10,
    color: 'grey'
},
in: {
    paddingHorizontal: 5
}
 
});