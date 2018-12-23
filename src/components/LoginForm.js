import React, {Component} from 'react'
import Card from './Card.js'
import CardSection from './CardSection.js'
import Button from './Button.js'
import Input from './Input.js'
import Spinner from './Spinner.js'
import {View,Text} from 'react-native'
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

    renderError(){
        if(this.props.error){
return(
    <View style = {{backgroundColor: 'white'}}>
     <Text style = {styles.errorTextStyle}>
     {this.props.error}
     </Text>
    </View>
)
        }
    }

    renderButton(){
        if(this.props.loading){
           return <Spinner size = 'large'/>
        }
        else{
            return(<Button onPress = {this.onButtonPress.bind(this)}>
             Login
             </Button>)

        }
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

{this.renderError()}
             <CardSection>
             {this.renderButton()}

             </CardSection>
            </Card>
        )
    }
}
const mapStateToProps=(state)=>{
return{
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
}
}
export default connect(mapStateToProps,{emailChange,passwordChange,loginUser})(LoginForm)


const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}