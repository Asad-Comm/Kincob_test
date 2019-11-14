import React from 'react'
import { View, Text } from 'react-native';
import { CardItem } from '../../Components/Login/CardItem';
import { Input } from './input';

import axios from  'axios';
import { Navigation } from 'react-native-navigation';
import { GotoHome } from '../..';

const data = {
    payment_method: "cod",
    payment_method_title: "Cash on Delivery",
    set_paid: true,
    billing: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555"
    },
    shipping: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US"
    },
    line_items: [
        {
            product_id: 888,
            quantity: 2
        },
        {
            product_id: 888,
            variation_id: 23,
            quantity: 1
        }
    ],
    shipping_lines: [
        {
            method_id: "flat_rate",
            method_title: "Flat Rate",
            total: 10
        }
    ]
};

const config = {
    url: "https://dev20.onlinetestingserver.com/smacksandsmooche/wc-api/v3/products", // Your store URL
    consumerKey: "ck_1092fd6b1172771db0058ff3df49f864e986d524", // Your consumer secret
    consumerSecret: "cs_3f7e1314ea4e1413d29287fd594ed511ec6a1e9f", // Your consumer secret
    name: '',
    
    key: 'Y2tfOGZiOTU0YjBmZWE2YmExM2I0ZGMyYTEwODRlNGZhNTk1ZDU2YzA2Yzpjc19lMzg5OTQ5OWUzY2ViMDIxMDM5YWE1MGM3MWE1YWViZTZmZmQwOGY3'
  }

  // "https://dev56.onlinetestingserver.com/mothernaturesown/wp-json/wc/v3/orders?consumer_key=ck_a3c64bd341ba89f727461af4230113d317aacfc8&consumer_secret=cs_f76a4049bafb466e37a15335a7d60e2dd1aef0ad"
  // url format
  // let endpoint = 'products'
 const url2 = config.url + '?consumer_key=' + config.consumerKey + '&consumer_secret=' + config.consumerSecret + "&oauth_signature=undefined"

class Checkout extends React.Component {


    shipOrder() {
        console.log('shipping');
        
   axios(
        {
            
            url : url2,
            method : 'post',
            data: data
        }
    )
    .catch(error => {
        console.log(error);
      })
    }

    render() {
        return (
            <View
             style={{ flex: 1, backgroundColor: 'gray' }}>
                <CardItem>
                    
           <Text style ={{fontSize : 20}}
           
           onPress = {() =>{GotoHome()}}
           > Ship order </Text>

                </CardItem>
            </View>
        )
    }
}

export default Checkout;