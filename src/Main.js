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
import Common from './components/common/index'
import { useTheme } from 'react-native-paper';
const DEVICE_WIDTH = Dimensions.get('window').width;


const Main=()=>{
  const theme=useTheme();
  const [showSlider,setShowSlider]=useState(false);
  const [respond,setRespond]=useState({
    rate:0,comment:false,share:0
})
 
const ratePress=()=>{

    setRespond({
      rate:respond.rate+1,
      comment:respond.comment,
      share:respond.share

    })


}
const onRateLongPress=()=>{
  setShowSlider(true);
}
const onSlide=(value)=>{
  setRespond({
    rate:value,
    comment:respond.comment,
    share:respond.share

  })
}
const commentPress=()=>{

  setRespond({
    rate:respond.rate,
    comment:!respond.comment,
    share:respond.share

  })
}

const sharePress=()=>{

  setRespond({
    rate:respond.rate,
    comment:respond.comment,
    share:respond.share+1

  })
}


  return(
    <React.Fragment>
    <SafeAreaView>

      <View style={[styles.headerContainer,{
         borderBottomColor:theme.colors.disabled
      }]}>
       
      <View style={styles.headerContainer_item}>
        <Common.backbutton
        onPress={()=>Alert.alert('BackPressed')}/>
         </View>


        <View style={styles.headerContainer_item}>
          <Text style={{fontSize:20,fontWeight:'600'}}>Comments</Text>
         </View>


        </View>


        <View style={styles.body}>
        
        <Common.post
          data={respond}
          onRatePress={ratePress}
          onRateLongPress={onRateLongPress}
          onCommentPress={commentPress}
          onSharePress={sharePress}/>

        </View>
        
    </SafeAreaView>
    <Common.slider
    show={showSlider}
    onClosed={()=>setShowSlider(!showSlider)}
    rateChange={(value)=>onSlide(value)}
    />
  
  
    </React.Fragment>
  )
}
const styles=StyleSheet.create({
headerContainer:{
  width:DEVICE_WIDTH,
  height:50,
  flexDirection:'row',
  justifyContent:'flex-start',
 
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