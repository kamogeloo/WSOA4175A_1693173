import React, { Component } from 'react';
import '../styles/Home.css';
import landingImage from '../Images/Gif css.gif';
import '@fontsource/roboto/500.css';






export default class Home extends Component {
    render() {
        return (
            <div className= "landing" style ={{backgroundColor:'black'}}>
               <div className="left">
                   <p>Welcome to my interactive media course website! On this website,
                        I will be posting blogs about the web. I will also be showcasing internet art that I made,
                        one example of such art is this CSS illustration and animation that is next to this text.</p>
                        
               </div>
               <div className="right">
                    <img src={landingImage} alt= "css drawing"/>

                   
               </div>
            </div>
            
        )
    }
}
