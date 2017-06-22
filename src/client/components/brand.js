import React,{Component} from 'react';

class Brand extends Component{
    constructor(props){
        super(props);
        this.state={
            brandName: this.props.selectedBrand.name,
            brandId: this.props.selectedBrand.id
        }
    }

     getStores(){
         this.props.getStores(this.state.brandId);        
    }

    render(){
        return(
            <div className="brand" onClick={this.getStores.bind(this)}>{this.state.brandName}</div>
        )
    }   
}

export default Brand;