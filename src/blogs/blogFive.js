import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import grafitti from '../Images/grafitti.gif';
import '../styles/Posts.css';

class blogFive extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'What is Net Art',
             image:grafitti,
             p1:'In this article I will be discussing a paper written by Ji Yong Park titled Design Principles for Interactive User Experience Through Net Art.This article claims to define user interface principles through user experiences in net art that will allow the designer to achieve user-centered design.Before we get into discussing the principles,I will first explore the concept of net art, to find out what it is and what can and cannot be considered as net art.',
             p2:'Net art or internet art according a website called artsy, is work made in the 1990s through the early 2000sthat utilizes the internet as a primary medium. The 1990s is said to have been an era when new styles of art which worked to highlight social injustices began to emerge,these new works of art were often  made to critique culture. According to a website called Art of the 1990s, the 1990s was a troubling decade for young people in the 90s, because it was an era when there were major social issues involving health care, education, civil rights, and equal rights for women;there was also the issue of corporate greed, and the Cold War was coming to an end. So, the art that the youth made in the 1990s was influenced by the 1980s and it represented their feelings about that era and in shocking waysThe 1990s is also the era when the World Wide Web publicly debuted as an internet service. ',
             p3:'So, what qualifies as net art? Benedetta Ricci argues that a software, an algorithm, code, websites, bots, and images found randomly on the internet do qualify as net art. She argus that any form of art conceived through the internet, on the internet and for the internet is what qualifies as Internet art.Park would argue that images found randomly on the internet do not qualify as net art but rather as art on the net. Park claims that net art is different from art on the net because art on the internet is nothing more than documentation of art which is created outside of the internet and does not establish any relationship to the internet.  ',
             p4:'In this article, Park mentions four principles that he claims are extracted from internet art for interactive experience, which are invisible design elements, collaborative participation, anarchic structure, and non-linear communication.Under invisible design elements, Park argues that in web interface design, hidden design elements are important and should be considered when producing user experience. He argues that artists should consider using tools used in web design to create art or to alter those tools and turn them into art.',
             p5:'It seems that for Park, net art is work that is only produced on the net and not outside, and I personally disagree with this ideology. I must agree with Ricci’s notion because it makes more sense to me, I think that everything is art on and off the internet, and that everything on the internet is art, even this blog is art because it is visual communication. I personally believe that there is no set definition for what art is, art can be anything and that there should not be gate keeping in art.',
             p6:'So, what is the role of aesthetics in web design? The first one would be creating a perception or a profile of an organization or designer, to give users an idea of who you are as a person or an organization/company. Therefore, color theory/psychology and typography and all other fundamentals of good user interface design are important.Aesthetics must support functionality; the correct implementation of animations and visual feedback when a user is interacting with the system create a better user experience. The dynamism can aid in grabbing a user’s attention to specific parts of the website/ information. Web designers must be careful to not overdo this though, because there is risk of slowing down the entire web site.Aesthetics of a website must fit the theme of a website; going back to color theory/psychology, it is important for designers to know colors and what these colors connote, not only that, but they also need to understand how to create and implement color palettes on the interface.',
             p7:'Aesthetics must be suited for the target audience; a website designed to target a young audience would typically have more images than text and they would have more animations and more use of color. While websites that are owned by the government or banks would have a “clean layout that is well organized and understands contemporary trends” (Thorlacius, 2017, pg.77).',
             p8:'In conclusion aesthetics are important and they do aid in creating a better user experience in a web site that is already function; however, when it comes to web design, I do believe that functionality should be the most important, because what is the point of having a beautiful interface that a user cannot interact with. Another point that, it is also important for designer to not overuse or overdo when it comes to aesthetics, balance is important.',
             ref1:'Ji Yong Park, 2007. Design principles for interactive user experience through net art. Journal of Digital Design, 7(3), pp.47-55.',
             ref2:'Art of the 1990s." Study.com, 28 April 2021, study.com/academy/lesson/art-of-the-1990s.html',
             ref3:'Artsy. 2021. Net Art | Artsy. [online] Available at: <https://www.artsy.net/gene/net-art> [Accessed 8 November 2021].',
             ref4:'Museum, N., 2021. Agents Of Change: The Internet. Net Art and How The World Wide Web Has Created A New Medium - Artland Magazine. [online] Artland Magazine. Available at: <https://magazine.artland.com/agents-of-change-internet-net-art-how-the-world-wide-web-has-affected-the-way-we-make-art/> [Accessed 9 November 2021].'
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
                <p className="finalParag">{this.state.p6}</p>
                <p className="finalParag">{this.state.p7}</p>
                <p className="finalParag">{this.state.p8}</p>
                <h3 className="ref">REFERENCES</h3>
                <ul className="references">
                    <li>{this.state.ref1}</li>
                    <li>{this.state.ref2}</li>
                    <li>{this.state.ref3}</li>
                    <li>{this.state.ref4}</li>
                </ul>
                 <Link className="nextblog" to="/sixthBlog">Next Blog</Link>
            </div>
        )
    }
}

export default blogFive
