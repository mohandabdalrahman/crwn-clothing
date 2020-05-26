import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom.button';
import { auth, createUserProfileDocumnet } from '../../firebase/firebase.utils';
import './sign-up.scss';
class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    if (password === confirmPassword && email) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocumnet(user, { displayName: name });
        this.setState({
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

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1>Sign Up</h1>
        <span>Sign Up with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            label="Name:"
            isRequired={true}
            value={name}
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            label="Email:"
            isRequired={true}
            value={email}
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="Password:"
            isRequired={true}
            value={password}
            handleChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password:"
            isRequired={true}
            value={confirmPassword}
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
