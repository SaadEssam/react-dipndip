import React from 'react';
import './Blog.css';
import Article from '../../components/Article/Article';
import images from '../../constants/images';
import data from '../../constants/data';


const Blog = () => {
  return (
    <div className="app_blog section_padding app_bg" id="blog">
      <div className="app_blog-heading">
        <h1 className="headtext_Aboreto blog-h1">A lot is happening, <br />We are blogging about it.</h1>
      </div>
      <div className="app_blog-container">
        <div className="app_blog-container_groupA">
          <Article 
            image={images.blog01} 
            date="Sep 26, 2021" 
            title="MOCHA, COOKIES N CREAM, TOFFEE NUT, BLUEBERRY CHEESECAKE, AND MORE!"
          />
        </div>
        <div className="app_blog-container_groupB">
          {data.blogs.map((blog, index) => (
            <Article 
              key={blog.title + index} 
              title={blog.title} 
              image={blog.image} 
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;