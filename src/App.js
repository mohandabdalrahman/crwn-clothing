import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import { auth, createUserProfileDocumnet } from './firebase/firebase.utils'
import './App.css';

class App extends Component {
  state = {
    currentUser: null
  }
  unSubscribeFromAuth = null
  componentDidMount() {
    // track if user is signin or signout
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocumnet(userAuth)
        // already exist or created new in database
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log(this.state))
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div className="App" >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/sign' exact component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
