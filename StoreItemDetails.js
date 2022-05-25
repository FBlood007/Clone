import React from 'react'
import { View,Text,Image,Pressable } from 'react-native';

export default function StoreItemDetails(props) {
    const items = props?.route?.params?.data;
    console.log(props);
    
    function price(price1,price2){
      return(
          price1!=price2
      );
  }

  return (
     <View style={{flex:1}}>
         <Pressable onPress={props.navigation.goBack}>
         <Text style={{fontSize:15, 
                       margin:10,
                       fontWeight:'bold', 
                       backgroundColor:'skyblue', 
                       paddingHorizontal:10,
                       marginRight:'auto',
                       borderRadius:5,
                       }}>
               {"<"} Back
            </Text>
         </Pressable>
         <View style={{alignItems:'center'}}>
             <Image style={{width:175,
                            height:175,
                            alignSelf:'center',}} source={{uri:items.image_url}}
             />
             <Text style={{fontSize:30}}>{items.name}</Text>
             <Text style={{fontSize:20,margin:20}}>
              
              <Text>{items.description}</Text>
                         
            </Text>
            {price(items.price,items.discounted_price)?
                <Text>
                <Text style={{fontSize:30,color:'red'}}>INR {items.discounted_price}</Text>{"\n"} 
                <Text style={{fontSize:30,color:'#999',textDecorationLine:'line-through'}}>INR {items.price}</Text> 
                </Text>
                :
                <Text style={{fontSize:30,color:'red'}}>INR {items.price}</Text>  
            }
           
        </View>
 
     </View>  
  ); 
}
