import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-200 py-10">
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-18 my-20"
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          About Me
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
        "Hi, I’m Taiyab! As a fresher in the world of software engineering. I am Graduated from Veer Bahadur Singh purvanchal University (VBSPU).I am from SARAY DURGA-DASH BADLAPUR JAUNPUR UTTAR PRADESH(222125) 
        </p>
        <br />

        {/* Education & Training Section */}
        <div className="mt-8">
          <h1 className="text-green-600 font-semibold text-2xl text-center mb-2">
            Education & Training
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            BCA from VBSPU
            <hr />
            Self-taught MERN stack development through online resources and hands-on projects..

          Proactively learning modern web development tools like React.js, Node.js, MongoDB,and Tailwind CSS
          </p>
        </div>
        <br />

        {/* Skills & Experience Section */}
        <div className="mt-8">
          <h1 className="text-green-600 font-semibold text-2xl text-center mb-2">
            Skills & Experience
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Frontend Development:- React.js, HTML, CSS, JavaScript, Tailwind CSS
          Backend Development:- Node.js, Express.js
          Database Management:- MongoDB, MongoDB Atlas
          Version Control: Git, GitHub
          Other Skills:- REST APIs, Responsive Design, Debugging, Problem Solving
          <hr />

          Bookstore Application: Built a dynamic bookstore app with React.js and MongoDB, allowing users to browse and manage books.
Portfolio Website: Designed and developed a personal portfolio website to showcase projects and skills, focusing on responsive design and clean user interface
          </p>
        </div>
        <br />

        {/* Professional Experience Section */}
        {/* <div className="mt-8">
          <h1 className="text-green-600 font-semibold text-2xl text-center mb-2">
            Professional Experience
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            cupiditate non sed maiores porro.
          </p>
        </div>
        <br /> */}

        {/* Achievements and Awards Section */}
        <div className="mt-8">
          <h1 className="text-green-600 font-semibold text-2xl text-center mb-2">
            Achievements and Awards
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Gained proficiency in modern web development tools and frameworks through self-learning and hands-on practice.
          <hr />
          Consistently completed academic assignments and projects with excellent feedback from professors.
          <hr />
          Actively participated in coding challenges and hackathons within college, enhancing           problem-solving skills.
          </p>
        </div>
        <br />

        {/* Mission Statements Section */}
        <div className="mt-8">
          <h1 className="text-green-600 font-semibold text-2xl text-center mb-2">
            Mission Statements
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
          "As a passionate software engineering student, my mission is to create innovative and efficient digital solutions that solve real-world problems. I am committed to continuously learning and growing in the field of web development, specializing in the MERN-FULL-stack. Through my projects and collaborations, I aim to contribute to impactful technologies while building a strong foundation for a successful career in the tech industry
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
