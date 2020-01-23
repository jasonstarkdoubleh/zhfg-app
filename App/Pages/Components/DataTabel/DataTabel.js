import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class DataTabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['检测时间', '监测标题', '处理状态'],
      tableData: [
        ['2020-01-20', '猪价', '已处理'],
        ['2020-01-20', '猪价', '未处理']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#e5e0e0'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 20, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f9f9f9' },
  text: { margin: 6 }
});