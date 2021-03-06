import React, { useState } from 'react';
import {ImageBackground,TouchableOpacity,Dimensions,TextInput,View,StyleSheet, Text, Image} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Foundation';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const post=({  
    data,
    onRatePress,
    onRateLongPress,
    onCommentPress,
    onSharePress
})=>{

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
              
                <View>
                         <Text style={styles.postBody_text}>

                            {`Far concluded not his something extermity. Want four we face an he gate. On he of played he...`}                 
                            </Text>
                            <Text style={styles.postBody_text}>{`more`}</Text>
                              </View>
                                          <View> 
                                            <ImageBackground 
                                            source={require('../../assets/images/post_image.jpg')}
                                            style={{
                                                width:DEVICE_WIDTH,
                                                height:(25/100)*(DEVICE_HEIGHT),
                                               
                                                }}
                                                imageStyle={{
                                                    overflow: 'visible',
                                                    resizeMode:'stretch',
                                                }}/>
                                      </View>



                                                    <View style={{paddingLeft:10,paddingRight:10}}>
                                                <View style={styles.responseContainer}>
                                                      
                                                      
                                                        <View style={styles.responseContainer_item}>
                                                            <Icon 
                                                            name="heart"
                                                            size={30} 
                                                            t
                                                            color="#900" />
                                                        
                                                            <Text style={{marginLeft:10}}>{data.rate}</Text>

                                                            </View>
                                                            <View style={styles.responseContainer_item}>

                                                            <Text>{`${data.share} shares`}</Text>
                                                            </View>
                                                    </View>

                                                    <View style={[
                                                        styles.responseContainer,{
                                                            borderBottomWidth:0,
                                                            borderBottomColor:'#fff'}]}>
                                                      
                                                      
                                                      
                                                      <TouchableOpacity 
                                                      onPress={onRatePress}
                                                      onLongPress={onRateLongPress}
                                                      style={styles.responseContainer_item}>
                                                        
                                                         
                                                          <Icon name="heart" size={30} color="#900" />
                                                      
                                                          <Text style={{marginLeft:10}}>Rate</Text>

                                                          </TouchableOpacity>
                                                          <TouchableOpacity 
                                                           onPress={onCommentPress}
                                                          style={styles.responseContainer_item}>
                                                        
                                                        <Icon name="comment" size={30} color="#000" />
                                                    
                                                        <Text style={{marginLeft:10}}>Comment</Text>

                                                        </TouchableOpacity>

                                                        <TouchableOpacity 
                                                        onPress={onSharePress}
                                                        style={styles.responseContainer_item}>
                                                        
                                                        <Icon name="share" size={30} color="#000" />
                                                    
                                                        <Text style={{marginLeft:10}}>Share</Text>

                                                        </TouchableOpacity>
                                                  </View>


                                                        
                                                            <Text>Comments</Text>

                                                            <View style={styles.commentBody}>

                                                            <View style={styles.postHeader_item}>
                                                            <Avatar.Image size={70} source={require('../../assets/images/avatar_2.jpg')} />
                                                       
                                                              
                                                                </View>
                                                                <View style={[styles.postHeader_item ,{
                                                                    marginLeft:10,
                                                                    width:(70/100)*DEVICE_WIDTH,
                                                                    borderRadius:10,
                                                                    backgroundColor:'#d3d3d3'}]}>
                                                                    <Text style={styles.name}>Carla Sposito</Text>
                                                                    
                                                                    <Text style={[styles.postBody_text,{
                                                                        paddingLeft:0,paddingRight:0
                                                                    }]}>
                                                                    {`Far concluded not his something extermity. Want four we face an he gate. On he of played he...`}        

                                                                    </Text>
                                                                 
                                                                   

                                                                </View>
                                                             
                                                            </View>
                                                   

                                                            </View>
                                               


                             <View style={{position:'absolute',
                                 height:100,
                                 paddingLeft:10,
                                marginTop:(65/100)*DEVICE_HEIGHT,
                                width:DEVICE_WIDTH}}>
                               
                               <View style={styles.commentBody}>

                                <View style={styles.postHeader_item}>
                                <Avatar.Image size={70} source={require('../../assets/images/avatar_2.jpg')} />

                                
                                    </View>

                                    <View style={styles.postHeader_item}>
                                        <TextInput
                                        style={styles.input}
                                        placeholder="Add a comment"/>
                                
                                    </View>
                                            </View>
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
             
            },
            
            responseContainer:{
                marginTop:10,
                justifyContent:'space-between',
                flexDirection:'row',
         
                borderBottomColor:'#d3d3d3',
                borderBottomWidth:0.7,
                height:50
                },
                responseContainer_item:{
                          fontWeight:'400',
                        fontSize:14,
                        alignItems:'center',
                        flexDirection:'row',
                        justifyContent:'flex-start'
                        
                },

                commentBody:{
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    width:DEVICE_WIDTH,
                    alignItems:'center',
                    marginTop:10
                   // height:300,
              
                    },
                

                    input: {
                        height: 40,
                        margin: 12,
                        borderWidth:1,
                        borderRadius:20,
                        paddingLeft: 10,
                        width:(70/100)*DEVICE_WIDTH
                      },

})
export default post;