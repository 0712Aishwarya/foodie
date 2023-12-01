import Profile from "./Profile";
// import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-semibold mb-4">Welcome to FoodCircles!</h1>
        <p className="text-gray-700 mb-6">
          At FoodCircles, we are passionate about connecting you with the best culinary experiences
          in your city. Our platform is dedicated to bringing together food enthusiasts and top-rated
          restaurants, offering a seamless dining experience right at your fingertips.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is simple: to revolutionize the way you experience food. We strive to provide
          a diverse range of cuisines, from local favorites to international delights, delivered with
          exceptional quality and service.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Discover, Order, Enjoy!</h2>
        <p className="text-gray-700 mb-6">
          Explore a wide array of restaurants, browse through menus, and place orders effortlessly.
          Whether you're craving comforting classics or seeking adventurous flavors, FoodCircles has
          got you covered. With just a few clicks, savor the flavors you love, delivered right to your doorstep.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Why Choose FoodCircles?</h2>
        <ul className="list-disc text-gray-700 mb-6 ml-6">
          <li className="mb-2">- Extensive Selection: Access to a vast network of restaurants and cuisines.</li>
          <li className="mb-2">- Seamless Experience: User-friendly interface for easy browsing and ordering.</li>
          <li className="mb-2">- Reliable Delivery: Timely and secure delivery to ensure your meal arrives fresh.</li>
          <li className="mb-2">- Reviews & Ratings: Transparent feedback to help you make informed decisions.</li>
        </ul>
      </div>
      <Outlet />
    </div>
  </div>
  );
};

export default About;
