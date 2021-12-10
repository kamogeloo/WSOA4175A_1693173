import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import onoff from '../Images/onoff.gif';
import '../styles/Posts.css';

class eighthBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'Final Artistic Analysis',
             image:onoff,
             p1:'For this iteration, I did not change a lot in terms of the aesthetic, I still tried to keep the website minimalist. There are a few changes that I have made to the website. I have gotten rid of the two post information boxes that were under the landing page/home page; the reason behind this decision was because I felt like there was no need for them to be there since they can be accessed from the blog post page, I did not see the need to all the redirections to pages. ',
             p2:'In my previous iteration I had gifs for the blog post information boxes, and I had different ones for the full blog Posts. I changed this, I am now reusing gifs, this is to add on to the consistency of the site. Having a lot of different gifs did make my site look nice I think but that the only thing they did. Another thing that I changed is the scroll effect for the blog information boxes. I felt like that was taking from the minimalist theme that I was going for. ',

             
            
         }
    }
    
    render() {
        return (
            <div className="Post">
                <h1 className="title">{this.state.title}</h1>
                <img className="blog4Image" src={this.state.image} alt="post image"/>
                <p className="firstParag">{this.state.p1}</p>
                <p className="SecondParag">{this.state.p2}</p>
               
        
                <h3 className="ref"></h3>
                
                
            </div>
        )
    }
}
export default eighthBlog