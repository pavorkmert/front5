// src/pages/about.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="container3">
          <h4>ABOUT</h4>
          <p>Hi! My name is Mark. I'm a product manager at Asimov Lab. I'm also an ML engineer specialising in neural networks and large language models. I explore different approaches to AI and experiment with them.</p>
          <h4>SOME OF MY LATEST WORKS</h4>
          <div className="projects">
            <div className="right">
              <h5>Asimov Lab</h5>
              <p>AI platform for generating assessment papers based on your materials and flexible customisations with the ability to validate solutions</p>
            </div>
            <div className="mid">
              <h5>Auricle</h5>
              <p>Music app where you can chat, find friends of interest and get personalised recommendations using Generative Artificial Intelligence </p>
            </div>
            <div className="left">
              <h5>ImaGen</h5>
              <p>System for generating a sequence of matched images based on fiction</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
