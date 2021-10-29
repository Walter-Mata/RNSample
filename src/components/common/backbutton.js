import React from 'react';
import {

    TouchableOpacity,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';

const backbutton=({onPress})=>{
    return(
    <React.Fragment>
              <TouchableOpacity onPress={onPress}>

                <Icon name="chevron-left" size={30} color="#900" />

                </TouchableOpacity>
    </React.Fragment>
    )
}

export default backbutton;