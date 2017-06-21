import React,{Component} from 'react';
import {Link}  from 'react-router';
class MainComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
       return( <div id="wrapper">
                 <div id="banner-wrapper">
                    <header>
                        <a href="#" id="logo" ></a>
                        <nav>
                            {/*this is the hamberger icon for mobile*/}
                            <a href="#" id="menu-icon"></a>
                            <ul>
                                <li className="current"><Link to={'/'}>Home</Link> </li>
                                <li><Link to={'/test'}>Test</Link></li>
                            </ul>
                        </nav>
                    </header>
                  </div>
                     {this.props.children}                                 
              </div>
       )
    }
};

export default MainComponent;