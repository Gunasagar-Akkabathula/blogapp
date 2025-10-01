import React from "react";
import { Link } from "react-router-dom";

const Home = ({ posts }) => (
  <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 300px)", // fixed width per card
    gap: "50px",
    padding: 16,
    justifyContent: "center", // center grid in container
    maxWidth: 1500, // max width for row to avoid stretching more than 3 cards wide (300x3 + gaps)
    margin: "0 auto" // center container horizontally
  }}
>

    {posts.map((post) => (
      <div
        key={post.id}
        style={{
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 10px #ccc",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={{ width: "100%", height: 160, objectFit: "cover" }}
        />
        <div style={{ padding: 16 }}>
          <h2 style={{ margin: "0 0 8px 0", fontSize: 20 }}>
            <Link to={`/post/${post.id}`} style={{ textDecoration: "none", color: "#333" }}>
              {post.title}
            </Link>
          </h2>
        </div>
      </div>
    ))}
  </div>
);

export default Home;
