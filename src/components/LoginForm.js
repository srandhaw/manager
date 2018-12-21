import React, {Component} from 'react'
import Card from './Card.js'
import CardSection from './CardSection.js'
import Button from './Button.js'
import Input from './Input.js'
import {emailChange,passwordChange,loginUser} from '../actions'
import {connect} from 'react-redux'

class LoginForm extends Component{

    onEmailChange(text){
this.props.emailChange(text)
    }

    onPasswordChange(text){
this.props.passwordChange(text)
    }

    onButtonPress(){
        const {email,password} = this.props
        this.props.loginUser({email,password})
    }

    render(){
        return(
            <Card>
             <CardSection>
             <Input
             label = "Email"
             placeholder = "xyz@abc.xxx"
             onChangeText = {this.onEmailChange.bind(this)}
             value = {this.props.email}
             />
             </CardSection>

             <CardSection>
             <Input
             isSecured
             label = "Password"
             placeholder = "password"
             onChangeText = {this.onPasswordChange.bind(this)}
             value = {this.props.password}
             />
             </CardSection>

             <CardSection>
             <Button onPress = {this.onButtonPress.bind(this)}>
             Login
             </Button>
             </CardSection>
            </Card>
        )
    }
}
const mapStateToProps=(state)=>{
return{
    email: state.auth.email,
    password: state.auth.password,
}
}
export default connect(mapStateToProps,{emailChange,passwordChange,loginUser})(LoginForm)
