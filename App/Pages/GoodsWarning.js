import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Dimensions,
  RefreshControl,
  ActivityIndicator,
  StatusBar
} from 'react-native';

import jsonData from './city_list.json';

const { width } = Dimensions.get('window');

const statusHeight = StatusBar.currentHeight

export default class GoodsWarning extends Component {

  constructor(props) {
    super(props);
    this.state={
      dataList: [],
      isRefesh: false,
      loadMore: false,
      loading: true,
    }

    this.fetchData();
  }


  fetchData() {
    setTimeout(()=>{
      this.setState({
        dataList: jsonData,
        loading: false
      });
    },3000);
  }

  _renderListView() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
          style={{ flex: 1, backgroundColor: '#fff',marginTop:statusHeight }}
          data = {this.state.dataList}
          renderItem = {this._renderItem}
          // ListEmptyComponent   如果列表没有则显示该布局
          ListHeaderComponent = {this._renderListHeader}
          ListFooterComponent = {this._renderListFooter}
          refreshControl={
            <RefreshControl 
            title='loading...'
            refreshing={this.state.isRefesh}
            colors={['red']}
            onRefresh={()=>{
              this.setState({
                isRefesh: true
              });
              //网络加载
              setTimeout(()=>{
                this.setState({
                  isRefesh: false
                })
              },2000);
            }}/>
          }
          onEndReached={()=>{
            this.setState({
              loadMore: true
            });

            //网络加载
            setTimeout(()=>{
              this.setState({
                loadMore: false
              })
            },2000);
          }}
          onEndReachedThreshold={0.1}
          ItemSeparatorComponent={()=> {
            return <View style={{height: 1, backgroundColor: '#ccc'}}/>
          }}
          keyExtractor={this._keyExtractor}
        />
      </SafeAreaView>
    );
  }

  _keyExtractor(item, index) {
    return "index"+index+item;
  }

  _renderLoadingView() {
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flex: 1}}>
        <ActivityIndicator size='large'/>
      </View>
    );
  }

  render() {
    if(this.state.loading) {
      return this._renderLoadingView();
    }
    return this._renderListView();
  }

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=> {
        Alert.alert('点击了');
      }}>
        <Text style={styles.itemStyle}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  _renderListHeader() {
    return(
      <View style={styles.listHeader}>
        <Text style={{color: 'white'}}>头部布局</Text>
      </View>
    );
  }
  _renderListFooter = () => {
    return(
      <View style={styles.listFooter}>
        {this.state.loadMore && <ActivityIndicator />}
        <Text style={{color: 'gray'}}>
          {this.state.loadMore ? '加载更多...':'我是有底线的'}
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  itemStyle: {
    marginVertical: 20,
    marginLeft: 10
  },
  listHeader: {
    height: 50,
    width,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listFooter: {
    height: 50,
    width,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
});