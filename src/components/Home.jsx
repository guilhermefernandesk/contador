import React from "react";
import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <div className='App'>
      <h1>Home Page</h1>
          <Link to="/">Home</Link>
    </div>
  );
};
  
export default Home;