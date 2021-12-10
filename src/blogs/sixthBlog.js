import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import browserpong from '../Images/browserpong.jpg';
import '../styles/Posts.css';

class sixthBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'Browser Pong Analysis',
             image:browserpong,
             p1:'Browser Pong is an internet game that was developed by Stewart Smith and published in 2010. It is an experimental project that was made with HTML, CSS and JavaScript and I believe it qualifies as internet art, Ji Yong Park would agree too. Park, in an article that he wrote titled Design principles for interactive user experience through net art, argued that net artists need to experiment with the invisible elements and that is exactly what Smith did. ',
             p2:'Steward Smith built a game using internet tools that are conventionally not used as game objects or as anything other than just a canvas on which net art is displayed. The game is a two-player game that can be played by two human players on the same keyboard or by one human player and a non-player character. Players must check the boxes labelled human to indicate whether it is two human players playing the game or just or just one.  ',
             p3:'In this game player characters are represented by two windows; the player on the left side is represented by a window with red and yellow and orange stripes and the one on the right by green, light-green, and yellow stripes. There is another window which represents the ball, which changes colour whenever it collides with the player windows. There is also the sound option, which if turned on plays game music and sound effects for when the ‘ball’ collides with the player characters.',
             p4:'While playing this game I realised that the player window kept on increasing in size right after the game starts, I also noticed that the ball window also grew the more it collided with the two player windows. The player windows and the ball window growing in size causes chaos in the game, the speed at which the windows were colliding increased, and with that came the colour changing at a faster speed, they had the flash effect. The sound of the collision felt like it was becoming louder too and then a robotic voice is introduced, I could not however, make out what the voice was saying. In my observation, I could only play the game for a few seconds before the chaos was introduced, after the chaos a window pops up alerting players who won the round. ',
             p5:'I feel that this game qualifies more as internet art more than a game, it is very interactive, and I found that it forces the user to pay attention to little details. Little details such as how the developer added to each and every window has a tittle name of what it is representing. ',
            
         }
    }
    
    render() {
        return (
            <div className="Post">
                <h1 className="title">{this.state.title}</h1>
                <img className="blog4Image" src={this.state.image} alt="post image"/>
                <p className="firstParag">{this.state.p1}</p>
                <p className="SecondParag">{this.state.p2}</p>
                <p className="thirdParag">{this.state.p3}</p>
                <p className="fourthParag">{this.state.p4}</p>
                <p className="finalParag">{this.state.p5}</p>
        
                <h3 className="ref"></h3>
                
                 <Link className="nextblog" to="/seventhBlog">Next Blog</Link>
            </div>
        )
    }
}

export default sixthBlog
