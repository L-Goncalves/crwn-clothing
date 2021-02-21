import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import './signIn.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
class SignIn extends Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    handleChange = e =>{ 
        const { value, name } =  e.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form  onSubmit={this.handleSubmit.bind(this)}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label='email'
                        required/>

                    <FormInput 
                        name='password'
                        type='password' 
                        label='password'
                        handleChange={this.handleChange} 
                        value={this.state.password} required/>
                   

                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;