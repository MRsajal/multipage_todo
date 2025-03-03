import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [mainPoint, setMainPoint] = useState(() => {
    return JSON.parse(localStorage.getItem("p")) || 0;
  });
  return (
    <>
      <div className="profile">
        <div className="profile-img">
          <img src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="profile-txt">Your accuired point is : {mainPoint}</div>
      </div>
    </>
  );
}
