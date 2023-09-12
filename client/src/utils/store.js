import { createStore } from 'redux';
import { reducer } from './reducers';

// import { configureStore } from '@reduxjs/toolkit'

const store = createStore(reducer);

// export default configureStore({
//   reducer: {},
// })

export default store;
