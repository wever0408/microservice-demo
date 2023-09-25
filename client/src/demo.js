import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts/");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = posts.map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "30px" }}
        key={post.id}
      >
        <div>
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  return <div>{renderedPosts};</div>;
};

export default PostList;
