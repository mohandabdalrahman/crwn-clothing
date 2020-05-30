import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom.button';
import { auth } from '../../firebase/firebase.utils';

import './sign-in.scss';
const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });
  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    if (email && password) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        setUserCredentials({ email: '', password: '' });
      } catch (err) {
        console.log(`Error when user signIn ${err.message}`);
      }
    } else {
      alert('Email and password must provided');
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          label="Email"
          value={email}
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
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
};

export default SignIn;
