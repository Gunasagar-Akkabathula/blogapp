import React from "react";
import { useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Cooking with Spices: My Favorite Recipes",
    author: "Rina Sharma",
    date: "2025-09-18",
    content: `
      Exploring the world of spices changed the way I cook. From turmeric in dal to cardamom in desserts, each spice adds a unique note.
      In this post, I'll share my top 3 recipes and simple tips for elevating everyday meals
    `,
    image:"https://t4.ftcdn.net/jpg/01/91/05/77/360_F_191057762_4xsRetUOOw5Ld1Nlq0uB055CLpRxGVlB.jpg"
  },
  {
    id: 2,
    title: "The Art of Cricket: Lessons from the Pitch",
    author: "Arjun Menon",
    date: "2025-08-21",
    content: `
      Cricket is more than a sport—it's a way of life. I learned patience when waiting to bat and the value of teamwork during pressure matches.
      Here are some inspirational stories and tips for aspiring cricketers.
    `
  },
  {
    id: 3,
    title: "Tech Trends in 2025: What to Expect",
    author: "Leah Ford",
    date: "2025-10-01",
    content: `
      Technology is evolving at record speed, from quantum computing to affordable AI.
      This post highlights the major tech trends this year and what skills will be in demand for future developers.
    `
  },
  {
    id: 4,
    title: "Gaming for Relaxation: Top Releases This Fall",
    author: "Gautam Singh",
    date: "2025-09-28",
    content: `
      Gaming helped me unwind and connect with friends. This season, I recommend checking out these new releases for PC and console.
      Plus, tips for balancing playing time with a busy schedule!
    `
  },
  {
    id: 5,
    title: "Beginner’s Guide to Fitness at Home",
    author: "Ananya Gupta",
    date: "2025-09-10",
    content: `
      Home workouts are convenient and effective. I share my daily routine, favorite apps for tracking progress, and how to stay motivated even on busy days.
      No gym required—just commitment and creativity.
    `
  },
  {
    id: 6,
    title: "Taking Control of Health Care",
    author: "Dr. Suresh Pillai",
    date: "2025-09-05",
    content: `
      Navigating health care can be confusing. I explain how to choose the right plan, prepare for appointments, and take preventative steps for long-term wellness.
      Empowerment starts with education.
    `
  },
  {
    id: 7,
    title: "YouTube Growth: My Journey to 10K Subs",
    author: "Priya Varma",
    date: "2025-08-30",
    content: `
      Reaching 10,000 subscribers took consistency, creativity, and patience.
      I walk through analytics, video planning, and engaging your core audience. Persistence pays off!
    `
  },
  {
    id: 8,
    title: "Choosing a New Mobile Phone in 2025",
    author: "Dinesh Rao",
    date: "2025-09-16",
    content: `
      The mobile market is packed with choices. This post breaks down the latest models, their standout features, and tips for finding the right phone for your needs.
    `
  },
  {
    id: 9,
    title: "How AI is Reshaping Daily Life",
    author: "Sara Lim",
    date: "2025-09-25",
    content: `
      From smart assistants to AI-powered healthcare, artificial intelligence is everywhere.
      I discuss real examples of AI at work today and where the technology might take us next.
    `
  },
  {
    id: 10,
    title: "Engineering Projects That Inspire",
    author: "Rahul Chatterjee",
    date: "2025-07-19",
    content: `
      Real-world engineering is all about solving problems. I share stories about innovative student projects—solar-powered cars, smart bridges, and more!
      What project inspired you?
    `
  },
  {
    id: 11,
    title: "Modern Teaching Tools in Classrooms",
    author: "Kavita Joshi",
    date: "2025-08-03",
    content: `
      Education is changing fast. I explore how digital resources, interactive whiteboards, and collaborative apps are helping teachers and students connect like never before.
    `
  },
  {
    id: 12,
    title: "Software Development: My Learning Path",
    author: "Nikhil Agarwal",
    date: "2025-09-08",
    content: `
      Learning to code was challenging but rewarding. In this post, I explain how I started with small projects, the resources I found helpful, and my tips for new developers.
    `
  }
];


const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <>
      <h1>{post.author}</h1>
      <h2>{post.title}</h2>
       <p>{post.date}</p>
       <p>{post.content}</p>
       
    </>
  );
};

export default PostDetail;
