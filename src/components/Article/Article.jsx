import React from 'react';
import './Article.css';


const Article = ({ image, date, title }) => {
  return (
    <div className="app_blog-container_article">
      <div className="app_blog-container_article-image">
        <img src={image} alt="blog" />
      </div>
      <div className="app_blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article →</p>
      </div>
    </div>
  );
}

export default Article;