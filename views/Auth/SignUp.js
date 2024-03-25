import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, Alert,KeyboardAvoidingView,Platform } from 'react-native';
import {auth} from '../database/Firebase';
import { useState,useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// firebase imports
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function SignUp({navigation}) {

  // ************************************************ Declarations **************************************
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [confirmPassword,setConfirmPassword] = useState()
  const [isFormValid,setIsFormValid] = useState(false)
  const [errors, setErrors] = useState({}); 


  useEffect(() => { 
  
    // Trigger form validation when name,  
    // email, or password changes 
    validateForm(); 
}, [email,password,confirmPassword]);


// Form validation
const validateForm = () => { 
 
  let errors = {}; 
 
  // Validate email field 
  if (!email) { 
      errors.email = 'Email is required.'; 
  } else if (!/\S+@\S+\.\S+/.test(email)) { 
      errors.email = 'Email is invalid'; 
  } 
  // Validate password field 
  if (!password) { 
      errors.password = 'Password is required'; 
  } else if (password.length < 6) { 
      errors.password = 'Password must be at least 6 characters'; 
  } 
  // matching confirm password
  if(!(password == confirmPassword)){
    errors.password = 'Both Passwords must match  '
  }
  // Set the errors and update form validity 
  setErrors(errors); 
  setIsFormValid(Object.keys(errors).length === 0); 
}; 


  //  On press of create account button
  const onCreateAccount = async ()=>{
    if(isFormValid){

      await createUserWithEmailAndPassword(auth, email,password)
      .then((userCredential) => {
        console.log("Succesfull",userCredential);
        navigation.navigate('Login');
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error Code == ',errorCode)
      console.log('Error Message == ',errorMessage)
      Alert.alert(errorMessage)
      // ..
    });
  }
  else{
    Alert.alert("Invalid Form ! ")
  }
}

// already have an account --> pressing login
  const onLogIn = () => {
    navigation.navigate('Login');
  }

  //  ------------------------------------------------------ RETURN ----------------------------------------------------
  return (

    <View style={styles.container}>


    <KeyboardAwareScrollView keyboardShouldPersistTaps='never'>



      <View style={styles.topcontainer}>
        <View style={{height:150,width:150,}}>

        {Object.values(errors).map((error, index) => ( 
          <Text key={index} style={styles.error}> 
                      {error} 
                  </Text> 
              ))} 
        </View>
      {/* <Image
        style={styles.tinyLogo} 
        source={require('../../assets/logo3.jpg')}
      /> */}
      </View>
      
      <View style={styles.midcontainer}>
        
        {/* Email Field */}
        <View style={styles.fieldcont}>

            <Image
            style={styles.fieldsLogo}
            source={require('../../assets/mailicon.png')}
            />
            <TextInput placeholder='email' style={styles.inputfields} onChangeText={userEmail => setEmail(userEmail)}>
            </TextInput>
        </View>

        {/* USERnAME FIELD */}
       {/* <View style={styles.fieldcont}>

        <Image
        style={styles.fieldsLogo}
        source={require('../../assets/usericon.png')}
        />
        <TextInput placeholder='Username' style={styles.inputfields}>
        
        </TextInput>

        </View> */}

        {/* PASSWORD FIELD */}
       <View style={styles.fieldcont}>

        <Image
        style={styles.fieldsLogo}
        source={require('../../assets/2.png')}
        />
        <TextInput placeholder='Password' style={styles.inputfields} onChangeText={password => setPassword(password) }>
        {/* <FontAwesomeIcon icon="fa-regular fa-user" size="2xs" style={{color: "#545463",}} /> */}
        </TextInput>
        </View>

        {/* Confirm Password FIELD */}

       <View style={styles.fieldcont}>
        <Image
        style={styles.fieldsLogo}
        source={require('../../assets/2.png')}
        />
        <TextInput placeholder='Repeat your password' style={styles.inputfields} onChangeText={confirmPassword => setConfirmPassword(confirmPassword) }>
        {/* <FontAwesomeIcon icon="fa-regular fa-user" size="2xs" style={{color: "#545463",}} /> */}
        </TextInput>
        {/* <MaterialCommunityIcons  name="alert-circle" size={20} color="red" ></MaterialCommunityIcons> */}
        </View>
        
       

        <TouchableOpacity style={styles.button} onPress={onCreateAccount}>
        <Text style={{color: 'rgb(84, 84, 99)', fontSize: 16 , opacity: isFormValid ? 1 : 0.5}}>Create Account</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.bottomcontainer}>
        <Text style={{color: 'rgb(84, 84, 99)', fontSize: 16}}> Already have an account? </Text>
        <TouchableOpacity  onPress={onLogIn}>
            <Text style={{color: 'rgb(80, 200, 120)', fontSize: 18}}> LogIn</Text>
        </TouchableOpacity>
        
      </View>
      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  topcontainer:{
    flex:0.30,
    // backgroundColor:'green',
    alignItems: 'center',
    justifyContent:'flex-end'
  },

  midcontainer:{
    flex:0.50,
    // backgroundColor:'blue',
    alignItems: 'center',
    justifyContent:'center'
  },
  bottomcontainer:{
    flex:0.20,

    // backgroundColor:'red',  
    marginTop:100,
    alignItems: 'center',
    justifyContent:'flex-end',
  },
  tinyLogo:{
    height:150,
    width:150,
    backgroundColor:'white',
    borderColor:'white'
  },
  fieldsLogo:{
    height:20,
    width:20,
    // backgroundColor:'white',
    // borderColor:'white'
  },
  fieldcont:{
    // flex:1,
    borderColor:'red',
    flexDirection:'row',
    alignItems:'baseline'
  },
  inputfields:{
    width:220,
    height:40,
    margin:10,
    color:'gray',
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'gray'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    // margin:10,
    marginTop:20,
    width:230,
    height:40,
    borderRadius:20
  }, 
  error: { 
      display:'flex',
      
      justifyContent:'center',
      color: 'red', 
      fontSize: 13,
      backgroundColor:'pink', 
      padding:10,
      borderRadius:20,
      marginTop:10,
      alignItems:'center',
  },
});
