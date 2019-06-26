// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Imports: Redux
import rootReducer from '../reducers/index';

// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];

// Middleware: Redux Logger (For Development)
if (process.env.NODE_ENV !== 'production') {  
  middleware.push(createLogger());
}

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

// Redux: State
store.subscribe(() => console.log('store', store.getState()));

// Exports
export default store;