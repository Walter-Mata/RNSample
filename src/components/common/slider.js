import React, {useContext,useState,useRef,useEffect} from 'react'
import {
  Image,
  Dimensions,
  StyleSheet,
  View, 
  SafeAreaView, 
  Text,
  Alert, Pressable 
} from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from "react-native-smooth-slider";
import { useTheme } from 'react-native-paper';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const slider = ({
    show,
    onClosed,
    rateChange
}) => {
 const theme=useTheme();
  return (
  
   
    <Modal
    isOpen={show}
    onClosed={onClosed}
    backdropPressToClose={true}
    style={styles.modal}
    position={'center'}
    swipeToClose={false}>
       
     
        <Slider
        minimumValue={0}
        maximumValue={1000}
        step={1}
        value={0}
        useNativeDriver={true}
        onValueChange={(value)=>rateChange(value)}
        style={styles.sliderStyle}
        trackStyle={[styles.trackStyle,{
          backgroundColor: theme.colors.primary
        }]}
        minimumTrackTintColor={theme.colors.backdrop}
        thumbStyle={[styles.thumbStyle,
        { backgroundColor: theme.colors.primary}
        ]}
        thumbImage={
          require('../../assets/images/heart-icon.png')} 


        />      
           
           
           
         
         
   
      </Modal>

  );
};

const styles = StyleSheet.create({
  sliderStyle:{
      borderRadius:30,
      width:(80/100)*DEVICE_WIDTH
  },
  trackStyle:{height:40,
    borderRadius:30,
    backgroundColor:'#fff'
  },
  thumbStyle:{
    width: 60,
    height: 60,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
    alignItems:'center',
    justifyContent:'center'
     },
  modal: {
   
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    backgroundColor:'transparent',
    width:(90/100)*DEVICE_HEIGHT,
    height:(20/100)*DEVICE_HEIGHT,
    marginTop:Platform.OS=='android'?20:0
  },
  
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});




export default slider;