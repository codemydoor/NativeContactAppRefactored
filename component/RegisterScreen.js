import React,{useState} from 'react'
import {Text, View, StyleSheet,TouchableOpacity, TextInput ,Modal, ActivityIndicator} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {firebase} from '../firebase/config'

function RegisterScreen({navigation}) {
    const [fullName, setFullName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [phoneNumber, setPhoneNumber]=useState('')
    const [role, setRole]=useState('')
    const [twitter, setTwitter]=useState('')
    const [linkedIn, setLinkedIn]=useState('')
    const [loader, setLoader]=useState(false)

    const onRegister =()=>{
        firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(),password)
        .then((response)=>{
            console.log(response)
            navigation.navigate("CameraScreen")
            
        })
        .catch((err)=>{
            console.log(err)
        })
       
       
      
    }
    return (
        <View>     
            <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.profileContainer}>
                <AntDesign style={{alignSelf:"center"}} name="user" size={50} color="blue" />
                <Text style={styles.profileText}>ADD PROFILE PHOTO</Text>
                </View>
            </TouchableOpacity>
          
            </View>
            <KeyboardAwareScrollView >
            <View style={styles.formContainer}>
            <TextInput onChangeText={(text)=>setFullName(text)} value={fullName} style={styles.inputFields}  placeholder='Full Name' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput onChangeText={(text)=>setEmail(text)} value={email} style={styles.inputFields}  placeholder='Email' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput secureTextEntry onChangeText={(text)=>setPassword(text) } value={password} style={styles.inputFields}  placeholder='Password' textAlign='right' /> 
            <View style={styles.border}></View>
            <TextInput onChangeText={(text)=>setPhoneNumber(text)} value={phoneNumber} style={styles.inputFields}  placeholder='Phone Number' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput onChangeText={(text)=>setRole(text)} value={role} style={styles.inputFields}  placeholder='Role' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput onChangeText={(text)=>setTwitter(text)} value={twitter} style={styles.inputFields}  placeholder='Twitter' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput onChangeText={(text)=>setLinkedIn(text)} value={linkedIn} style={styles.inputFields}  placeholder='LinkedIn' textAlign='right' />
            <View style={styles.border}></View>
            <TouchableOpacity onPress={onRegister } style={styles.btn}>
                <Text style={styles.btnText}>REGISTER</Text>
                <ActivityIndicator animating={false}  />
            </TouchableOpacity>
            </View>
                
            </KeyboardAwareScrollView>
        </View>  
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        height: 190,
        backgroundColor:"#E8E8E8"

        
    },
    profileContainer:{
        alignSelf:"center",
        marginTop:40
        
    },
    profileText:{
        marginVertical:10,
        alignSelf:"center",
        color:"blue",
        fontWeight:"bold"
    },
    inputFields:{
        fontSize:17,
        color:"gray",
        marginBottom:10,
        paddingRight:5,
        height: 40
    }, border:{
        width: 350,
        borderColor:"gray",
        borderWidth:1,
        alignSelf:"center"
    },
    btn:{
        backgroundColor:'#F8B806',
        height: 50,
        width: 340,
        alignSelf:"center",
        marginVertical:50,
        borderRadius:5
        
    },
    btnText:{
        alignSelf:"center",
        marginVertical:15,
        fontSize:17,
        fontWeight:"bold"

    }
})
