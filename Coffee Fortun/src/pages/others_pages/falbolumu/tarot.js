import React from 'react';
import { Text,TouchableOpacity,StyleSheet,View,Image, ImageBackground,ScrollView} from 'react-native';

const tarot = (props) => {
   const gotoTestStackScreen = () => {
        props.navigation.navigate('kisi_1');
    };
  return (

     <View style={styles.container}>
   <ScrollView>
   <Image style={styles.en_ust_icon} source={require('../../../assets/images/fallar_ile_alakali/fal_tarot/djojojkuj.png')}/>
 
 <ImageBackground 
  style={styles.bilgilendirmeler}
 source={require('../../../assets/images/fallar_ile_alakali/fallar_genel/kucukj.png')}>
          <View>
          <Text style={styles.icerik_1}>
           nükleeeer silah sistemleri 
         </Text>
         <Text style={styles.icerik_2}>
           nükleeeer silah sistemleri 
         </Text>
         <Text style={styles.icerik_3}>
           nükleeeer silah sistemleri 
         </Text>
          </View>
          </ImageBackground>

          <ImageBackground 
  style={styles.alt_resim}
 source={require('../../../assets/images/kisiler_ile_alakali/kisi_1/erkek_1.png')}>
          <View>
          <Text style={styles.alt_resimler_isim_1}>
           fahişe tayland
         </Text>
         <Text style={styles.alt_resimler_k_1}>
           300 K 
         </Text>
          </View>
          </ImageBackground>

          <ImageBackground 
  style={styles.alt_resim}
 source={require('../../../assets/images/kisiler_ile_alakali/kisi_1/erkek_1.png')}>
          <View>
          <Text style={styles.alt_resimler_isim_1}>
           fahişe tayland
         </Text>
         <Text style={styles.alt_resimler_k_1}>
           300 K 
         </Text>
         
          </View>
          </ImageBackground>

          <ImageBackground 
  style={styles.alt_resim}
 source={require('../../../assets/images/kisiler_ile_alakali/kisi_1/erkek_1.png')}>
          <View>
          <Text style={styles.alt_resimler_isim_1}>
           fahişe tayland
         </Text>
         <Text style={styles.alt_resimler_k_1}>
           300 K 
         </Text>
         
          </View>
          </ImageBackground>

   </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 2,
    overflow: 'hidden',
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  en_ust_icon:{
width: '100%',
height: 150,
margin: 0,
  },
  bilgilendirmeler:{
    width: 395,
    height: 185,
    marginTop: 10,
marginHorizontal: 5,
marginRight:5
  },
  icerik_1:{
marginTop: 30,
marginLeft: 60
  },
  icerik_2:{
    marginTop: 20,
    marginLeft: 60
  },
  icerik_3:{
    marginTop: 20,
    marginLeft: 60
  },

  alt_resim:{
    width: 380,
    height: 145,
    marginTop: 10,
    marginLeft: 2,
    marginRight: 2,
  },
  alt_resimler_isim_1: {
marginTop: 50,
marginLeft: 40
  },
  alt_resimler_k_1:{
    marginTop: 10,
    marginLeft: 40 
  }

});


export default tarot;


/**
 * <View style={styles.container}>
<Image style={styles.en_ust_icon} source={require('../../../assets/images/fallar_ile_alakali/fal_burc/kucukj.png')}/>
</View>
 * 
 * 
 */