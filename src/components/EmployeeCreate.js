import React,{Component} from 'react'
import {View} from 'react-native'
import Card from './Card.js'
import CardSection from './CardSection.js'
import Button from './Button.js'
import {connect} from 'react-redux'
import {employeeUpdate, employeeCreate} from '../actions'
import EmployeeForm from './EmployeeForm.js'

class EmployeeCreate extends Component{

    onButtonPress(){
        const {name,phone,shift} = this.props
      this.props.employeeCreate({name,phone,shift: shift||'Monday'})
    }

    render(){
        return(
            <View style = {{marginTop: 60}}>
            <Card>

           
<EmployeeForm {...this.props}/>
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



const mapStateToProps = state =>{
    return {
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift,
    }
}

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate)