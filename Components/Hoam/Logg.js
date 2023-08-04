
import  React, {useState} from 'react';
import Home from '../Hoam/Home.js'
import {
  ScrollView,
  StyleSheet,
  Text,
 TouchableOpacity,
 TextInput,
  View,
  ImageBackground,
  Image
} from 'react-native';

const Logg = ({navigation}) =>{    
const og = require("./2bg.png");
const bg = require("./back.png");
const pro = require("./logoofin.png");
const checkLogin = () => {
    setErrorText("");
    console.log("checkLogin clicked");
    if (password.length === 0) {
      setColor(styles.err);
      setErrorText("Please Enter An Password");
    } else if (email.length === 0) {
      setColor(styles.err);
      setErrorText("Please Enter An Email");
    } else if (password !== selectedPassword) {
      setColor(styles.err);
      setErrorText("Please Enter Correct Password");
    } else if (email !== selectedEmail) {
      setErrorText("Please Enter Correct Email ID");
    } else if (password.length && email.length === 0) {
      setColor(styles.err);
      setErrorText("Please enter email id or password ");
    } else if (password === selectedPassword && email === selectedEmail) {
      setColor(styles.err2);
      setErrorText(" Login Successful!! ");
      navigation.navigate('Home');

    } else {
      console.log('checkLogin Clicked ')
    }
  };
  
  const clear =()=>{
    setErrorText("");
  }
  
  
  const styles = StyleSheet.create({
    err: {
      backgroundColor: 'red',
      borderWidth: 3,
    borderColor: 'black',
      borderRadius:10,
      padding: 10,
      margin: 10,
      borderWidth:3,
      height:80,
      width:230,
      alignSelf:'center'
    },
    err2: {
      backgroundColor: 'green',
      borderWidth: 3,
    borderColor: 'black',
      borderRadius:10,
      padding: 10,
      margin: 10,
      borderWidth:3,
      height:100,
      width:230,
      alignSelf:'center'
    },
    succ: {
      backgroundColor: "green",
      border: "solid",
      borderRadius: 10,
      padding: 25,
      margin: 20
    },

    container: {
      borderWidth: 1,
      alignSelf: "center",
      justifyContent: "center",
      borderRadius: 50,
      margin: "5%",
      padding: 40,
      height: 500,
      width: 300,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
      marginTop: 25,
    
    },
    ErrorText:{
       alignSelf:'center',
       fontWeight:'bold',
       fontSize:12,
       fontFamily:'Tahoma'
    
    },
    box: { borderWidth: 2, borderRadius: 7, padding: 3 },
    text: { fontWeight: "bold", marginTop: 30 }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("adi");
  const [selectedPassword, setSelectedPassword] = useState("adi");
  const [color, setColor] = useState(styles.err);

    return(
      <View>
       <ImageBackground source={og} style={{ height: 1000 }}> 
          <Text
            style={{
              alignSelf: "center",
              fontSize: 50,
              marginTop: 40,
              fontFamily: "Tahoma"
            }}
          >
            Login
          </Text>
          <Image
            source={pro}
            style={{
              height: 100,
              width: 100,
              borderWidth: 2, 
              borderColor: 'black', 
              borderRadius: 20,
              alignSelf: 'center',
              paddingHorizontal: 30, 
              marginTop: 40,
              marginBottom: 20,
            }}
          />
          <View
            style={{
              border: "solid",
              borderRadius: 12,
              width: 300,
              alignSelf: "center",
              shadowColor: "black",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.5,
              shadowRadius: 8,
              elevation: 10,
              
            }}
          >
            <TextInput
              placeholder="Enter Email id "
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              style={{
                alignSelf: 'center',
                marginTop: 25,
                borderWidth: 3,
                borderColor: 'black',
                borderRadius: 10,
                height: 50,
                fontFamily: 'sans-serif',
                color: 'black',
                padding: 10,
                width: 220,
              }}
            />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
              keyboardType="default"
              style={{
                alignSelf: 'center',
  marginTop: 25,
  borderWidth: 3,
  borderColor: 'black',
  borderRadius: 10,
  height: 50,
  fontFamily: 'sans-serif',
  color: 'black',
  padding: 10,
  width: 220,
              }
          }
            />
  
            {errorText.length > 0 && (
              <View>
                  
                <View style={color}>
                  <Text style={styles.ErrorText}>{errorText}</Text>
                 <TouchableOpacity onPress={clear}><Text>X</Text></TouchableOpacity> 
                </View>
                
              </View>
            )}
            <TouchableOpacity onPress={checkLogin}>
              <Text
                style={{
                  alignSelf: 'center',
    marginTop: 30,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'black',
    width: 112,
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
                }}
              >Login </Text>
            </TouchableOpacity>
          </View>
   </ImageBackground>
  </View>
        
    );
}
export default Logg;
