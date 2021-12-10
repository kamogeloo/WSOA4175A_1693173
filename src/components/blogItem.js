import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class blogItem extends Component {
    render() {

        return (
            <div className="blogItem"> 
            <li>
             <Link to={this.props.path}>
               <div style={{ backgroundImage: `url(${this.props.image})` }} ></div>
               <h1>{this.props.name}</h1>
                <p>{this.props.text}</p>
                </Link>
               </li> 
            </div>
        )
    }
}


