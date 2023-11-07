import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const cart_black = require("../assets/icons/cart_black.png");

const PRODUCTS = [
  { id: 1, name: "Strelitzia", price: "$18,-", active: true },
  { id: 2, name: "Cactus", price: "$26,-", active: false },
  { id: 3, name: "Cactus", price: "$26,-", active: false },
  { id: 4, name: "Cactus", price: "$26,-", active: false },
  { id: 5, name: "Cactus", price: "$26,-", active: false },
];

const screen2 = () => {


  return (
    <View style={styles.container}>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default screen2;
