import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import kisi_1 from '../../pages/others_pages/kisilerbolumu/kisi_1';

const sf3 = (props) => {
   const gotoTestStackScreen = () => {
        props.navigation.navigate('kisi_1');
    };
  return (

    <TouchableOpacity
    onPress={gotoTestStackScreen}
    >
      <Text>sf3</Text> 
    </TouchableOpacity>
   
  );
}

export default sf3;