import React, { Component } from 'react';
import "./../styles/App.css";   
export default class Header extends Component {

    render() {
        
        return (
            <div className="header">
                <h1>Hobman</h1>
                <p>{this.props.title}</p>
            </div>
        );
    
        
    }
}