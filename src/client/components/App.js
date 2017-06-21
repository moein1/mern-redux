/**
 * OBJECTIVES
 * There are only two requirements:
 * 1) List all the stores (from the API).
 * 2) Edit a store name (via the API).
 */

import React from 'react';
import Store from './store';
import Brand from './brand';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions'; 
import {Link} from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      stores: []
    };
  }

  componentDidMount() {
    //this get api should be done inside the actions  
    this.props.actions.get_brands();
    this.props.actions.get_stores();      
  }

  getStores(brandId){
   this.props.actions.get_store_by_brandId(brandId);
  }
  render() {
    return (
      <div>
        <section className="half">        
            <h3>Brands</h3>
            <ul className="container">
              {this.props.brands.map(brand => (
                <li key={brand.id}><Brand  getStores={this.getStores.bind(this)} selectedBrand={brand}/></li>
              ))}
            </ul>
        </section>
        <section className="half">
          <h3>Stores</h3>
              <ul>
                {this.props.stores.map(store => (
                  <div>
                  <li key={store.id}>{<Store updateStore={this.props.actions.update_store} selectStore={store}/>}</li>             
                  </div>
                ))}
              </ul>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state){
return state;
}

//we can map dispatch to props as well
//so we do not need to access to add
///action to all the components and pass the actions everywhere
function mapDispatchToProps(dispatch){
  return{
      actions:bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
