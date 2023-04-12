
import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
          <Link to="/">Home</Link>
    </div>
  );
};
  
export default About;