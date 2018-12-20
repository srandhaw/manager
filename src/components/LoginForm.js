import React, {Component} from 'react'
import Card from './Card.js'
import CardSection from './CardSection.js'
import Button from './Button.js'
import Input from './Input.js'

class LoginForm extends Component{
    render(){
        return(
            <Card>
             <CardSection>
             <Input
             label = "Email"
             placeholder = "xyz@abc.xxx"
             />
             </CardSection>

             <CardSection>
             <Input
             isSecured
             label = "Password"
             placeholder = "password"
             />
             </CardSection>

             <CardSection>
             <Button>
             Login
             </Button>
             </CardSection>
            </Card>
        )
    }
}

export default LoginForm
