import React from "react";
import searchValidator from "../views/modules/search_func";

export default class SearchBox extends React.Component{
    state = {
        searchValue : ""
    }
    search_submit = (item) =>{
        item.preventDefault();
    }
    search_input_change(item){
        var result_item_verified = searchValidator.input_verifi_char(item.target.value);
        if(result_item_verified.value !== null){
            return this.setState({
                searchRun : result_item_verified.value
            });
        }
        return;
    }
    render(){
        return <input value={this.state.searchValue} type="search" placeholder="Buscar" name="searchBox" onSubmit={this.search_submit} onChange={(e) => this.search_input_change(e)} id="searchMainBox"/>;
    }
}