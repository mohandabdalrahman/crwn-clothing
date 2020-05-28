import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import Checkout from './pages/checkout/checkout'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import { auth, createUserProfileDocumnet } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import setCurrentUser from './redux/user/user-action'
import { selectCurrentUser } from './redux/user/user-selector'
import {createStructuredSelector} from 'reselect'
import './App.css';

class App extends Component {
  state = {
    currentUser: null
  }
  unSubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props
    // track if user is signin or signout
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocumnet(userAuth)
        // already exist or created new in database
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser({ userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/checkout' exact component={Checkout} />
          <Route exact path='/sign' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
