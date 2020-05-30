import React, { useEffect } from 'react';
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
import { createStructuredSelector } from 'reselect'
import CollectionPage from './pages/collection/collection'
import './App.css';

const App = ({ currentUser, setCurrentUser }) => {
  // let unSubscribeFromAuth = null
  useEffect(() => {
    // track if user is signin or signout
    const unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
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
// cleanup function ast as componentWillUnmount
    return () => {
      unSubscribeFromAuth()
    }
  }, [])

  // componentWillUnmount() {
  //   this.unSubscribeFromAuth()
  // }
  return (
    <div className="App" >
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/:collectionId' component={CollectionPage} />
        <Route path='/checkout' exact component={Checkout} />
        <Route exact path='/sign' render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
