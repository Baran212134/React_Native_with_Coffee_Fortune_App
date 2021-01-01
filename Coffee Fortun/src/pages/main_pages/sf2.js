import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import kisi_1 from '../../pages/others_pages/kisilerbolumu/kisi_1';

const sf2 = (props) => {
   const gotoTestStackScreen = () => {
        props.navigation.navigate('kisi_1');
    };
  return (

    <TouchableOpacity
    onPress={gotoTestStackScreen}
    >
      <Text>sf2</Text> 
    </TouchableOpacity>
   
  );
}

export default sf2;