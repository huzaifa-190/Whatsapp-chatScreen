import SafeAreaView from 'react-native-safe-area-view';
import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

// import { Modal, Text, Pressable, View } from 'react-native';
// import React, { useState } from 'react';

import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, SectionList,FlatList,Alert } from 'react-native';

// import Practice  from './Practice';




export default function Chat({navigation}) {
  
 
  // ****************************************************** DECLARATIONS ********************************

  const msgs = [[{key:0,msg:'Hello how ar you', time:'11:00 PM'},{key:1,msg:' Huzaifa here',time:'11:07 PM'}],
                [{key:0,msg:'Are you free ?', time:'6:20 PM'},{key:1,msg:'I need to talk to you', time:'6:22 PM'}],
                [{key:0,msg:'kahan ho', time:'11:02 PM'},],
                [{key:0,msg:'Met an accident ', time:'5:42 PM'},{key:1,msg:'😥😥',time:'5:43 PM'}],
                [],
                [{key:0,msg:'Aja coach snooker chlein', time:'1:22 PM'},],
                [{key:0,msg:'Okay ! see you then', time:'4:54 AM'},],
                [],
                [{key:0,msg:'Chloe theek hai , kl kr lein gey', time:'3:12 AM'},{key:1,msg:'Listen', time:'5:02 AM'}],
                [{key:0,msg:'Hey', time:'11:02 PM'},],
                [{key:0,msg:'That was a pleasent experience', time:'1:22 AM'},{key:1,msg:'I need to talk to you', time:'2:09 PM'}],
                [{key:0,msg:'AoA', time:'11:02 PM'},],

];

  const [data, setData] = useState([
    {key:0, title:'Huzaifa', msg:msgs[0], unread:msgs[0].length ,src: require("../assets/users/i1.jpg")},
    {key:1, title:'Ali Hamza',msg:msgs[1], unread:msgs[1].length,src: require("../assets/users/i2.jpg")},
    {key:2, title:'Taha Ali', msg:msgs[2], unread:msgs[2].length,src: require("../assets/users/dummy.jpg")},
    {key:3, title:'Hunain', msg:msgs[3], unread:msgs[3].length,src: require("../assets/users/i1.jpg")},
    {key:4, title:'Faizan', msg:msgs[4], unread:msgs[4].length,src: require("../assets/users/faizan.png")},
    {key:5, title:'Abdullah', msg:msgs[5],  unread:msgs[5].length,src: require("../assets/users/i2.jpg")},
    {key:6, title:'Ahmed virk', msg:msgs[6], unread:msgs[6].length,src: require("../assets/users/dummy.jpg")},
    {key:7, title:'Hafiz Umair', msg:msgs[7], unread:msgs[7].length,src: require("../assets/users/dummy.jpg")},
    {key:8, title:'Kabir', msg:msgs[8], unread:msgs[8].length,src: require("../assets/users/i1.jpg")},
    {key:9, title:'Huzaifa', msg:msgs[9], unread:msgs[9].length ,src: require("../assets/users/i1.jpg")},
    {key:10, title:'Marleen', msg:msgs[10], unread:msgs[10].length,src: require("../assets/users/dummy.jpg")},
    {key:11, title:'Hassan ❤️❤️❤️', msg:msgs[11],unread: msgs[11].length,src: require("../assets/users/i2.jpg")},
  ]);

  // *********************************************************FUNCTIONS***********************************************


  const chatPressed = (item) => {

    console.log("Chat pressed");
    // console.log(item);
    navigation.navigate('Inbox', {item:item})
  }

  const swipeToRight = () => {
    return (
      <View style={{  height:100, width:100, backgroundColor:'white', flexDirection:'row' ,  }}>
        {/* <Text> Edit </Text> */}
        <TouchableOpacity style={[{backgroundColor:'lightgreen'},styles.swipebox]}>
        <Icon name="edit" size={25} color="white" />   
        </TouchableOpacity>

        <TouchableOpacity style={[{backgroundColor:'skyblue'},styles.swipebox]}>
        <Icon name="bell-slash" size={25} color="white" />   
        </TouchableOpacity>
      </View>
    )
  }
  
  const swipeToLeft = (key) => {
    return (
      <View style={{  height:100, width:100, backgroundColor:'white', flexDirection:'row' ,  }}>

        <TouchableOpacity style={[{backgroundColor:'rgb(216, 61, 28 )'  } , styles.swipebox] } onPress={ () => onSwipeDelete(key)}>
        <Icon name="trash" size={30} color="white"  />   

        {/* <Image source={require('../assets/dd.jpg')} style={styles.swipeImage}>
        </Image>           */}
        </TouchableOpacity>
      </View>
    )
  }

  const onSwipeDelete = (key) => {

    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => { 
            console.log('Delete Pressed')
            // Filter out the item to be deleted
            const newData = data.filter(item => item.key !== key);
            setData(newData); // Update state with the new 
            console.log('Deletion successful ')

            showMessage({
              message: 'Chat Deleted Successfully ',
              duration:1300,
              backgroundColor:'rgb(220, 248, 198)',
              style: {alignItems: 'center', justifyContent: 'flex-end' ,height:85 } ,
              titleStyle: { alignItems:'center' , justifyContent:'flex-end' ,fontSize:16, color: 'rgb(37, 211, 102)' , marginTop:13, marginLeft:15 }, 
            });
            
          },
          style:'destructive'
        },
      ],
      { cancelable: true }
    );

  }

  

  //-------------------------------------------------------------- Return   -------------------------------------------------------------------------
  return(

// {/* <SafeAreaView style={{ 
//   flex: 1, 
//   paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
//  }}>  */}

<GestureHandlerRootView> 
    
    <View style={{flexDirection:'column',justifyContent:'center',height:'100%',width:'100%',}}>

    <View style={{flex:0.08,flexDirection:'row',justifyContent:'space-around',alignItems:'flex-end',height:50,width:'100%',backgroundColor:'white',borderBottomWidth:0.5,borderBottomColor:'grey'}}>
       
       
        <View style={{flex:0.1,marginLeft:6,}}>
          <TouchableOpacity>
          <Icon1 name="groups"  size={25} color="black" style={{ marginLeft:3,marginRight:0, }} />
          </TouchableOpacity>
        </ View>

        <View style={{flex:0.3,alignItems:'center',justifyContent:'center',marginRight:20,borderBottomWidth:4,borderBottomColor:'rgb(37, 211, 102)'}}>
           <Text style={{fontSize:16,fontWeight:'400',}}>chats</Text>
        </ View>

        <View style={{flex:0.3,marginRight:0}}>
            <Text style={{fontSize:16,fontWeight:'400'}}>Updates</Text>
        </ View>

        <View style={{flex:0.3,marginRight:0}}>
            <Text style={{fontSize:16,fontWeight:'400'}}>Calls</Text>
        </ View>
    </View>


    <View style={{flex:0.92,justifyContent:'center',alignContent:'center'}}>
    <FlatList
      horizontal={false}
      data={data}
      keyExtractor={item=>item.key} 
      inverted
      renderItem={({item })=>(
  
    
    <Swipeable renderLeftActions={swipeToRight}  renderRightActions={ () => swipeToLeft(item.key) }  >

      <TouchableOpacity onPress={ () => { chatPressed(item)}} >

        <View style={styles.container}>
        
        <View style={styles.left}>
    
        <Image  style={styles.chatImage}
        source = {item.src}
        
        />

        </View>

        <View style={styles.middle}>

        <Text style={{color:'black' , fontWeight:'500' , fontSize:15}}> {item.title} </Text>

        {item.msg[0] ? 
        <Text style={{color:'grey', fontSize:14}}>{item.msg[0].msg} </Text>
        : null} 

        </View>
        
        <View style={styles.right}>
        {item.msg[0] ?  
        <Text style={{color:'grey',fontSize:12}}> { item.msg[msgs[item.key].length-1].time} </Text>
        : null}
        
        
          {item.unread > 0 ? <View style={styles.unread}>
            <Text style={[styles.texts ] }> {item.unread} </Text> 
            </View> : null }
      
        </View>
      
      </View>
      </TouchableOpacity>

        </Swipeable>  
    )}
/>
</View>

</View>

  </GestureHandlerRootView>
//  </SafeAreaView>

);

}

const styles = StyleSheet.create({
    texts: {
        color:'white',
        fontSize:12
    },
    swipeText:{
      color:'white',
      fontSize:5,
    },
    container: {
        backgroundColor:'white', 
      // marginBottom:10,
      // borderBottomWidth:0.5,
      // borderBottomColor:'grey',
      height:80, 
      flex:1,
      flexDirection:'row'
      },


      left:{
        flex:0.20, 
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:3,
        // borderWidth:2,
        // borderColor:'red'
      },


    middle : {
        flex:0.55, 
        // backgroundColor:'grey',
        justifyContent:'center',
        
    },
    right : {
        flex:0.25,
        //  backgroundColor:'green',
          alignItems:'flex-end',
          padding:10
        },

    unread: {
      flex:0.50,
      height:22,
      width:22,
      alignItems:'center',
      justifyContent:'center', 
      backgroundColor:'	rgb(37, 211, 102)',
      // backgroundColor:'orange',
      borderRadius:50,
      
      
    },
   

    chatImage:{

      height:50,
      width:50,
      borderRadius:50,
      resizeMode: 'cover',
      // borderWidth:2,
      // borderColor:'rgb( 69, 237, 132)',
      // padding:8,
      


    },
    swipebox:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:15,
    },

    swipeImage:{
      height:40,
      width:40,
      tintColor:'white',
      
    }
    
});

