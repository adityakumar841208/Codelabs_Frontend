import React from 'react';
// import { Typography } from '@mui/material';
import Post from '../post/Post';
import PostOption from '../post/PostOption';

const Content = () => {
  return (
    <div className='lg:ml-2 md:ml-2 bg-none'>
      <PostOption />
      <hr className='mx-2 my-1'></hr>
      <div className='h-full m-2 rounded-3xl'>
        <Post
          username="Aathithyabalan J"
          jobTitle="Full-Stack Engineer Intern"
          postDate="1d • Edited"
          postText="Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨"
          imageUrl="./post5.jpg" // Replace with your actual image URL
          likes={5352}
          comments={72}
          shares={51}
          reposts={51}
        />
        <Post
          username="Aathithyabalan J"
          jobTitle="Full-Stack Engineer Intern"
          postDate="1d • Edited"
          postText="Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨"
          imageUrl="./post3.jpg" // Replace with your actual image URL
          likes={5352}
          comments={72}
          shares={51}
          reposts={51}
        />
        <Post
          username="Aathithyabalan J"
          jobTitle="Full-Stack Engineer Intern"
          postDate="1d • Edited"
          postText="Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨"
          imageUrl="./post3.jpg" // Replace with your actual image URL
          likes={5352}
          comments={72}
          shares={51}
          reposts={51}
        />
        <Post
          username="Aathithyabalan J"
          jobTitle="Full-Stack Engineer Intern"
          postDate="1d • Edited"
          postText="Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨"
          imageUrl="./post2.jpg" // Replace with your actual image URL
          likes={5352}
          comments={72}
          shares={51}
          reposts={51}
        />
        <Post
          username="Aathithyabalan J"
          jobTitle="Full-Stack Engineer Intern"
          postDate="1d • Edited"
          postText="Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨"
          imageUrl="./post1.jpg" // Replace with your actual image URL
          likes={5352}
          comments={72}
          shares={51}
          reposts={51}
        />
      </div>
    </div>
  );
};

export default Content;

