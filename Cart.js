import React from 'react'
import { View,Text,StyleSheet,Image, Pressable } from 'react-native'
import check from './Images/check.png'

export default function Cart(props) {
  return (
    <View style={{alignItems:'center',paddingVertical
    :250}}>
        <Image  style={css.productImage}  source={check}/>
        <Text style={{color:'red',fontSize:20}}>Product added succesfully !!!!!!!</Text>

        <Pressable onPress={props.navigation.goBack}>
        <Text style={{fontSize:15, 
                       margin:10,
                       fontWeight:'bold', 
                       backgroundColor:'#999', 
                       paddingHorizontal:10,
                       borderRadius:5,
                       height:30,
                       paddingVertical:2
                       }}>
               {"<"} Back
            </Text>
        </Pressable>    
    </View>
  );
}

const css = StyleSheet.create({
    productImage:{
        width:70,
        height:70,
        alignSelf:'center',
       
      },
});