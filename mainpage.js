/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

import SplashScreen from './splash.js'

export default class joke extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      pageSize: 10
    });

    this.state = {
      dataSource: ds.cloneWithRows([])
    };

    var self = this;

    fetch('***', {  
          headers: new Headers({
            'Content-Type': 'text/plain'
          }),
          method: "get"
      })    
      .then(function (response){
        return response.text();
      })
      .then(function (data){
        var m = data.match(/var jingxuanList = (.*?);/);
        var jokes = JSON.parse(m[1]).map(function (node){
          return node;
        });

        self.setState({"dataSource": ds.cloneWithRows(jokes)});
      })
      .catch(function (err){
        console.log(err);
      });
  }

  _renderRow(rowData){
    if (rowData["pic"]){
      return (
        <View style={styles.listnode}>
          <Text style={styles.title}>{rowData["text"]}</Text>
          <View style={[{flex: 1}]}>
            <Image source={{uri: rowData["pic"]}} style={styles.pic}>
            </Image>
          </View>  
          
        </View>
      );
    }
    else{
      return (
        <View style={styles.listnode}>
          <Text>{rowData["text"]}</Text>
        </View>
      );
    }
  }

  render() {
      return (
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            enableEmptySections={true}
            renderRow={(rowData) => this._renderRow(rowData)}
            style={styles.lw}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  lw: {
    flex: 1, 
    paddingTop: 22,
    backgroundColor: '#fff'
  },
  listnode: {
    flex: 1,
    flexDirection: "column",  
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#999"
  },
  title: {
    flex: 1,  
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#ddd', 
    borderBottomWidth: 1,
    borderBottomColor: "#f00",
    borderStyle: "dotted"
  },
  pic: {
    flex:1, 
    height: 300, 
    resizeMode: Image.resizeMode.strengh, 
    margin: 10
  }
});
