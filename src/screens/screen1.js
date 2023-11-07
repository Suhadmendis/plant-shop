import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from 'expo-font';


const arrow = require("../assets/icons/arrow.png");
const cart_white = require("../assets/icons/cart_white.png");

const plus = require("../assets/icons/plus.png");
const plant = require("../assets/plants/plant_1.png");

const share = require("../assets/icons/share_arrow.png");

const icon1 = require("../assets/icons/icon1.png");
const icon2 = require("../assets/icons/icon2.png");
const icon3 = require("../assets/icons/icon3.png");



const screen1 = () => {


  const [fontsLoaded] = useFonts({
    'CharterBlackBT': require('../assets/fonts/CharterBlackBT.ttf'),
    'CharterBT': require('../assets/fonts/CharterBT.ttf'),

  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default screen1;
