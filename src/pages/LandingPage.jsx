import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle, AccessAlarm, IntegrationInstructions } from '@mui/icons-material';
import flogo from '../assets/flogo.png';
import dbImage1 from '../assets/db.png';
import dbImage2 from '../assets/db1.png';
import dbImage3 from '../assets/db2.png';
import dbImage4 from '../assets/db3.png';
import tkImage1 from '../assets/tk.png';
import tkImage2 from '../assets/tk1.png';
import tkImage3 from '../assets/tk2.png';
import tkImage4 from '../assets/tk3.png';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';
import feature5 from '../assets/feature5.png';
import whysign from '../assets/whysign.jpg';
import { GitHubIcon, TwitterIcon, LinkedInIcon } from '../layouts/SocialIcons';


const dbImages = [dbImage1, dbImage2, dbImage3, dbImage4];
const tkImages = [tkImage1, tkImage2, tkImage3, tkImage4];

const FeatureCard = ({ title, image }) => (
  <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
    <img src={image} alt={title} className="object-cover w-full h-full" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-white font-bold text-lg">{title}</h3>
    </div>
  </div>
);

const WhyFreelixSection = () => (
  <section className="bg-white mt-40 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-[#00796B]">
            Why  Freelix?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#00796B] mt-1" />
              <p className="text-gray-700">
                Streamlined workflow management with integrated tools for invoicing, 
                contract handling, and task tracking
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#00796B] mt-1" />
              <p className="text-gray-700">
                Secure  and automated invoice generation to save 
                you time and reduce administrative burden
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#00796B] mt-1" />
              <p className="text-gray-700">
                Advanced analytics and reporting to help you make data-driven 
                decisions for your freelance business
              </p>
            </div>
          </div>
          {/* <Button
            variant="contained"
            style={{
              backgroundColor: "#00796B",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            className="shadow hover:bg-gray-200 transition"
            component={Link}
            to="/signup"
          >
            Join Freelix Today
          </Button> */}
        </div>
        
        {/* Image */}
        <div className="w-full md:w-2/5">
          <img
            src={whysign}
            alt="Freelix Platform"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
            style={{ maxHeight: '400px' }} 
          />
        </div>
      </div>
    </div>
  </section>
);

const PuzzleFeatureSection = () => {
  const features = [
    { title: "Contract Generation", image: feature1 },
    { title: "Free Invoice Downloads", image: feature2 },
    { title: "Personal Task Tracker", image: feature3 },
    { title: "Functional Dashboard", image: feature5 },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#DEF7E5] rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-start">
        {/* Feature Cards on the left */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full md:w-1/2">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} image={feature.image} />
          ))}
        </div>
        
        {/* Feature Description on the right */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-[#00796B] animate-fadeInUp">
            Explore Our Features
          </h1>

          <div className="space-y-4 animate-fadeInUp delay-100">
            <p className="text-gray-800 text-lg leading-relaxed">
              Transform your project management experience with our cutting-edge
              tools and intuitive features. Each component is crafted to enhance
              your productivity and streamline collaboration.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Join thousands of teams who have already revolutionized their
              workflow with our platform.
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#00796B",
                color: "white",
                fontWeight: "bold",
                padding: "10px 20px",
                marginBottom: "20px",
              }}
              className="shadow hover:bg-gray-200 transition"
              component={Link}
              to="/login"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#00796B] text-white py-4">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <GitHubIcon />
        </a>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <TwitterIcon />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <LinkedInIcon />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Freelix. All rights reserved.</p>
    </div>
  </footer>
);

const LandingPage = () => {
  const [dbIndex, setDbIndex] = useState(0);
  const [tkIndex, setTkIndex] = useState(0);

  useEffect(() => {
    const dbInterval = setInterval(() => {
      setDbIndex((prevIndex) => (prevIndex + 1) % dbImages.length);
    }, 3000);

    const tkInterval = setInterval(() => {
      setTkIndex((prevIndex) => (prevIndex + 1) % tkImages.length);
    }, 3000);

    return () => {
      clearInterval(dbInterval);
      clearInterval(tkInterval);
    };
  }, []);

  return (
    <div>
      {/* Hero Section with background image */}
      <div
        style={{
          padding: '20px 0',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Top Left Illustration */}
        <img
          src={dbImages[dbIndex]}
          alt="Top Left Illustration"
          style={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            width: '20%',
            minWidth: '150px',
            maxWidth: '300px',
            zIndex: 1,
          }}
        />

        <div className="bg-transparent text-[#00796B] flex flex-col items-center py-16 px-4 sm:px-8 md:px-10 lg:px-20">
          {/* Main Content */}
          <div className="text-center max-w-3xl w-full mt-32">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: '#263238', fontFamily: 'Arial, sans-serif' }}
            >
              Think, plan, & track <span className="block">all in one place</span>
            </h1>
            <Button
            variant="contained"
            style={{
              backgroundColor: "#00796B",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            className="shadow hover:bg-gray-200 transition"
            component={Link}
            to="/signup"
          >
            Join Freelix Today
          </Button>
          </div>
        </div>

        {/* Bottom Right Illustration */}
        <img
          src={tkImages[tkIndex]}
          alt="Bottom Right Illustration"
          style={{
            position: 'absolute',
            bottom: '3%',
            right: '5%',
            transform: 'translateY(50%)',
            width: '20%',
            minWidth: '150px',
            maxWidth: '300px',
            zIndex: 1,
          }}
        />
      </div>

      {/* Why Freelix Section */}
      <WhyFreelixSection />

      {/* Puzzle Feature Section */}
      <PuzzleFeatureSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;