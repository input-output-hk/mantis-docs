import React from 'react';
import "./styles/footer.css";
import mantisLogo from './images/mantis-logo-dark.svg'
import iohkLogo from './images/iohk-logo-vector-dark.svg'
import etcLogo from './images/etherium-classic-dark.svg'
import { Link } from 'gatsby'

const Footer = () => (
  <footer>
    <div className="title">
      <h1>"Liquorice sweet roll tootsie roll lemon drops croissant jelly ya dessert."</h1>
      <p>Charles Hoskinson - CEO, IOHK</p>
    </div>
    <div className="flex-grid">
      <div className="col">
        <div className="img-wrap">
          <img src={mantisLogo} alt="Mantis" height="51px"/>
        </div>
        <ul>
          <li><Link to='/downloads'>Downloads</Link></li>
          <li><Link to='/getting-started'>Documentation</Link></li>
          <li><a href='https://www.reddit.com/r/mantisclient/' target="_blank" rel="noopener noreferrer">Reddit</a></li>
        </ul>
        <div className='button-group'>
          <a href="" className="button"><span>Discover Mantis</span></a>
          <a href="" className="button"><span>Download Wallet</span></a>
        </div>
      </div>
      <div className="col flex-inner">
        <div className="col">
        <div className="img-wrap">
          <img src={iohkLogo} alt="IOHK" />
        </div>
          <ul>
            <li><a href='https://iohk.io' target="_blank" rel="noopener noreferrer">iohk.io</a></li>
            <li><a href='https://iohk.io/en/contact/' target="_blank" rel="noopener noreferrer">Contact us</a></li>
            <li><a href='https://iohk.io/en/blog' target="_blank" rel="noopener noreferrer">Blog</a></li>
            <li><a href='https://www.youtube.com/channel/UCBJ0p9aCW-W82TwNM-z3V2w' target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
        <div className="col">
        <div className="img-wrap">
          <img src={etcLogo} alt="Ethereum Classic" />
        </div>
          <ul>
            <li><a href='https://ethereumclassic.org' target="_blank" rel="noopener noreferrer">ethereumclassic.org</a></li>
            <li><a href='https://ecips.ethereumclassic.org/all' target="_blank" rel="noopener noreferrer">ECIPS</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom-text">
      <div class="bottom-links">
        <a href="">Terms & Privacy Policy</a>
      </div>
      <span className="align-right">
        © {new Date().getFullYear()} All rights reserved.
      </span>
    </div>
  </footer>
)

export default Footer