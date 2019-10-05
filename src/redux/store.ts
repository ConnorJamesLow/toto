import { configureStore } from 'redux-starter-kit'

import reducer from './reducers'

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export default configureStore({ reducer });