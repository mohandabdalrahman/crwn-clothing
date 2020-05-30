import shopActionTypes from './shop-types'

export const updateCollections = collectionsMap => ({
  type: shopActionTypes.UPDATE_COLLECTION,
  payload: collectionsMap
})