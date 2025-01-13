import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-vh p-2 bg-purple-100 flex flex-col rounded-xl items-center justify-center md:mx-10 mx-4 lg:mx-10 my-2">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* About Section */}
          <div className=" lg:text-left">
            <p className="font-bold text-start text-purple-500">
              About us
            </p>
            <h1 className="md:text-5xl lg:text-5xl text-2xl font-bold text-gray-800 mt-2">
              Welcome to CodeLabs
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed text-lg mx-auto max-w-4xl">
              At CodeLabs, we are dedicated to empowering coders and developers by providing a comprehensive platform to learn, grow, and collaborate. Whether you're just starting your journey or looking to enhance your skills, CodeLabs offers expertly crafted courses, quizzes, and community support tailored to your needs. We aim to create a hub where innovation meets learning, helping you to excel in software development and stay ahead in the tech-driven world.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <img 
              src="./comp.webp" 
              className="w-full max-w-xs h-96 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl hidden sm:block" 
              alt="Description" 
            />
          </div>
        </div>
      </div>

      {/* Data Section About CodeLabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 col-span-1 lg:col-span-2 m-2">
        <div className="p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-purple-500">Our Mission</h2>
          <p className="mt-4 text-gray-600">To provide a platform that helps developers thrive by offering essential tools, resources, and a collaborative learning environment.</p>
        </div>

        <div className=" p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-purple-500">Our Values</h2>
          <p className="mt-4 text-gray-600">We believe in innovation, community, and continuous learning. Our core values are centered on empowering developers and fostering collaboration across all skill levels.</p>
        </div>

        <div className="p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-purple-500">Our Vision</h2>
          <p className="mt-4 text-gray-600">To become a leading platform for developers, offering not only courses but an entire ecosystem for learning, growth, and career advancement.</p>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
