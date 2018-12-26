import React, {Component} from 'react'
import CardSection from './CardSection.js'
import Button from './Button.js'
import Card from './Card.js'
import EmployeeForm from './EmployeeForm'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {employeeUpdate} from '../actions'
import _ from 'lodash'

class EmployeeEdit extends Component{

    componentWillMount(){
     _.each(this.props.employee,(value,prop)=>{
         this.props.employeeUpdate({prop,value})
     })
    }

    onButtonPress(){

    }

    render(){
        return(
            <View style = {{marginTop: 60}}>
<Card>
<EmployeeForm />
<CardSection>
<Button onPress = {this.onButtonPress.bind(this)}>
Save
</Button>
</CardSection>
</Card>
</View>
        )
    }
}

const mapStateToProps = (state) => {
  return {
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift,
    }
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeEdit)