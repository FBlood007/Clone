import React from 'react';
import Umbrella from './Images/Umbrella.png';
import MonthlyBills from './Images/MonthlyBills.png';
import ft from './Images/ft.jpg';
import shopping from './Images/shopping.png';
import card from './Images/card.png';
import bus from './Images/bus.png';
import movie from './Images/movie.png';
import angledown from './Images/angledown.png';
import stocks1 from './Images/stocks1.jpg';

import { View , StyleSheet, Text, Image, TouchableOpacity, Button} from 'react-native';




export default function Featured() {
  return (
    <View style={css.featuredWarp} >
      <Text
        style={{color: '#111', fontSize: 22, fontWeight: 'bold', padding: 10}}>
        Featured
      </Text>
      <View style={css.featuredItemsList}>
        <View style={{}}>
          <Image
            style={{width: 40, height: 40, marginHorizontal: 19}}
            source={MonthlyBills}
          />
          <Text style={css.featuredItemsText}> {'Monthly\nBills'}</Text>
        </View>
        <View style={{paddingLeft: 6}}>
          <Image
            style={{
              marginHorizontal: 19,
              tintColor: '#07448e',
              width: 40,
              height: 40,
            }}
            source={shopping}
          />
          <Text style={css.featuredItemsText}> {'Online\nShopping'}</Text>
        </View>
        <View style={{marginLeft: -25, paddingLeft: 15, marginRight: -5}}>
          <Image
            style={{marginHorizontal: 19, width: 70, height: 41}}
            source={bus}
          />
          <Text style={css.featuredItemsText}> {'Bus\nTickets'}</Text>
        </View>
        <View style={{paddingLeft: -10, marginLeft: -15}}>
          <Image
            style={{
              width: 65,
              height: 40,
              marginHorizontal: 10,
            }}
            source={movie}
          />
          <Text style={css.featuredItemsText}> {'Movie\nTickets'}</Text>
        </View>
        <View style={{}}>
          <Image
            style={{width: 46, height: 40, marginHorizontal: 19}}
            source={card}
          />
          <Text style={css.featuredItemsText}> {'Paytm\nCredit Card'}</Text>
        </View>
        <View style={{marginLeft: -4}}>
          <Image
            style={{
              alignSelf: 'center',
              tintColor: '#07448e',
              width: 40,
              height: 40,
            }}
            source={Umbrella}
          />
          <Text style={css.featuredItemsText}> {'Insurance\nQuotes'}</Text>
        </View>
        <View style={{}}>
          <Image
            style={{marginHorizontal: 19, width: 40, height: 40}}
            source={stocks1}
          />
          <Text style={css.featuredItemsText}> {'Paytm\nMoney'}</Text>
        </View>
        <View style={{paddingLeft: 10, marginLeft: -15}}>
          <Image
            style={{
              tintColor: '#07448e',
              width: 40,
              height: 40,
              marginHorizontal: 19,
            }}
            source={ft}
          />
          <Text style={css.featuredItemsText}> {'Bus\nFASTag'}</Text>
        </View>
      </View>
      <TouchableOpacity style={css.butn}>
        <Text style={{fontWeight: 'bold'}}>See all</Text>
        <Image source={angledown} />
      </TouchableOpacity>
      
    </View>
  );
}

const css = StyleSheet.create({
    featuredWarp:{
        backgroundColor:'white',
        paddingVertical:6,
        flex:1,
        paddingHorizontal:5,
        borderWidth:1,
        margin:10,
        borderRadius:15,
        borderColor:'#999',
        marginVertical:'4%'
       
    },  
    featuredItemsList:{
        flexDirection:'row',
        flexWrap:'wrap',
        flex:1,
        justifyContent:'space-between',
        paddingHorizontal:5,
        marginHorizontal:5,
        paddingBottom:30,
    
    }, 
    featuredItemsText:{
        textAlign:'center',
        paddingVertical:10,
        fontWeight:'bold',
        color:'#111',
        marginBottom:10
    },
    butn:{
        width:"25%",
        height:"15%",
        alignSelf:'center',
        backgroundColor:"#dce3f1",
        borderRadius:140,
        marginTop:-30,
        marginBottom:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:18,
      
    },
});


