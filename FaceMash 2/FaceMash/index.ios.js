"use strict";
import React , {Component} from "react";
import {
  View ,
  Text ,
  StyleSheet,
  AppRegistry,
  NavigatorIOS
} from "react-native";

// 引入外部的一个组件
var Body = require("./component/body");

// 创建组件
var main = React.createClass({
  render(){
    return (
      <NavigatorIOS
        ref="nav"
        style={{flex:1}}
        initialRoute={{
          title:"标题" ,
          component:Body
        }}
        barTintColor="pink"
      />
    );
  }
});

// 创建样式的对象
var styles = StyleSheet.create({});

// 让某一个组件成为应用程序的主入口
AppRegistry.registerComponent("FaceMash" , ()=>main);
