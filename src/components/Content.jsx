import React, { useState, useEffect, useRef } from "react";
import Post from "../post/Post";
import PostOption from "../post/PostOption";
import PostSkeleton from "post/PostSkeleton";

const Content = () => {
  const [posts, setPosts] = useState([]); // all post
  const [isLoading, setIsLoading] = useState(false); // loasding state
  const observerRef = useRef(null); // ref for the IntersectionObserver item

  const initialPosts = [
    {
      username: "Aathithyabalan J",
      jobTitle: "Full-Stack Engineer Intern",
      postDate: "1d • Edited",
      postText:
        "Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨",
      imageUrl: "./post5.jpg",
      likes: 5352,
      comments: 72,
      shares: 51,
      reposts: 51,
    },
    {
      username: "Aathithyabalan J",
      jobTitle: "Full-Stack Engineer Intern",
      postDate: "1d • Edited",
      postText:
        "Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨",
      imageUrl: "./post3.jpg",
      likes: 5352,
      comments: 72,
      shares: 51,
      reposts: 51,
    },
    {
      username: "Aathithyabalan J",
      jobTitle: "Full-Stack Engineer Intern",
      postDate: "1d • Edited",
      postText:
        "Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨",
      imageUrl: "./post2.jpg",
      likes: 5352,
      comments: 72,
      shares: 51,
      reposts: 51,
    },
    {
      username: "Aathithyabalan J",
      jobTitle: "Full-Stack Engineer Intern",
      postDate: "1d • Edited",
      postText:
        "Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨",
      imageUrl: "./post5.jpg",
      likes: 5352,
      comments: 72,
      shares: 51,
      reposts: 51,
    },
    {
      username: "Aathithyabalan J",
      jobTitle: "Full-Stack Engineer Intern",
      postDate: "1d • Edited",
      postText:
        "Day 19 of Master the Web Daily 🚀 'Your brain is like a super-fast Ferrari, zooming through ideas and problem-solving at lightning speed!' 🧠💨",
      imageUrl: "./post1.jpg",
      likes: 5352,
      comments: 72,
      shares: 51,
      reposts: 51,
    },
  ];

  // function to fetch post
  const fetchMorePosts = () => {
    setIsLoading(true);

    // making delay of 1s
    setTimeout(() => {
      setPosts((prevPosts) => [...prevPosts, ...initialPosts]); // adding same post
      setIsLoading(false);
    }, 1000);
  };

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          fetchMorePosts();
        }
      },
      {
        threshold: 1.0,
        rootMargin: "200px"
      }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [isLoading]);

  useEffect(() => {
    setPosts(initialPosts);
  }, []);

  return (
    <div className="lg:ml-2 md:ml-2 bg-none">
      <PostOption />
      {/* {console.log(posts)} */}
      <hr className="mx-2 my-1" />
      <div className="h-full m-2 rounded-3xl">
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            jobTitle={post.jobTitle}
            postDate={post.postDate}
            postText={post.postText}
            imageUrl={post.imageUrl}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
            reposts={post.reposts}
          />
        ))}
      </div>
      <div ref={observerRef} className="mt-4 px-2 text-center min-h-[200px] sm:min-h-[250px]">
        {/* Only render PostSkeleton when loading */}
        {isLoading && (
          <PostSkeleton />
        )}
      </div>

    </div>
  );
};

export default Content;
