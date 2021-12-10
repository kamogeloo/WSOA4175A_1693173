import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import figmadesign from '../Images/figmauidesign.png';
import '../styles/Posts.css';

class thirdBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'Technical Reflection of My Website',
             image:figmadesign,
             p1:'In this blog, I will be writing about my technical reflection, I will be detailing the process of design and talking about my technical achievements as well as the technical challenges that I faced when developing and designing this website. My aim with this website was to make it functional, make sure all the links and all the elements worked, I also wanted it to be very simple, not too complex. ',
             p2:'Prototyping made the technical side simpler because I knew exactly how many columns to build and how big I needed the columns to be.',
             p3:'In my home page I have two columns, one with the introductory text, and the other with an image, a gif to be specific, the gif is an image of a character that I drew using html and CSS. The idea was to have the image translate on the Z-axis to give the illusion of a 3D space, that did work in the beginning, however, I must have done something wrong in my code because it no longer does that.',
             p4:'The technical challenges that I faced would be the image on the home page not translating forward like I had originally wanted it to; I made the blog pages, put in elements and worked on the responsiveness of the website before adding in text, this was a bad design choice because I had already added viewport height on my website without having known the length of my text. Another challenge is that my internet art prototype is in another repository, and I did not know exactly how to make the user link back from the prototype to my website, so for now users will have to go back using the back buttons from chrome.',
             p5:'I am very happy with what I have done thus far, I did manage to make my website responsive (I will have to design for other screen sizes in my next iteration). My internet art prototype works, and all of all of my links work.',
           
         }
    }
    
    render() {
        return (
            <div className="Post">
                <h1 className="title">{this.state.title}</h1>
                <img className="blogImage" src={this.state.image} alt="post image"/>
                <p className="firstParag">{this.state.p1}</p>
                <p className="SecondParag">{this.state.p2}</p>
                <p className="thirdParagBlog3">{this.state.p3}</p>
                <p className="fourthParag">{this.state.p4}</p>
                <p className="finalParag">{this.state.p5}</p>
                <h3 className="ref"></h3>
                 <Link className="nextblog" to="/fourthBlog">Next Blog</Link>
            </div>
        )
    }
}

export default thirdBlog
