import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import {Router,Route,BrowserRouter,browserHistory} from 'react-router';
import {routerReducer,syncHistoryWithStore} from 'react-router-redux';
import mainComponent from './components/mainComponent';
import Second from './components/second.js';
import './stylesheets/main.scss';

let initialStore = {
    stores: [],
    brands: []
}
let store = configureStore(initialStore);

const history = syncHistoryWithStore(browserHistory,store);

render(<Provider store={store}>        
          <Router history={history}>
              <Route  component={mainComponent} >
                  <Route path="test" component={Second} />
                  <Route path="/" component={App}/>
              </Route>               
          </Router>
        </Provider>,
          document.getElementById('root'));
