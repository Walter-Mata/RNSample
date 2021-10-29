import React, {useContext,useState,useRef,useEffect} from 'react'
import {
  Image,
  Dimensions,
  StyleSheet,
  View, 
  SafeAreaView, 
  Text,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Common from './components/common/index'
const DEVICE_WIDTH = Dimensions.get('window').width;


const Main=()=>{

 
  return(
    <SafeAreaView>

      <View style={styles.headerContainer}>
       
      <View style={styles.headerContainer_item}>
        <Common.backbutton
        onPress={()=>Alert.alert('BackPressed')}/>
         </View>


        <View style={styles.headerContainer_item}>
          <Text style={{fontSize:20,fontWeight:'600'}}>Comments</Text>
         </View>


        </View>


        <View style={styles.body}>
        <Common.post/>

        </View>

    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
headerContainer:{
  width:DEVICE_WIDTH,
  height:50,
  flexDirection:'row',
  justifyContent:'flex-start',
  borderBottomColor:'#d3d3d3',
  borderBottomWidth:0.9,
  alignItems:'center'


},
headerContainer_item:{
  paddingLeft:20,
  width:DEVICE_WIDTH/3
},
body:{

 flex:1,
  flexDirection:'column',
  justifyContent:'flex-start',


}



})
export default Main;