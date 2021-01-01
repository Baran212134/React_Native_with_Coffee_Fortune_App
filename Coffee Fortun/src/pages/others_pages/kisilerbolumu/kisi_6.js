import React from 'react';
import { Text,TouchableOpacity,StyleSheet,ImageBackground,View,ScrollView,Image} from 'react-native';

const kisi_6 = (props) => {
   const gotoTestStackScreen = () => {
        props.navigation.navigate('kisi_1');
    };
  return (
<View style={styles.container}>

 <ImageBackground style={styles.kisi_1_resim} 
        source={require('../../../assets/images/kisiler_ile_alakali/kisi_6/kisi_6.png')}>
        <View>

        <Text style={styles.isim}>
         Mehmet reis 
       </Text>

       <Text style={styles.goz}>
         300K 
       </Text>

        <Text style={styles.yazi_1}>
         nükleeeer silah sistemleri 
       </Text>

       <Text style={styles.yazi_2}>
         nükleeeer silah sistemleri 
       </Text>

       <Text style={styles.yazi_3}>
         nükleeeer silah sistemleri 
       </Text>

        </View>
        </ImageBackground>

      <Text style={{marginLeft: 10,alignSelf: 'flex-start',marginTop: 10}}>Fall Çeşitleri</Text>
           <ScrollView
           style={styles.sckroll2}
           horizontal={true}>
           
         <TouchableOpacity
       >
<View style={styles.fall_cesitleri_1_kapsayici}>
         <Image style={styles.fall_cesitleri_1} source={require('../../../assets/images/fallar_ile_alakali/fal_yuz/yuz.png')}/>
         <Text style={styles.fall_cesitleri_1_yazi}>Yuz Falı </Text>
         </View>
      </TouchableOpacity> 
         
      <TouchableOpacity
      >
 <View style={styles.fall_cesitleri_1_kapsayici}>
         <Image style={styles.fall_cesitleri_1} source={require('../../../assets/images/fallar_ile_alakali/fal_el/el.png')}/>
         <Text style={styles.fall_cesitleri_1_yazi}>Yuz Falı </Text>
         </View>
      </TouchableOpacity> 
        
      <TouchableOpacity
     >
 <View style={styles.fall_cesitleri_1_kapsayici}>
         <Image style={styles.fall_cesitleri_1} source={require('../../../assets/images/fallar_ile_alakali/fal_kahve/kahve.png')}/>
         <Text style={styles.fall_cesitleri_1_yazi}>Yuz Falı </Text>
         </View>
      </TouchableOpacity> 
        
      <TouchableOpacity
       >
<View style={styles.fall_cesitleri_1_kapsayici}>
         <Image style={styles.fall_cesitleri_1} source={require('../../../assets/images/fallar_ile_alakali/fal_tarot/tarot.png')}/>
         <Text style={styles.fall_cesitleri_1_yazi}>Yuz Falı </Text>
         </View>
      </TouchableOpacity> 
         
         
           </ScrollView>

</View>


  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 760,
    backgroundColor: '#ff0000',
    padding: 2,
    overflow: 'hidden',
    resizeMode: 'cover',
    justifyContent: 'center',
alignItems: 'center',
  },
  kisi_1_resim:{
width: '100%',
height: 430,
marginTop: 5
  },
  isim:{
marginTop: 115,
marginLeft: 155
  },
  goz:{
    marginTop: 7,
    marginLeft: 60
  },
  yazi_1:{
marginLeft: 70,
marginTop: 133
  },
  yazi_2:{
    marginLeft: 70,
    marginTop: 18
  },
  yazi_3:{
    marginLeft: 70,
    marginTop: 18
  },
  sckroll2:{
    width: '100%',
    height: 160,
    backgroundColor: '#006666',
    marginTop: 50
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
});


export default kisi_6;



/**
 * 
 *    <TouchableOpacity
    onPress={gotoTestStackScreen}
    >
      <Text style={{alignContent: 'center' , justifyContent: 'center' , fontSize: 50 }}>kisi_1</Text> 
    </TouchableOpacity>
   
 * width: '100%',
height: 500,
margin: 10
 * 
 */