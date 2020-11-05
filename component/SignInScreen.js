import React,{useState} from 'react'
import {Text, View, StyleSheet,TouchableOpacity, TextInput, Image } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import sign from '../assets/sign.jpg'
import {firebase} from '../firebase/config'

function RegisterScreen({navigation}) {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    // const [logging, setlogging] = useState(false),
    const onLoginPress = () => {
        // setlogging(true),
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((response)=>{
              console.log(response)
              navigation.navigate("HomeScreen")
          }).catch((err)=>{
              console.log(err)
          })   
    }       
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView >
            <Image source={sign} style={styles.image} />
            <View style={styles.formContainer}>
            <TextInput onChangeText={(text)=>setEmail(text)} value={email} style={styles.inputFields}  placeholder='Email' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput secureTextEntry onChangeText={(text)=>setPassword(text) } value={password} style={styles.inputFields}  placeholder='Password' textAlign='right' /> 
            <View style={styles.btnContainer}>
            <TouchableOpacity onPress={onLoginPress} style={styles.btn}>
                <Text style={styles.btnText}>SIGN IN</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.resetPassword}  >
                <Text>Forgot?</Text>
                <TouchableOpacity>
                    <Text>Reset Passord</Text>
                    <View style={{ height:2, width:94, backgroundColor:"blue"}}  />
                </TouchableOpacity>

            </View>
            </View> 
            </KeyboardAwareScrollView>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:10
    },
    image:{
        height:240,
        width:400,
    },
    formContainer:{
        flex:4
       
    },
    btnContainer:{
        flex:3
    },
    inputFields:{
        fontSize:17,
        color:"black",
        marginVertical:10,

        paddingRight:15,
        height: 40
    }, border:{
        width: 350,
        borderColor:"gray",
        borderWidth:.3,
        alignSelf:"center"
    },
    btn:{
        backgroundColor:'#F8B806',
        height: 50,
        width: 340,
        alignSelf:"center",
        marginVertical:30,
        borderRadius:5
        
    },
    btnText:{
        alignSelf:"center",
        marginVertical:15,
        fontSize:17,
        fontWeight:"bold"

    },
    resetPassword:{
        flexDirection:"row",
        marginLeft:20,
        flex:3
    }

})
