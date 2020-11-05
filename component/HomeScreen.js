import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import QRScreen from './QRScreen'
import profile from "../assets/profile.jpg"



function HomeScreen({navigation}) {
    
    return (
        <View style={styles.container}>
            
            <View style={styles.textContainer}>
              <Text style={{fontSize:16, marginBottom:10}}>Exchange contact information</Text>
              <Text style={{color:"gray", fontSize:16}}>Scan this QR bellow to share your contact</Text>
            </View>
            <View style={styles.qrCodeContainer}>
                <QRScreen />
            </View>
            <View style={styles.profileComntainer} >
                <Image style={styles.img} source={profile}/>
                <View style={{marginVertical:5, marginLeft:10,  }}>
                    <Text style={{marginVertical:4, fontWeight:"bold"}}>Edmund Quashie</Text>
                    <Text style={{color:"gray"}}>Mobile & Web Developer</Text>
                </View>
            </View>
            <View style={styles.bottomTextContainer}>
                <View style={styles.btntextContainer}>
                <Text style={{marginTop:5}}>Wants to add a connection?</Text>
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate("CameraScreen")

                }}
                 style={styles.btn} >
                    <Text style={{alignSelf:"center", marginTop:5, color:"blue"}}>Scan QR</Text>
               </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:10
    },
    textContainer:{
        marginTop:50,
        alignSelf:"center",
        flex:2
    },
    qrCodeContainer:{
        alignSelf:"center",
        flex:5

    },
    bottomTextContainer:{
        flex:1,
        alignSelf:"center",
        borderTopColor:"gray",
        borderTopWidth:0.7
    },
    profileComntainer:{
        paddingLeft:60,
        flex:2,
        flexDirection:"row"
    },
    qrCode:{
        height: 200,
        width:200
    },
    img:{
        height:55,
        width:55,
        borderRadius:26
    },
   
    btn:{
        height:30,
        width: 80,
        borderWidth:2,
        borderColor:"blue",
        borderRadius:3,
        marginHorizontal:10,
       
    },
    btntextContainer:{
       flexDirection:'row',
       marginVertical:15
    }
})
