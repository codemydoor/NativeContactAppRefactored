import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'


import logo1 from '../assets/logo1.png'

function LandingPage({navigation}) {
    return (
         <View style={styles.container}>
             <View style={styles.companyTag}>
                 <Image style={styles.logo} source={logo1} />
                 <Text style={styles.companyName}>Devgate</Text>
             </View>
             <Text style={styles.description}>Contact Manager</Text>
             <View style={styles.btn}>
             <TouchableOpacity  onPress={()=>{
                 navigation.navigate('SigninAndLogin')
             }} style={styles.button}>
                 <Text>GET STARTED</Text>
                 <View style={styles.border}></View>
             </TouchableOpacity>
             </View>
          
        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    container:{
        flex:10

    },
    companyTag:{
        marginTop:190,
        flex:4,
        flexDirection:'row',
        alignSelf:'center',
    },
   logo:{
       height: 50,
       width:50
},
companyName:{
    fontSize:35,
    fontWeight:"bold",
    marginVertical:3
},
border:{
    height:2,
    width: 92,
    backgroundColor:'#F8B806'
},
button:{
    alignSelf:"center",
    marginVertical:40
},
description:{
    flex:3,
    alignSelf:"center",
    fontSize:15,
    fontWeight:"bold",
    color:"gray"
   
},
btn:{
    flex:3
}
})