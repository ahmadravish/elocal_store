import React from 'react';
import Product from './pages/Product';
import Seller from './pages/Seller';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//Redux
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//reducer
import productReducer from './productReducer';
import sellerReducer from './sellerReducer';
import Header from './pages/Header';
const middleware = [thunk];

const store = createStore(
  combineReducers({
    productState: productReducer,
    // sellerState: sellerReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/seller' component={Seller} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
