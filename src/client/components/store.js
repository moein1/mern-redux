import React ,{Component} from 'react';

class Store extends Component{
    constructor(props){
        super(props);
        this.state={
           storeName :  props.selectStore.name,
           storeId : props.selectStore.id
        }
    }
handleChange(event){       
         this.setState({
            storeName:event.target.value
        })       
    };

updateSore(){
    this.props.updateStore(this.state);
  
}
render(){
    return(
        <div>           
            <input
            type="text"
            value={this.state.storeName}
            onChange={this.handleChange.bind(this)}
            />
            <button onClick={this.updateSore.bind(this)} >Update</button>
        </div>
    )
 }
}

export default Store;