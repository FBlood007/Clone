import React from 'react'
import { View , StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import gas from './Images/gas.png';
import calendar from './Images/calendar.png';
import mobileRecharge from './Images/mobileRecharge.png';
import broadband from './Images/broadband.png';

export default function Recommended() {
  return (

    <View style={css.recommendedWrap}>
              <Text style={css.recommendedHeading}>Recommended</Text>
                <View style={css.recommendedItems}>
                    <View style={css.recommendedItemsWrap}>
                        <Text style={css.recommendedItemsText}>{"Book your Gas\nCylinder"}</Text>
                        <Image style={{alignSelf:'center',width:40,height:50,marginLeft:20,marginRight:-11}}source={gas}></Image>
                    </View> 
                    <View style={css.recommendedItemsWrap1}>
                        <Text style={css.recommendedItemsText}>{"Paytm\nPostpaid"}</Text>
                        <Image style={{alignSelf:'center',width:35,height:35,marginLeft:55,tintColor:"#07448e",marginRight:0}} source={calendar}></Image>
                    </View> 
                    <View style={css.recommendedItemsWrap2}>
                        <Text style={css.recommendedItemsText}>{"Recharge your\nMobile"}</Text>
                        <Image style={{alignSelf:'center',width:45,height:38,tintColor:"#07448e",marginLeft:19,marginRight:-12}} source={mobileRecharge}></Image>
                    </View> 
                    <View style={css.recommendedItemsWrap3}>
                        <Text style={css.recommendedItemsText}>{"Pay your\n\Broadband Bill"}</Text>
                        <Image style={{alignSelf:'center',width:45,height:38,tintColor:"#07448e",marginLeft:13,marginRight:-5}} source={broadband}></Image>
                    </View>              
                </View>
          </View>


  );
}
const css = StyleSheet.create({

    recommendedWrap:{
        flex:1,
        margin:10,
        borderWidth:1,
        borderRadius:15,
        borderColor:'#999',
        paddingVertical:10,
        marginVertical:'4%',
       


    },

    recommendedHeading:{
        fontSize:22,
        fontWeight:'bold',
        color:"#111",
        padding:12,
        
    },
    recommendedItems:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginHorizontal:'3%',

    },
    recommendedItemsWrap:{
        flexDirection:'row',
        borderColor:'#dee1e7',
        borderWidth:1,
        borderLeftWidth:0,
        borderTopWidth:0,
        paddingHorizontal:'3%',
        width:'50%'
    },
    recommendedItemsWrap1:{
        flexDirection:'row',
        paddingHorizontal:'3%',
        borderColor:'#dee1e7',
        borderWidth:1,
        borderRightWidth:0,
        borderTopWidth:0,
        width:'50%'

    },
    recommendedItemsWrap2:{
        flexDirection:'row',
        paddingHorizontal:'3%',
        borderColor:'#dee1e7',
        borderWidth:1,
        borderBottomWidth:0,
        borderLeftWidth:0,
        width:'50%'
       

    }, recommendedItemsWrap3:{
        flexDirection:'row',
        paddingHorizontal:'3%',
        borderColor:'#dee1e7',
        borderWidth:1,
        borderBottomWidth:0,
        borderRightWidth:0,
        width:'50%'
        
    },
    recommendedItemsText:{
        paddingVertical:15,
        fontWeight:'bold',
        color:'#111',
        
    },
});
