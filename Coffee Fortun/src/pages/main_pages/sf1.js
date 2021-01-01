import React from 'react';
import { View, Text,ImageBackground,Image,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';

const sf1 = (props) => {
   const goto_kisi_1 = () => {
        props.navigation.navigate('kisi_1');
    };
    const goto_kisi_2 = () => {
      props.navigation.navigate('kisi_2');
  };
  const goto_kisi_3 = () => {
    props.navigation.navigate('kisi_3');
};
const goto_kisi_4 = () => {
  props.navigation.navigate('kisi_4');
};
const goto_kisi_5 = () => {
  props.navigation.navigate('kisi_5');
};
const goto_kisi_6 = () => {
  props.navigation.navigate('kisi_6');
};
const goto_kisi_7 = () => {
  props.navigation.navigate('kisi_7');
};
const goto_kisi_8 = () => {
  props.navigation.navigate('kisi_8');
};

const goto_yuz = () => {
  props.navigation.navigate('yuz');
};
const goto_el = () => {
  props.navigation.navigate('el');
};
const goto_kahve = () => {
  props.navigation.navigate('kahve');
};
const goto_tarot = () => {
  props.navigation.navigate('tarot');
};

const goto_ruya = () => {
  props.navigation.navigate('ruya');
};
const goto_burc = () => {
  props.navigation.navigate('burc');
};

  return (
    <View style={styles.container}>
  
           <Image style={styles.iconresimi} source={require('../../assets/images/icon/sf1icon.png')}/>      
  
            <ScrollView>
         <View style={styles.sckrollcontainer1}>
           <Text style={{marginLeft: 15}}>Falcılarımız</Text>
         <ScrollView
           style={styles.sckroll1}
           horizontal={true}>
         
         <TouchableOpacity
      onPress={goto_kisi_1} >
<View style={styles.kisi_kapsayici}>
         <Image style={styles.kisi_resim} source={require('../../assets/images/kisiler_ile_alakali/kisi_1/tm.png')}/>
         <Text>mustafa</Text>
         </View>
      </TouchableOpacity> 
         
      <TouchableOpacity
      onPress={goto_kisi_2} >
     <View style={styles.kisi_kapsayici}>
         <Image style={styles.kisi_resim} source={require('../../assets/images/kisiler_ile_alakali/kisi_2/tm2.png')}/>
         <Text>hacer</Text>
         </View>
      </TouchableOpacity> 
    
      <TouchableOpacity
      onPress={goto_kisi_3} >
   <View style={styles.kisi_kapsayici}>
         <Image style={styles.kisi_resim} source={require('../../assets/images/kisiler_ile_alakali/kisi_3/tm3.png')}/>
         <Text>mustafa</Text>
         </View>
      </TouchableOpacity>   
      
      <TouchableOpacity
      onPress={goto_kisi_4} >
    <View style={styles.kisi_kapsayici}>
         <Image style={styles.kisi_resim} source={require('../../assets/images/kisiler_ile_alakali/kisi_4/tm4.png')}/>
         <Text>mustafa</Text>
         </View>
      </TouchableOpacity> 
     
      <TouchableOpacity
      onPress={goto_kisi_5} >
 <View style={styles.kisi_kapsayici}>
         <Image style={styles.kisi_resim} source={require('../../assets/images/kisiler_ile_alakali/kisi_5/tm5.png')}/>
         <Text>mustafa</Text>
         </View>
      </TouchableOpacity> 
        
      <TouchableOpacity
      onPress={goto_kisi_6} >
 <View style={styles.kisi_kapsayici}>
         <Image style={styles.kisi_resim} source={require('../../assets/images/kisiler_ile_alakali/kisi_6/tm6.png')}/>
         <Text>mustafa</Text>
         </View>
      </TouchableOpacity> 
        
      <TouchableOpacity
      onPress={goto_kisi_7} >
    <View style={styles.kisi_kapsayici}>
         <Image style={styles.kisi_resim} source={require('../../assets/images/kisiler_ile_alakali/kisi_7/tm7.png')}/>
         <Text>mustafa</Text>
         </View>
      </TouchableOpacity> 
     
      <TouchableOpacity
      onPress={goto_kisi_8} >
      <View style={styles.kisi_kapsayici}>
         <Image style={styles.kisi_resim} source={require('../../assets/images/kisiler_ile_alakali/kisi_8/tm8.png')}/>
         <Text>mustafa</Text>
         </View>
      </TouchableOpacity> 
   
         
           </ScrollView>
         </View>
         
         <View style={styles.sckrollcontainer2}>
           <Text style={{marginLeft: 15}}>Fall Çeşitleri</Text>
           <ScrollView
           style={styles.sckroll2}
           horizontal={true}>
         
         <TouchableOpacity
      onPress={goto_yuz} >
<View style={styles.fall_cesitleri_1_kapsayici}>
         <Image style={styles.fall_cesitleri_1} source={require('../../assets/images/fallar_ile_alakali/fal_yuz/yuz.png')}/>
         <Text style={styles.fall_cesitleri_1_yazi}>Yuz Falı </Text>
         </View>
      </TouchableOpacity> 
         
      <TouchableOpacity
      onPress={goto_el} >
 <View style={styles.fall_cesitleri_1_kapsayici}>
         <Image style={styles.fall_cesitleri_1} source={require('../../assets/images/fallar_ile_alakali/fal_el/el.png')}/>
         <Text style={styles.fall_cesitleri_1_yazi}>Yuz Falı </Text>
         </View>
      </TouchableOpacity> 
        
      <TouchableOpacity
      onPress={goto_kahve} >
 <View style={styles.fall_cesitleri_1_kapsayici}>
         <Image style={styles.fall_cesitleri_1} source={require('../../assets/images/fallar_ile_alakali/fal_kahve/kahve.png')}/>
         <Text style={styles.fall_cesitleri_1_yazi}>Yuz Falı </Text>
         </View>
      </TouchableOpacity> 
        
      <TouchableOpacity
      onPress={goto_tarot} >
<View style={styles.fall_cesitleri_1_kapsayici}>
         <Image style={styles.fall_cesitleri_1} source={require('../../assets/images/fallar_ile_alakali/fal_tarot/tarot.png')}/>
         <Text style={styles.fall_cesitleri_1_yazi}>Yuz Falı </Text>
         </View>
      </TouchableOpacity> 
         
         
           </ScrollView>
         </View>
         
         <View style={styles.sckrollcontainer3}>
           <Text style={{marginLeft: 15}}>Gizemli Fallar</Text>
          <ScrollView
           style={styles.sckroll3}
           horizontal={true}>
         
         <TouchableOpacity
      onPress={goto_ruya} >
  <ImageBackground style={styles.fall_cesitleri_2} 
          source={require('../../assets/images/fallar_ile_alakali/fal_ruya/ruya.jpg')}>
          <View>
          <Text style={styles.baslik}>
           nükleeeer silah sistemleri 
         </Text>
         <Text style={styles.aciklama}>
           bismillahirahmanirahim
         </Text>
          </View>
          </ImageBackground>
      </TouchableOpacity> 
        
         
      <TouchableOpacity
      onPress={goto_burc} >
 <ImageBackground style={styles.fall_cesitleri_2} 
          source={require('../../assets/images/fallar_ile_alakali/fal_burc/uzunburc.jpg')}>
          <View>
         <Text style={styles.baslik}>
           bismillahirahmanirahim
         </Text>
         <Text style={styles.aciklama}>
           bismillahirahmanirahim
         </Text>
          </View>
          </ImageBackground>
      </TouchableOpacity> 
         
         
           </ScrollView>
         </View>
         
      </ScrollView>
   
    </View>
   
  );
}

export default sf1;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f8f7f3',
  },
  iconresimi: {
   width: 80,
   height: 80,
   marginTop: 20,
   marginLeft: 20,
  },
  sckrollcontainer1:{
    flexWrap: "wrap",
    marginTop: 25,
  },
  sckrollcontainer2:{
    flexWrap: "wrap",
    marginTop: 55,
  },
  sckrollcontainer3:{
   // flexWrap: "wrap",
    marginTop: 65,
  },
  sckroll1:{
    width: '100%',
    height: 100,
    backgroundColor: '#1aa3ff',
  },
  sckroll2:{
    width: '100%',
    height: 160,
    backgroundColor: '#006666',
  },
  sckroll3:{
    width: '100%',
    height: 180,
    backgroundColor: '#ff9900',
  },
  kisi_kapsayici:{
width: 100,
height: 100,
marginLeft: 5,
backgroundColor:'#004d80',
flexWrap: "wrap",
justifyContent: 'center',
alignItems: 'center',
},
kisi_resim:{
width: 70,
height: 70,
marginTop: 0,
marginLeft: 15,
},
fall_cesitleri_1_kapsayici:{
flexWrap: "wrap",
width: 132,
height: 160,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#0099ff',
marginLeft: 4,

},
fall_cesitleri_1:{
width: 132,
height: 132,
marginTop: -2,
},
fall_cesitleri_1_yazi:{
marginTop: 5,
 
},
fall_cesitleri_2:{
width: 380,
height: 170,
margin: 5,
},
baslik:{
color: '#fff',
},
aciklama:{
color: 'blue',
}
});
