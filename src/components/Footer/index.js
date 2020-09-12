import React from 'react';
import * as Style from './style.module.css';

function Footer() {
  return (
      <footer className={Style.footer}>
          <div className={"container"}>
              <p className={Style.c1}>&copy; 2020 Footer</p>
          </div>
      </footer>
    );
}

export {Footer};