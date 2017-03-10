"use strict";
import React , {Component} from "react";
import {
  View ,
  StyleSheet,
  ActivityIndicator
} from "react-native";
var Loading = React.createClass({
    render(){
        return (
            <View style={styles.wrap}>
                <ActivityIndicator
                    animating = {true}
                    size = "large"
                    style = {styles.activity}
                 />
            </View>
        )
    }
});
var styles = StyleSheet.create({
    activity:{
      flexDirection:"row",
      justifyContent:"center",
      height:80
    },
    wrap:{
      flex:1,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    }
});
module.exports = Loading;
