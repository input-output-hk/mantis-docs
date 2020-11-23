import React from 'react';
import "./styles/footer.css";
import mantisLogo from './images/mantis-logo-dark.svg'
import iohkLogo from './images/iohk-logo-vector-dark.svg'
import etcLogo from './images/etherium-classic-dark.svg'

const Footer = () => (
  <footer>
    <div className="title">
      <h1>"Liquorice sweet roll tootsie roll lemon drops croissant jelly ya dessert."</h1>
      <p>Charles Hoskinson - CEO, IOHK</p>
    </div>
    <div className="flex-grid">
      <div className="col">
        <div className="img-wrap">
          <img src={mantisLogo} alt="Matis" height="51px"/>
        </div>
        <ul>
          <li><a href=''>Downloads</a></li>
          <li><a href=''>Documentation</a></li>
          <li><a href=''>Community</a></li>
          <li><a href=''>Built on Mantis</a></li>
          <li><a href=''>YouTube</a></li>
        </ul>
        <div className='button-group'>
          <a href="" className="button"><span>Discover Mantis</span></a>
          <a href="" className="button"><span>Download Mantis Wallet</span></a>
        </div>
      </div>
      <div className="col flex-inner">
        <div className="col">
        <div className="img-wrap">
          <img src={iohkLogo} alt="IOHK" />
        </div>
          <ul>
            <li><a href=''>iohk.io</a></li>
            <li><a href=''>Contact us</a></li>
            <li><a href=''>Blog</a></li>
            <li><a href=''>YouTube</a></li>
          </ul>
        </div>
        <div className="col">
        <div className="img-wrap">
          <img src={etcLogo} alt="Ethereum Classic" />
        </div>
          <ul>
            <li><a href=''>ethereumclassic.org</a></li>
            <li><a href=''>ECIPS</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom-text">
      <div class="bottom-links">
        <a href="">Terms & Conditions</a>
        {' '}
        |
        {' '}
        <a href="">Privacy Policy</a>
      </div>
      <span className="align-right">
        © {new Date().getFullYear()} All rights reserved.
      </span>
    </div>
  </footer>
)

export default Footer