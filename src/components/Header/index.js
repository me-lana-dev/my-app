import React from 'react';
import * as Style from './style.module.css';

function Header() {
  return (
      <header className={"header"}>
          <div className={"container"}>
            <h1 className={Style.c1}>My app</h1>
              <p>My first (test) app!</p>
          </div>
      </header>
    );
}

export {Header};