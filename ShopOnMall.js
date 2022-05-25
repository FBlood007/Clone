import React from 'react'
import { View , StyleSheet, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import TopOffers1 from './Images/TopOffers1.png';
import StorageDevices from './Images/StorageDevices.jpeg';
import MobileGadgets from './Images/MobileGadgets.png';
import MensFashion from './Images/MensFashion.jpg';

export default function ShopOnMall() {
  return (
    <View style={css.wrapShop}>
       
    <Text style={css.shopRowHeadingText}>Shop on Mall</Text>
    <ScrollView horizontal={true}>
    <View style={css.shopMenuWrap}>
          <View style={css.shopItems}>
              <Image style={css.shopImages}source={MobileGadgets}/> 
              <Text style={css.shopImagesText}>{"Mobiles &\nGadgets"}</Text>
          </View>
          <View style={css.shopItems}>
              <Image style={css.shopImages}source={MensFashion}/>
              <Text style={css.shopImagesText}>{"Men's \nFashion"}</Text>
          </View>
          <View style={css.shopItems}>
              <Image style={css.shopImages}source={StorageDevices}/>
              <Text style={css.shopImagesText}>{"Storage &\nDevices"}</Text>
          </View>
          <View style={css.shopItems}>
              <Image style={css.shopImages} source={TopOffers1}/>
              <Text style={css.shopImagesText}>{"Top &\nOffers"}</Text>
          </View>
          <View style={css.shopMenuWrap}>
          <View style={css.shopItems}>
              <Image style={css.shopImages}source={MobileGadgets}/>
              <Text style={css.shopImagesText}>{"Mobiles &\nGadgets"}</Text>
          </View>
          <View style={css.shopItems}>
              <Image style={css.shopImages}source={MensFashion}/>
              <Text style={css.shopImagesText}>{"Men's \nFashion"}</Text>
          </View>
          <View style={css.shopItems}>
              <Image style={css.shopImages}source={StorageDevices}/>
              <Text style={css.shopImagesText}>{"Storage &\nDevices"}</Text>
          </View>
          <View style={css.shopItems}>
              <Image style={css.shopImages} source={TopOffers1}/>
              <Text style={css.shopImagesText}>{"Top &\nOffers"}</Text>
          </View>
         
    </View>
    </View>

    
    </ScrollView>  
    
</View>
  );
}
const css = StyleSheet.create({

   wrapShop:{
       backgroundColor:'white',
       padding:5,
       flex:1,
       borderWidth:1,
       borderRadius:15,
       borderColor:'#999',
       margin:10,
       marginVertical:"0%"
       
    },

    shopRowHeadingText:{
        fontSize:22,
        fontWeight:'bold',
        color:"#111",
        padding:12
    },
    shopMenuWrap:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        marginBottom:-210,

    },
    shopItems:{
        paddingHorizontal:15,
        paddingVertical:10
    },
    shopImages:{
        maxHeight:50,
        maxWidth:40,
        alignSelf:'center'
    },
    shopImagesText:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#111',
    },
});