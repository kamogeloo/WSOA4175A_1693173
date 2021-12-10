import React, { Component } from 'react';
import { blogList } from '../helpers/blogList';
import BlogItem from '../components/blogItem';
import '../styles/blogPosts.css';






export default class blogPosts extends Component {

    // routeChange=()=>{
    //     if(blogItem.id){
    //         console.log('hey now')
    //     }
    // }

    render() {
        
        return (
            <div className="blog">
                
                <h1 className="blogTitle">Blog Posts</h1>
                <div className="blogList">
                    {blogList.map((blogItem, value) =>{
                        return(
                           
                              <div className="bloglinks"> <BlogItem 
                               key={blogItem.id}
                               path={blogItem.path} 
                               value={value} 
                               id={blogItem.id}
                               name={blogItem.name}
                               image={blogItem.image} 
                               text={blogItem.text}/> </div>
                              
                        )
                    })} 
                   
                </div>
               
            </div>
        )
    }
}

