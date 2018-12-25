import React,{Component} from 'react'
import {View,Text, Picker} from 'react-native'
import Card from './Card.js'
import CardSection from './CardSection.js'
import Button from './Button.js'
import Input from './Input.js'
import {connect} from 'react-redux'
import {employeeUpdate, employeeCreate} from '../actions'

class EmployeeCreate extends Component{

    onButtonPress(){
        const {name,phone,shift} = this.props
      this.props.employeeCreate({name,phone,shift: shift||'Monday'})
    }

    render(){
        return(
            <View style = {{marginTop: 60}}>
            <Card>

            <CardSection>
            <Input
            label = "Name"
            placeholder = "Jane"
            value = {this.props.name}
            onChangeText = {(text)=>this.props.employeeUpdate({prop: "name",value: text})}
            />
            </CardSection>

            <CardSection>
            <Input
            label = "Phone" 
            placeholder = "555-555-5555"
            value = {this.props.phone}
            onChangeText = {(text)=>this.props.employeeUpdate({prop: "phone",value: text})}
            />
            </CardSection>

            <CardSection style = {{flexDirection: 'column'}}>

            <Text style = {styles.pickerTextStyle}>
            Shift
            </Text>

            <Picker 
            selectedValue = {this.props.shift}
            onValueChange = {day => this.props.employeeUpdate({prop: "shift",value: day})}
            > 

            <Picker.Item label = "Monday" value = "Monday"/>
            <Picker.Item label = "Tuesday" value = "Tuesday"/>
            <Picker.Item label = "Wednesday" value = "Wednesday"/>
            <Picker.Item label = "Thursday" value = "Thursday"/>
            <Picker.Item label = "Friday" value = "Friday"/>
            <Picker.Item label = "Saturday" value = "Saturday"/>
            <Picker.Item label = "Sunday" value = "Sunday"/>

            </Picker>

            </CardSection>

            <CardSection>
            <Button onPress = {this.onButtonPress.bind(this)}>
            Create
            </Button>
            </CardSection>


            </Card>
            </View>
        )
    }
}

const styles = {
    pickerTextStyle : {
fontSize: 18,
paddingLeft: 20,
    }
}

const mapStateToProps = state =>{
    return {
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift,
    }
}

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate)