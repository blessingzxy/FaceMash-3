"use strict";
import React , {Component} from "react";
import {
  View ,
  StyleSheet,
  ActivityIndicator,
  Text,

} from "react-native";
// var Video = require
// import Video from "react-native-video";
var Video = require("./player");
var Detail = React.createClass({
    videoError(error){
      alert(error);
    },
    loadStart(){
      console.log("开始播放");
    },
    render(){
        return (
            <View style={styles.wrap}>
              <Text>{this.props.myItem.intro}</Text>
              <Video
                  url={"http://yinyueshiting.baidu.com/data2/music/238839585/7389232782800128.mp3?xcode=0b40729c8d1a3687a0d51cfc739c1004"}
                  title={"sss"}
              />
            </View>
        )
    }
});
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
module.exports = Detail;
