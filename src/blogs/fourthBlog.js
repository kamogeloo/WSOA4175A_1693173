import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import goodwordy from '../Images/wordygood.jpg';
import '../styles/Posts.css';

class fourthBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'Artistic Reflection of My Website',
             image:goodwordy,
             p1:'My aim in designing this website was to use all the tips that Thorlacius gave in the article The Role of Aesthetics in Web Design. I wanted to design with the intention to communicate visually,most of my design decisions were intentional, especially the use of color.',
             p2:'My goal for the aesthetic for this website was to create something that looks minimalist and artsy at the same time.I have done some research, and I found that minimalist websites generally have just one-color background color or sometimes their background color changes when they scroll to another section in their page. And so, I decided to have just one background color throughout my entire website. I had to find a color that would work for all my pages, but also not be too boring. I chose black with color psychology in mind, black, according to color theory/psychology connotes sophistication or power; and since I was aiming for a simplistic sophisticated design, black was the perfect color.A black background is also perfect because it makes all the elements or different colors pop, it does not clash with most if not all colors.',
             p3:'To determine the color that I wanted to use for my nav links and my logo, I used color psychology again and I used Figma to prototype my ideas, and I ended up choosing yellow for my logo and orange for my nav links and all my other links. I have watched different YouTube videos explaining color theory and I have visited different web sites researching color theory,and some say that yellow represents creativity while others say orange is the color that represents creativity, so I do not know which ones right and which ones are not,so I chose to use both with that connotation in mind. I wanted to communicate that I am a creative individual, especially with my logo. ',
             p4:'I added gifs to my design because I believe that gifs are a great tool in visual communication, they say a lot without using any sound.I did learn that gifs can slow down the performance of a website when unoptimized, however, I will make sure that I learn how to optimize them in my next iteration to improve the performance of m jy website and the overall user experience.',
             p5:'Another design decision that I made was to attempt to make the layout of my blogs to not feel wordy and heavy even though they are, and the way that I did that was through the use of space. I made it so that the texts are not too close together, this I feel gives the illusion that there isn’t too much text.I feel that this design decision fits with the minimalist design theme, this and making the size of the headline huge.',
             ref1:'https://i.pinimg.com/originals/ec/66/c7/ec66c78d5ce2283f40d2378b4b812f81.jpg  ',
             ref2:'Thorlacius, L. (2017) The Role of Aesthetics in Web Design. Nordicom Review, Vol.28 (Issue 1), pp. 63-76. https://doi.org/10.1515/nor-2017-0201'
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
                <h3 className="ref">REFERENCES</h3>
                <ul className="references">
                    <li>{this.state.ref1}</li>
                    <li>{this.state.ref2}</li>
                </ul>
                 <Link className="nextblog" to="/blogFive">Next Blog</Link>
            </div>
        )
    }
}

export default fourthBlog
