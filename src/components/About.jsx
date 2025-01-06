import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen sticky bg-gray-50 flex -mt-12 items-center justify-center">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* About Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800">
              About <span className="text-primaryHover">CodeLabs</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At CodeLabs, we are dedicated to empowering coders and developers
              by providing a comprehensive platform to learn, grow, and
              collaborate. Whether you're just starting your journey or looking
              to enhance your skills, CodeLabs offers expertly crafted courses,
              quizzes, and community support tailored to your needs. We aim to
              create a hub where innovation meets learning, helping you to
              excel in software development and stay ahead in the tech-driven
              world.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Join us in building a thriving community where knowledge is
              shared, challenges are conquered, and new ideas come to life.
              Let's code the future together!
            </p>
          </div>

          {/* svg image section  */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <svg
                className="absolute w-full h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="imageFill"
                    patternUnits="objectBoundingBox" // Use this to scale the image within the path
                    width="1" // Prevent tiling by setting width and height to 1
                    height="1"
                  >
                    <image 
                      xlinkHref="post5.jpg" // Path to your image
                      x="0"
                      y="0"
                      width="200" // Match the dimensions to your SVG viewBox or desired size
                      height="200"
                      preserveAspectRatio="xMidYMid slice" // Ensures the image fits correctly
                    />
                  </pattern>
                </defs>
                <path
                  fill="url(#imageFill)"
                  d="M43.2,-60.4C54.3,-50.1,57.8,-31.3,60.4,-13.8C63.1,3.8,64.9,20.1,58.7,34.2C52.5,48.4,38.2,60.3,23.4,66.3C8.5,72.3,-6.8,72.5,-22.3,67.6C-37.7,62.7,-53.2,52.7,-60.6,38.6C-67.9,24.5,-67.2,6.3,-64.4,-10.1C-61.5,-26.4,-56.4,-40.8,-46.3,-51.2C-36.2,-61.5,-21.1,-67.7,-5.7,-65.8C9.7,-64,19.3,-54.6,43.2,-60.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AboutPage;
