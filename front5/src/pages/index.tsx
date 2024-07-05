// src/pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="container2">
          <div className="right">
            <h2>coder</h2>
            <p>ML, LLM, NLP, DL</p>
            <p>engineer</p>
          </div>
          <div className="ima">
            <img src="/images/me.png" alt="Mark Petrov" />
          </div>
          <div className="left">
            <h2>manager</h2>
            <p>product manager,</p>
            <p>business analyst</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
