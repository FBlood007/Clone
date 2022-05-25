import React from 'react';
import {
  Image,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator, 
  Text,
  StatusBar,
  TouchableOpacity,
  Pressable
} from 'react-native';
import {Button} from 'react-native-paper';
import { Avatar } from 'react-native-paper'; 
import paytm from './Images/paytm.png';   
import search from './Images/search.png'; 
import Messages from './Images/Messages.png'; 
import Qrcode from './Images/Qrcode.png';
import FruitShop from './Images/FruitShop.png';
import Featured from './Featured';
import Recommended from './Recommended';
import ShopOnMall from './ShopOnMall';
import LinearGradient from 'react-native-linear-gradient';

export default function HomePage(props) {
  return (

    <View style={{flex:1}}>
       
        <StatusBar backgroundColor={'#afe6fe'}  barStyle={'default'}/>

        <LinearGradient colors={['#afe6fe', '#89dbff', '#7fd8ff']} style={css.linearGradient}>
        <View style={css.headerRow}>
            <Avatar.Text style={css.avatar} color={'white'} size={40}label="OJ" />
            <Image style={css.paytmImage}source={paytm}/>
            <Image style={css.search}source={search} />
            <Image style={css.messages}source={Messages}/>  
        </View>
        </LinearGradient> 
        <View flex={1}>
        <ScrollView>
           
            <Featured/>

            <View style={{flex:1, borderWidth:1,
       borderRadius:15,
       borderColor:'#999',backgroundColor:'#afe6fe',marginVertical:'-0.5%',padding:5,margin:10,paddingBottom:10,height:96}}>
                
                <Pressable>
                        
                    <Text onPress={()=>props.navigation.navigate('Store')} style={{justifyContent:'center',alignSelf:'center',marginVertical:10,height:65}}>

                        <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                            <Image  source={FruitShop} style={{}}/>
                            <Text style={{fontWeight:'bold',fontSize:15,height:40,paddingVertical:10,marginVertical:15}}>Get Fresh Fruits on One Click </Text>
                            <Image source={FruitShop}/>
                        </View>

                    </Text>    
                        
                </Pressable>   
               
                
            </View>

            <Recommended/>

            <ShopOnMall/>

            <Featured/>

            <View style={{flex:1, borderWidth:1,
       borderRadius:15,
       borderColor:'#999',backgroundColor:'#afe6fe',marginVertical:'-0.5%',padding:5,margin:10,paddingBottom:10,height:96}}>
                
                <Pressable>
                        
                    <Text onPress={()=>props.navigation.navigate('Store')} style={{justifyContent:'center',alignSelf:'center',marginVertical:10,height:65}}>

                        <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                            <Image  source={FruitShop} style={{}}/>
                            <Text style={{fontWeight:'bold',fontSize:15,height:40,paddingVertical:10,marginVertical:15}}>Get Fresh Fruits on One Click </Text>
                            <Image source={FruitShop}/>
                        </View>

                    </Text>    
                        
                </Pressable>   
               
                
            </View>

            <Recommended/>

            <ShopOnMall/>
          
        
         
          
        </ScrollView>
        </View>

        <View style={css.butn2}>
        <TouchableOpacity style={css.butnWrap}>
                {/* <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}> */}
                    <Image source={Qrcode} style={{margin:4}}/>
                    <Text style={css.scanButtonText}>Scan Any QR</Text>
                {/* </View> */}
        </TouchableOpacity> 
          </View>

    </View>
    
  );
}
const css = StyleSheet.create({

    linearGradient:{
       
    },
    avatar:{
        
        backgroundColor:'#eb5657',
        marginHorizontal:10,
        
    },
    headerRow:{ 
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'transparent',
        paddingVertical:15,
        //backgroundColor:"#85daff",
    },
    paytmImage:{
        marginLeft:50
    },
    search:{
        tintColor:'#07448e',
    },
    messages:{
        maxWidth:'8%',
        height:30,
        marginRight:15,
        tintColor:'#07448e',

    },

    butn2:{
      
       position:'absolute',
       justifyContent:'center',
       marginHorizontal:10,
       bottom:20,
       alignSelf:'center',
      //width:'45%',  
      //marginVertical:640,
       //marginVertical:"160%",
        //maxWidth:220,
       // maxWidth:'90%',
       //flexDirection:'row',
      
    },
    scanButtonText:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:16,
        margin:4,
        borderRadius:40,   
    },
    butnWrap:{
        backgroundColor:"#06448d",
        flexDirection:'row',alignItems:'center',
        borderRadius:40,
        height:70,
        paddingHorizontal:15
    }
});

// ₹
