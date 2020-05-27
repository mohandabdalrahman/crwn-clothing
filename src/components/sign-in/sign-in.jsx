import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom.button';
import { auth } from '../../firebase/firebase.utils';

import './sign-in.scss';
class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: '' });
      } catch (err) {
        console.log(`Error when user signIn ${err.message}`);
      }
    } else {
      alert('Email and password must provided');
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="Email"
            value={email}
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            label="Password"
            value={password}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            {/* <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
