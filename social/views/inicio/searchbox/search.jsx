import React from "react";

export default class SearchBox extends React.Component{
    state = {
        searchValue : ""
    }
    componentDidMount(){

    }
    searchRun = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
    }
    render(){
        return <input type="search" placeholder="Buscar" name="searchBox" onSubmit={this.searchRun} onChange={e => this.setState({searchValue : e.target.value})} id="searchMainBox"/>;
    }
}