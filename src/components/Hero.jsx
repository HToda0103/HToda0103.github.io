import React from "react";
import image from "../IMG_0600.JPG"

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <img src={image} alt="プロフィール画像" className="profile-image" />
        <h2>
          Hello, I'm <span className="highlight">Hiyori</span>
        </h2>
        <p>戸田 陽春</p>
      </div>
    </section>
  );
};

export default Hero;
