import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dance_academy from '../Images/dance_academy.gif';
import '../styles/Posts.css';

class firstBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'The Role of Aesthetics In Web Design',
             image:dance_academy,
             p1:'The article that I will be discussing in this blog Post is one titled The Role of Aesthetics in Web Desig; an article that was written by Lisbeth Thorlacius and published in the year 2017. In discussing this, I will begin by discussing the general concept of aesthetics, I will briefly discuss the origins of the concept and I will highlight the context in which Thorlacius use the term in. I will then discuss the importance of aesthetics.',
             p2:'So, what does aesthetics mean? The concept of Aesthetics as defined by Academic American Encyclopedia is the branch of philosophy that aims to establish the general principles of art and beauty, put simply, aesthetics it is the study of art. Michael Kelly (2014), an editor of The Scope of Critical Aesthetics stated that when aesthetics first emerged it had little to do with art; and this is because for Alexander Baumgarten, who can be considered as the ‘founder’ of the concept, aesthetics was a way to characterize knowledge that was not only logical or rational because it was tied to perception and the senses, in which philosophy are traditionally regarded as deceptive. For Baumgarten, aesthetics was about taste, it was about good and bad taste. Immanuel Kant, according to Kelly (2014), is the one that first linked aesthetics with art and nature in his book Critique of Judgement.',
             p3:'In this article, Thorlacius states that she uses the concept aesthetics to refer to visual, sound and interactive means of effect; she argues that there is always visual communication in websites, that every element that is included and displayed in the interface of a website communicates something to the user (Thorlacius, 2017, pg.63). The colors, the type of typography that a designer uses, and even the placement of elements on a website, communicate something to the user; and it is for this reason that Thorlacius (2017) argues that it important for designer to have knowledge about visual communication.She argues that visual symbols are part our daily lives and that is why it is important for web designers to have knowledge of graphic effects and visual symbols (and semiotics) is crucial for designers, for the communication to the users to be intentional (Thorlacius, 2017, pg.63).',
             p4:'Web designers are not only expected to have knowledge on how to communicate visually, but they are also expected to have knowledge on functionality. Functionality and aesthetics in web design should work together to create good user experience; however, in the past functionalists disagreed with this, they believed that functionality is above aesthetics, and that the point of a website is to give users access to information and not on ‘beautifying’ the platform or the information.',
             p5:'So, what is the role of aesthetics in web design? The first one would be creating a perception or a profile of an organization or designer, to give users an idea of who you are as a person or an organization/company. Therefore, color theory/psychology and typography and all other fundamentals of good user interface design are important.Aesthetics must support functionality; the correct implementation of animations and visual feedback when a user is interacting with the system create a better user experience. The dynamism can aid in grabbing a user’s attention to specific parts of the website/ information. Web designers must be careful to not overdo this though, because there is risk of slowing down the entire web site.Aesthetics of a website must fit the theme of a website; going back to color theory/psychology, it is important for designers to know colors and what these colors connote, not only that, but they also need to understand how to create and implement color palettes on the interface.',
             p6:'Aesthetics must be suited for the target audience; a website designed to target a young audience would typically have more images than text and they would have more animations and more use of color. While websites that are owned by the government or banks would have a “clean layout that is well organized and understands contemporary trends” (Thorlacius, 2017, pg.77).In conclusion aesthetics are important and they do aid in creating a better user experience in a web site that is already function; however, when it comes to web design, I do believe that functionality should be the most important, because what is the point of having a beautiful interface that a user cannot interact with. Another point that, it is also important for designer to not overuse or overdo when it comes to aesthetics, balance is important.',
             ref1:'Kelly, M., 2014. Encyclopedia of aesthetics: An analysis. Oxford Reference. Available at: https://www.oxfordreference.com/page/327 [Accessed October 3, 2021]. ',
             ref2:'Thorlacius, L. (2017) The Role of Aesthetics in Web Design. Nordicom Review, Vol.28 (Issue 1), pp. 63-76. https://doi.org/10.1515/nor-2017-0201'
         }
    }
    
    render() {
        return (
            <div className="Post">
                <h1 className="title">{this.state.title}</h1>
                <img className="blogImage" src={this.state.image} alt="post image"/>
                <p className="firstParag">{this.state.p1}</p>
                <p className="SecondParag">{this.state.p2}</p>
                <p className="thirdParag">{this.state.p3}</p>
                <p className="fourthParag">{this.state.p4}</p>
                <p className="finalParag">{this.state.p5}</p>
                <p className="finalParag">{this.state.p6}</p>
                <h3 className="ref">REFERENCES</h3>
                <ul className="references">
                    <li>{this.state.ref1}</li>
                    <li>{this.state.ref2}</li>
                </ul>
                 <Link className="nextblog" to="/secondBlog">Next Blog</Link>
            </div>
        )
    }
}

export default firstBlog
