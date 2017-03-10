"use strict";
import React , {Component} from "react";
import {
  View ,
  Text ,
  StyleSheet,
  ListView
} from "react-native";

// 获取屏幕组件
var Dimensions = require("Dimensions");

var List = require("./list");

var Loading = require("./loading");

var Detail = require("./detail");

var Body = React.createClass({

    // 网络请求的方法
    fetchList(){
        fetch("https://mobile.ximalaya.com/mobile/discovery/v2/category/keyword/albums?calcDimension=hot&categoryId=2&device=android&keywordId=1&pageId=1&pageSize=20&version=5.4.75")
        .then((response)=>response.json())
        .then((res)=>{
          this.setState({
              isLoading:false ,
              dataSource:this.state.dataSource.cloneWithRows(res.list),
          });
        })
        .done();
    },

    // 初始化当前组件自己的状态的方法
    getInitialState(){
        return {
            isLoading:true ,
            dataSource: new ListView.DataSource({
                rowHasChanged:(r1 , r2)=>r1 != r2
            })
        }
    },

    // 组件将要显示出来的方法
    componentDidMount(){
        this.fetchList();
    },

    // 渲染每一行的方法
    renderRow(myItem){
        return (
            <List onSelect={()=>this.itemClick(myItem)} myData={myItem} />
        )
    },
    itemClick(myItem){
      this.props.navigator.push({
        title:"详情",
        component:Detail,
        passProps:{
          myItem
        }
      });
    },


    render(){
      if(this.state.isLoading){
        return(<Loading />)
      }else{
        return (
            <View style={styles.wrap}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
      }
    }
});

var styles = StyleSheet.create({
    wrap:{
        margin:10,
        marginTop:66,
        backgroundColor:"#ccc",
        height:Dimensions.get("window").height - 80
    }
});

module.exports = Body;
