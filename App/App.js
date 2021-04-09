import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Geolocation from'react-native-geolocation-service'; 
//import Geolocation from'@react-native-community/geolocation';  


//Geolocation.getCurrentPosition(info => alert(info.coords.longitude));

export default function  App () {
  //Geolocation.setRNConfiguration(true);
  
const [latitude,setLat] = useState('...');
const[longitude,setLon] = useState('...');


   const handleClick = () => 
  {
    Geolocation.getCurrentPosition(info => 
      setLat(info.coords.latitude)//, setLon(info.coords.longitude)}
      );
    }
  
  return (
    <View style={styles.container}>
      <View>
      <Text>Press Button to know location</Text>
      <Button title = "Click Here" onPress={handleClick} ></Button>
    </View>
    <View>
      <Text>Your current Latitude is {latitude}</Text>
      <Text>Your current longitude is {longitude}</Text>
    </View>
    </View>
    
    
  );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


