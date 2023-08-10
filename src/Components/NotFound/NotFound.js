import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";



const NotFound = () => {
    const navigate = useNavigate();
    
    return (
    <div className="notFound">
      <div className="center-notFound">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <button onClick={()=>{navigate('/little-lemon')}} className="btn">
            Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
