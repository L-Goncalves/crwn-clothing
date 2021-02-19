import React, { Component } from 'react'

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
                    <input name='email' type='email' onChange={this.handleChange}  value={this.state.email} required/>
                    <label>Email</label>
                    <input name='password' type='password'  onChange={this.handleChange}  value={this.state.password} required/>
                    <label>Password</label>

                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default SignIn;