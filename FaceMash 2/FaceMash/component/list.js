"use strict";
import React , {Component} from "react";
import {
  View ,
  Text ,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity
} from "react-native";
var List = React.createClass({
    render(){
        return (
            <View>
                <TouchableOpacity onPress={this.props.onSelect}>
                    <View style={styles.wrap}>
                        <Image style={styles.picture} source={{uri:this.props.myData.coverSmall}} style={{width: 50, height: 50}} />
                        <View>
                            <Text>{this.props.myData.title}</Text>
                            <Text>{this.props.myData.nickname}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
});
var styles = StyleSheet.create({
  picture:{
    width:50,
    height:50,
    borderRadius:28
  },
  wrap:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"white",
    marginTop:5,
    padding:5,
    // justifyContent:"center",
    alignItems:"center"
  }
});
module.exports = List;
