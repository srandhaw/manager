import React, {Component} from 'react'
import CardSection from './CardSection.js'
import Button from './Button.js'
import Card from './Card.js'
import EmployeeForm from './EmployeeForm'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {employeeUpdate, employeeSave, employeeDelete} from '../actions'
import _ from 'lodash'
import Communications from 'react-native-communications'
import Confirm from './Confirm'

class EmployeeEdit extends Component{

    state = {
        showModal: false,
    }

    componentWillMount(){
     _.each(this.props.employee,(value,prop)=>{
         this.props.employeeUpdate({prop,value})
     })
    }

    onButtonPress(){
        const {name, phone, shift} = this.props
this.props.employeeSave({name,phone,shift, uid: this.props.employee.uid})
     
    }

    onTextPress(){
      const {phone, shift} = this.props
      Communications.text(phone,`Your upcoming shift is on ${shift}`)
    }

    onAccept(){
     this.props.employeeDelete({uid: this.props.employee.uid})
    }

    onDecline(){
     this.setState({showModal: false})
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

<CardSection>
<Button  onPress = {this.onTextPress.bind(this)}>
Text Schedule
</Button>
</CardSection>

<CardSection>
<Button onPress = {()=> this.setState({showModal: !this.state.showModal})}>
Fire Employee
</Button>
</CardSection>

<Confirm
visible = {this.state.showModal}
onAccept = {this.onAccept.bind(this)}
onDecline = {this.onDecline.bind(this)}
 >
Are you sure you want to delete this?
</Confirm>

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

export default connect(mapStateToProps,{employeeUpdate,employeeSave, employeeDelete})(EmployeeEdit)