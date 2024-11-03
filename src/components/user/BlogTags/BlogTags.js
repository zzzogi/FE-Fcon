import React, { useState } from "react";
import "./BlogTags.css";

const BlogTags = ({ tags, max = 10 }) => {
  const [isView, setIsView] = useState(false);

  const onView = () => {
    setIsView((isView) => !isView);
  };

  return (
    <div className="BlogTags">
      <div className="widget-main">
        <div className="title">
          <h4>Tags</h4>
        </div>
        <div className="content">
          <div className="tag-list">
            {tags.map((tag, index) => {
              if (!isView) {
                if (index <= max) return <div className="tag-item">{tag}</div>;
              } else {
                return <div className="tag-item">{tag}</div>;
              }
              return void 0;
            })}
            <div className="more" onClick={onView}>
              {isView ? "hidden" : "view all"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTags;
