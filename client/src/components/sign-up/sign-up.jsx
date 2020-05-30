import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom.button';
import { auth, createUserProfileDocumnet } from '../../firebase/firebase.utils';
import './sign-up.scss';
const SignUp = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { name, email, password, confirmPassword } = userData;

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (password === confirmPassword && email) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocumnet(user, { displayName: name });
        setUserData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (err) {
        console.log(`Error when user SignUp ${err.message}`);
      }
    } else {
      alert('password dont match');
      return;
    }
  };
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="text"
          label="Name:"
          isRequired={true}
          value={name}
          handleChange={handleChange}
        />
        <FormInput
          name="email"
          type="email"
          label="Email:"
          isRequired={true}
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          label="Password:"
          isRequired={true}
          value={password}
          handleChange={handleChange}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password:"
          isRequired={true}
          value={confirmPassword}
          handleChange={handleChange}
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
