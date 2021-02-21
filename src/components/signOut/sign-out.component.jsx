import React from 'react';
import './sign-out.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignOut extends React.Component{
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async(e) =>{
        e.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state

        if(password != confirmPassword){
            alert("Passwords don't match")
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

           await createUserProfileDocument(user, {displayName})

           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           })
        } catch(error){
            console.log(error)
        }
    }

    handleChange(event){
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        label='Display Name'
                        type="text"
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange.bind(this)}
                    />
                      <FormInput
                        label='Email'
                        type="email"
                        name='email'
                        value={email}
                        onChange={this.handleChange.bind(this)}
                    />
                      <FormInput
                        label='password'
                        type="password"
                        name='password'
                        value={password}
                        onChange={this.handleChange.bind(this)}
                    />
                      <FormInput
                        label='Confirm Password'
                        type="password"
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange.bind(this)}
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignOut
