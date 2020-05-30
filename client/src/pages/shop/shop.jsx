import React, { Component } from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import { Route } from 'react-router-dom';
import {
  firestore,
  convertCollectionSnapShotToMap
} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';
// import CollectionPage from '../collection/collection';
class ShopPage extends Component {
  unsubscribeFromSnapShot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    // collectionRef.get().then(snapShot => {
      // const collectionsMap = convertCollectionSnapShotToMap(snapShot);
    //   updateCollections(collectionsMap);
    // });

    // collectionRef.onSnapshot(async snapShot => {
    //   const collectionsMap = convertCollectionSnapShotToMap(snapShot);
    //   updateCollections(collectionsMap);
    // });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        {/* <Route path={`${match.path}/collectionId`} component={CollectionPage} /> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
