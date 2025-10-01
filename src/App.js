import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PostDetail from "./PostDetail";

const Logo = () => (
  <div style={{
    fontSize: 32,
    fontWeight: "bold",
    color: "#070707ff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    letterSpacing: 2,
    cursor: "pointer"
  }}>
    InfoBlog
  </div>
);

const posts = [
  {
    id: 1,
    title: "Cooking with Spices: My Favorite Recipes",
    image: "https://t4.ftcdn.net/jpg/01/91/05/77/360_F_191057762_4xsRetUOOw5Ld1Nlq0uB055CLpRxGVlB.jpg"
  },
  {
    id: 2,
    title: "The Art of Cricket: Lessons from the Pitch",
    image: "https://t4.ftcdn.net/jpg/05/36/25/69/360_F_536256924_aD03QrQ5eF5ub979N8Xqu1BZigGUKe1q.jpg"
  },
  {
    id: 3,
    title: "Tech Trends in 2025: What to Expect",
    image: "https://reports.globant.com/wp-content/uploads/2024/10/intro-image.jpg"
  },
  {
    id: 4,
    title: "Gaming for Relaxation: Top Releases This Fall",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkVdVCnjH78IdAhPwIOsHvTCEtehuVLEBeA&s"
  },
  {
    id: 5,
    title: "Beginner’s Guide to Fitness at Home",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMzX1uiL2de7Hb02RFaq4-9Z2tEyg-NdsVw&s"
  },
  {
    id: 6,
    title: "Taking Control of Health Care",
    image: "https://lotusdiagnostic.com/wp-content/uploads/2023/01/close-up-doctor-with-stethoscope.jpg"
  },
  {
    id: 7,
    title: "YouTube Growth: My Journey to 10K Subs",
    image: "https://www.shutterstock.com/image-vector/10k-subscribers-followers-thank-you-260nw-2450173703.jpg"
  },
  {
    id: 8,
    title: "Choosing a New Mobile Phone in 2025",
    image: "https://www.hindustantimes.com/ht-img/img/2025/08/05/550x309/vivo_v60_1754376263049_1754376270077.png"
  },
  {
    id: 9,
    title: "How AI is Reshaping Daily Life",
    image: "https://bernardmarr.com/wp-content/uploads/2024/10/The-AI-Revolution-How-Predictive-Prescriptive-And-Generative-AI-Are-Reshaping-Our-World.webp"
  },
  {
    id: 10,
    title: "Engineering Projects That Inspire",
    image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:1,cw:2259,ch:1271,q:80,w:2259/HFUAjfbamNhbM8dsNSQW3D.jpg"
  },
  {
    id: 11,
    title: "Modern Teaching Tools in Classrooms",
    image: "https://www.shutterstock.com/image-photo/covid19-outbreak-new-normal-virtual-260nw-2025302300.jpg"
  },
  {
    id: 12,
    title: "Software Development: My Learning Path",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6KWAStUY2rAehv6AdvAH-HAabFfrFnHUwg&s"
  }
];

const AppContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allPosts] = useState(posts);
  const [displayedPosts, setDisplayedPosts] = useState(posts);

  const navigate = useNavigate();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0deeaaff",
    padding: "18px 30px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    color: "#ffffffff"
  };

  const linkContainerStyle = {
    display: "flex",
    gap: 20,
    alignItems: "center"
  };

  const linkStyle = {
    color: "#0a0909ff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 19,
    padding: "8px 16px",
    borderRadius: 6,
    transition: "background-color 0.3s, color 0.3s",
    cursor: "pointer"
  };

  const homeStyle = {
    ...linkStyle,
    backgroundColor: "transparent",
    color: "#050606ff",
    fontWeight: 600,
    fontSize: 19,
    padding: "8px 16px",
    borderRadius: 6,
    textDecoration: "underline",
    cursor: "pointer"
  };

  const linkHoverColor = "#eef606ff";

  const handleMouseEnter = (e) => {
    if (e.target.style.backgroundColor === "rgb(255, 255, 255)") return;
    e.target.style.color = linkHoverColor;
  };

  const handleMouseLeave = (e) => {
    if (e.target.style.backgroundColor === "rgb(255, 255, 255)") return;
    e.target.style.color = linkStyle.color;
  };

  const handleHomeClick = () => {
    setDisplayedPosts(allPosts);
    setSearchTerm("");
    navigate("/home");
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("Please enter something in search box.");
      return;
    }
    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length === 0) {
      alert("No posts found matching your search.");
    }
    setDisplayedPosts(filtered);
    navigate("/");
  };

  return (
    <>
      <nav style={navStyle}>
        <Logo />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <input
            type="text"
            placeholder="Search posts"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ padding: "6px 12px", borderRadius: 4, border: "none", fontSize: 16 }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: "none",
              backgroundColor: "#fff",
              color: "#070707ff",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Search
          </button>
          <div style={linkContainerStyle}>
            <span onClick={handleHomeClick} style={homeStyle}>Home</span>
            <Link
              to="/about"
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home posts={displayedPosts} />} />
          <Route path="/home" element={<Home posts={displayedPosts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
