import React, {useState, useEffect,useLayoutEffect} from 'react';

import { Platform, NativeModules ,Dimensions,StatusBar} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { View , Text,TouchableOpacity,ImageBackground,StyleSheet,FlatList,Image} from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { color } from '@cloudinary/url-gen/qualifiers/background';





const screenWidth = Dimensions.get('window').width;
// **************************************************************** Main ********************************

export default function Inbox  ({navigation,route}){

    // const bg = require('../assets/whatsapp/bg2.png');
    const bg = require('../assets/whatsapp/bgg.jpg');
    const user= route.params;
    // console.log(user)

    useLayoutEffect(() => {

        navigation.setOptions({
            headerTintColor: 'white',
            backgroundColor: 'white',
            headerLeft: inboxHeaderLeft,
            headerTitle: inboxHeader,
            headerRight: inboxHeaderRight,

      }, [navigation]);
    });

      const back = () =>{
        // navigation.navigate('Chat')
        navigation.pop()
    }

      const inboxHeader =  () => {
        const screenWidth = Dimensions.get('window').width;
        return(
          <View style={{ flex:1,flexDirection: 'row',width:'90%',alignItems: 'center', justifyContent:'space-between',}}> 
    
            <View style={{flex:0.15 ,marginRight:18}}>
                    <Image  style={styles.chatImage}  source = {user.item.src} />
            </View>

            <View style={{flex:0.85,flexDirection:'row',alignItems:'center',justifyContent:'flex-start' ,}}>
                <Text style={{ color: 'black', fontSize: 18,fontWeight:'400',}}> {user.item.title}</Text>
            </View>     
        </View>          
        )}

        const inboxHeaderLeft = () =>( 
            <TouchableOpacity onPress={back}>
                <Icon1 name="arrow-back"  size={25} color="black" style={{ marginLeft:3,marginRight:0, }} />
            </TouchableOpacity>
            
        )

        const inboxHeaderRight = () => (
            <View style={{flex:1,flexDirection:'row',width:'100%',justifyContent:'flex-end',alignItems:'center', }}> 
                <TouchableOpacity>
                    <Icon3 name="video-outline"  size={27} color="black" style={{ marginRight: 10, }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon3 name="phone-outline"  size={23} color="black" style={{ marginRight: 10, }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon1 name="more-vert"  size={23} color="black" style={{ marginRight: 10, }} />
                </TouchableOpacity>
                </View>
                )
          //**************************************************RETURN******************************************************** */
    return( 
       
        <View style={styles.container}> 

                <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
                
                <View style={{flex:0.93,flexDirection:'row',padding:10,}}>
                    {/* <Text>{user[0]}</Text> */}

                <FlatList
                    horizontal={false}
                    data={user.item.msg}
                    keyExtractor={item=>item.key}
                    
                    renderItem={({item })=>(
                        
                    
                    <Swipeable   onHandlerStateChange={({ nativeEvent }) => {
                        if (nativeEvent.state === State.ACTIVE) {
                          handleHold();
                        }
                      }} >

                    <TouchableOpacity  >
                    <View style={{flex:1,height:'auto',backgroundColor:'white',maxWidth:'80%',padding:8,marginBottom:8,borderRadius:18}}>

                        <Text style={{color:'black' ,fontSize:14,}}> { item.msg} </Text>
                        
                        <Text style={{ color:'gray',fontSize:11,alignSelf:'flex-end'}}> {item.time} </Text>

                            

                        
                        </View>
                    
                    </TouchableOpacity>

                        </Swipeable>  

    
                    )}
                />
                   
               
        
                </View>
            
                <View style={{flex:0.07 , flexDirection:'row',width:screenWidth-8 ,paddingLeft:8,alignItems:'flex-end',paddingBottom:5}}>

                    <View style={styles.msgBox}>
                    <TouchableOpacity style={{flex:0.10,justifyContent:'center',alignItems:'center',height:20,width:20,borderRadius:50,marginLeft:4,marginRight:4}}>
                            <Text>
                                {/* <Icon1 name="emoji-emotions" size={20} color="grey" />                          */}
                                <Icon2 name="emoji-happy" size={20} color="grey" />                         
                            </Text>
                        </TouchableOpacity>

                    <TextInput placeholder='Message' style={{flex:0.70,height:40,alignItems:'center'}} >
                    </TextInput>

                    <TouchableOpacity style={{flex:0.10,justifyContent:'center',alignItems:'center',height:20,width:20,borderRadius:50,}}>
                            <Text>
                                <Icon1 name="attach-file" size={20} color="grey" />                         
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex:0.10,justifyContent:'center',alignItems:'center',height:20,width:20,borderRadius:50,}}>
                            <Text>
                                <Icon1 name="camera-alt" size={22} color="grey" />                         
                            </Text>
                        </TouchableOpacity>

                    </View>
                    
                    <TouchableOpacity style={{backgroundColor:'#25d366' ,justifyContent:'center',alignItems:'center',height:46,width:46,borderRadius:50,marginLeft:4,marginBottom:2}}>
                        <Text>
                            <Icon name="microphone" size={18} color="white" />
                        </Text>
                    </TouchableOpacity>

                    </View>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    fListContainer: {
        backgroundColor:'white', 
      // marginBottom:10,
      // borderBottomWidth:0.5,
      // borderBottomColor:'grey',
      height:80, 
      flex:1,
      flexDirection:'row'
      },
    container: {
        flex:1 ,width:screenWidth,height:'auto', flexDirection:'column', alignItems:'flex-start',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    //   tintColor:'grey',
    //   opacity:0.2
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    msgBox:{
        flex:1,flexDirection:'row',width:screenWidth-70,height:45,backgroundColor:'white',borderRadius:35,marginBottom:2,
        alignItems:'center',justifyContent:'center',paddingRight:10},
    chatImage:{

            height:35,
            width:35,
            borderRadius:50,
            resizeMode: 'cover',
            borderWidth:0.25,
            borderColor:'grey'
      
      
          },
  });
  