import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import thewrong from '../Images/thewrong2.jpg';
import '../styles/Posts.css';

class secondBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state ={
             title:'An Analysis of Internet Art.',
             image:thewrong,
             p1:'The article that I will be discussing in this blog Post is one titled The Role of Aesthetics in Web Desig; an article that was written by Lisbeth Thorlacius and published in the year 2017. In discussing this, I will begin by discussing the general concept of aesthetics, I will briefly discuss the origins of the concept and I will highlight the context in which Thorlacius use the term in. I will then discuss the importance of aesthetics.',
             p2:'I read this artwork as an art piece that represents bad UI design more than I did as just artwork. In Thorlacius’ article, she stated that when aesthetics in web design was still a new concept, designers and developers would go over the top, they would overload websites with visual elements, and this would slow down the performance of the website and negatively affect the functionality and the user experience.',
             p3:'In this artwork I see chaos, there are too many elements added,some in 2D and some in 3D, texts are overlapping on top of other texts, challenging the readability and the access to information. The artist used the colors neon pink and neon cyan for some texts that are overlapping, and according to a website called approval studio, those colors do not go together, because they are referred to as disturbing and reckless, having multiple neon colors will have them fighting for the user’s attention.Another color according to the article that does not go with neon pink is green, which is also present in the artwork.',
             p4:'This artwork, to me, represents the DON’Ts of User Interface design.',
             ref1:'Pye, B.S. & Cobe, M., 2020. How to not combine colors: Approval studio. Approval Studio – Online Proofing Software for Artwork Projects. Available at: https://approval.studio/worst-color-combinations/ [Accessed October 4, 2021]. ',
             ref2:'Temen, P., 2013. The Wrong: New Digital Art Biennale. Available at: https://www.ofluxo.net/the-wrong-new-digital-art-biennale/ [Accessed October 4, 2021].',
             ref3:'Thorlacius, L. (2017) The Role of Aesthetics in Web Design. Nordicom Review, Vol.28 (Issue 1), pp. 63-76. https://doi.org/10.1515/nor-2017-0201'
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
                <p className="finalParag">{this.state.p4}</p>
                <h3 className="ref">REFERENCES</h3>
                <ul className="references">
                    <li>{this.state.ref1}</li>
                    <li>{this.state.ref2}</li>
                </ul>
                 <Link className="nextblog" to="/thirdBlog">Next Blog</Link>
            </div>
        )
    }
}

export default secondBlog
