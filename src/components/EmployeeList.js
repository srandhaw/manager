import React, {Component} from 'react'
import {View, Text, FlatList} from 'react-native'
import {employeeFetch} from '../actions'
import {connect} from 'react-redux'
import ListItem from './ListItem.js';
import _ from 'lodash'

class EmployeeList extends Component{

 componentDidMount() {
    this.props.employeeFetch();
  }

  renderRow(employee){
return (
<ListItem employee = {employee.item.name}/>
)
}
 
  render() {
    return (
        <View style = {{marginTop: 60, flex: 1}}>
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={employee => employee.uid}
      />
      </View>
    );
  }
}
 
const mapStateToProps = state => {
  const employees = _.map(state.employeeReducer, (val, uid) => {
    return { ...val, uid };
  });
 console.log(employees);
 
return { employees };
};



export default connect(mapStateToProps, {employeeFetch})(EmployeeList)