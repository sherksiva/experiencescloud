import React from "react";
import Img from "/images/photo-grid.png"

export default function Hero() {
  return (
    <section className="hero">

      <img src={Img} className="hero--photo" alt="Photo Grid" />
      <div className="hero-text--container">
      <h1 className="hero--header">Experiences</h1>
      <p className="hero--text">
        You cannot create experience. You must undergo it.
      </p>
      </div>
    </section>
  );
}
