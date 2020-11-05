import React from 'react'
import  { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


function CameraScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate("DetailScreen",{
      name: "Edmund Quashie",
      role: "Mobile & Web Developer"
     
    })
    console.log(data)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
   
    return (
      <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button  title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      <View style={styles.bottomTextContainer}>
                <View style={styles.btntextContainer}>
                <Text style={{marginTop:5}}>Wants to add a connection?</Text>
                <TouchableOpacity 
                onPress={()=>{
                  navigation.navigate("HomeScreen")
                }}

                 style={styles.btn} >
                    <Text style={{alignSelf:"center", marginTop:7, color:"blue", fontSize:12}}>Send QR</Text>
               </TouchableOpacity>
                </View>
            </View>
            
    </View>
    )
}

export default CameraScreen

const styles= StyleSheet.create({
  bottomTextContainer:{
    paddingHorizontal:40,
    borderTopColor:"gray",
    borderTopWidth:0.7,
    backgroundColor:"white"
},
btn:{
    height:35,
    width: 90,
    borderWidth:2,
    borderColor:"blue",
    borderRadius:3,
    marginHorizontal:15,
    marginBottom:10
},
btntextContainer:{
   flexDirection:'row',
   marginVertical:15
}
})