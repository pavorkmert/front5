// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="container1">
      <div className="left">
        <p>ru</p>
      </div>
      <nav className="right">
        <div className="menu">
          <Link href="/"><p>home</p></Link>
          <Link href="/about"><p>about</p></Link>
          <p>work</p>
          <p>contacts</p>
        </div>
        <div className="icons">
          <a href="https://t.me/pavorkmert"><img src="/images/telegram.png" alt="Telegram" /></a>
          <a href="https://github.com/pavorkmert"><img src="/images/git.png" alt="GitHub" /></a>
          <a href="mailto:MarkPetrov2015@mail.ru"><img src="/images/mail.png" alt="Email" /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
