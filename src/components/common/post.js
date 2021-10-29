import React from 'react';
import {ImageBackground,Dimensions,View,StyleSheet, Text, Image} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const post=({  
    onRatePress,
    onCommentPress,
    onSharePress})=>{
    return(
    <React.Fragment>
        <View style={{flex:1}}>
                  <View style={styles.postHeader}>
                     <View style={styles.postHeader_item}>
                        <Avatar.Image size={70} source={require('../../assets/images/avatar_1.jpg')} />
                            </View>

                            <View style={styles.postHeader_item}>
                                <Text style={styles.name}>andrezahilton</Text>
                                <Text style={styles.onlineIndicator}>6 min ago</Text>

                            </View>
                        </View>


                 <View style={styles.postBody}>
              
                <View style={{flex:1}}>

                         <Text style={styles.postBody_text}>

                            {`Far concluded not his something extermity. Want four we face an he gate. On he of played he...`}                 
                     
                            </Text>
                     <Text style={styles.postBody_text}>{`more`}</Text>


                     </View>

                      
                      
                        <View >

                        <ImageBackground 
                                            source={require('../../assets/images/post_image.jpg')}
                                            style={{
                                                width:DEVICE_WIDTH,
                                                height:(10/100)*(DEVICE_HEIGHT),
                                                //position:!loadedLink?'absolute':'relative', 
                                                }}
                                                imageStyle={{
                                                    overflow: 'visible',
                                                    resizeMode: 'cover',
                                                }}
                                
                                            />

                        </View>
                 


                 </View>
                 </View>
    </React.Fragment>
    )
}
const styles=StyleSheet.create({
    postHeader:{
        height:100,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-start'
        },
        postHeader_item:{
            paddingLeft:10
            },
            name:{
                fontWeight:'bold',
                color:'#000',
                fontSize:18
            },onlineIndicator:{
                fontWeight:'200',
                color:'#808080',
                fontSize:14
            },
            postBody:{
                width:DEVICE_WIDTH,
                justifyContent:'flex-start',
                flexDirection:'column',
                height:300,
             
            },
            postBody_text:{
                paddingLeft:20,
                paddingRight:20,
                fontWeight:'500',
                color:'#000',
                fontSize:15
             
            }


})
export default post;