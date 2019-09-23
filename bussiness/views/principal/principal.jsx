import React,{Component} from "react";

import Top from "../../topbottom/top";
import Bottom from "../../topbottom/bottom";
class Principal extends Component{
    render(){
        return(
            <div>
                <Top hash={this.props.hash}/>
                    <div>
                        <p>Welcome</p>
                    </div>
                <Bottom/>
            </div>
        )
    }
}
export default Principal;
