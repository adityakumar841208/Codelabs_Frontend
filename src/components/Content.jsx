import React from 'react';
// import { Typography } from '@mui/material';
import Post from '../post/Post';

const Content = () => {
  return (
    <>
      <div></div>
      <div className='h-full m-2 relative rounded-3xl'>
        {/* <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'white' }}>
        Content Section
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', color: 'white' }}>
        This is the main content area.
      </Typography> */}
        <Post
          username="Aathithyabalan J"
          jobTitle="Full-Stack Engineer Intern"
          postDate="1d • Edited"
          postText="Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨"
          imageUrl="./comp.webp" // Replace with your actual image URL
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
          imageUrl="./comp.webp" // Replace with your actual image URL
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
          imageUrl="./comp.webp" // Replace with your actual image URL
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
          imageUrl="./comp.webp" // Replace with your actual image URL
          likes={5352}
          comments={72}
          shares={51}
          reposts={51}
        />
      </div>
    </>
  );
};

export default Content;

