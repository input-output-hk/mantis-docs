import React from 'react'
import Button from './mdxComponents/button'
import Link from './link'
import styled from '@emotion/styled'

const lightThemeHeroImg = require('./images/build-cardano-light.png')

const darkThemeHeroImg = require('./images/build-cardano-dark.png')

const StyledHero = styled.div`
  margin-top: -3rem !important;
  .breakout {  
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100vw;
    &.bg-highlight {
      background-color: ${({ theme }) => theme.colors.panelBackground};
    }
  }
  

  .site-hero {
    max-width:80vw;
    margin: 0 auto;
    padding: 10rem 0;
    ${({ theme }) => {
      if (theme.label === 'light') {
        return `background: url(${lightThemeHeroImg}) no-repeat center right;`
      } else {
        return `background: url(${darkThemeHeroImg}) no-repeat center right;`
      };
    }}
    background-size: 600px;
    .heading-msg {
      width: 50%;
      text-align:left;
      h1 {
        font-size: 3rem;
        line-height:1;
        max-width: 40rem;
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 2rem;
      }
      p {
        font-weight: 400;
        font-size: 2rem;
        line-height:1.4;
        margin-bottom: 2rem;
      }
      button {
        text-transform: uppercase;
        margin: unset;
      }
    }
    @media(max-width:959px) {
      padding: 20rem 0 5rem 0;
      max-width:95vw;
      background: url(${lightThemeHeroImg}) no-repeat 50% 0;
      background-size: 300px;
      .heading-msg {
        width:100%;
        text-align: center;
        h1 {
          max-width:100%;
          font-size: 2.5rem;
        }
        p {
          font-size: 1.5rem;
        }
        button {
          margin: 0 auto;
        }
      }
    }
  }

  
  @media (max-width: 960px) {
    .heading-msg {
    }
  }
`


const Hero = ({ heading, text, label, ctalink}) => {

  return (
    <StyledHero>
      <div className='breakout bg-highlight'>
        <div className='site-hero'>
          <div className="heading-msg">
            <h1>{heading}</h1>
            <p>{text}</p>
            <Link to={ctalink}>
              <Button primary>{label}</Button>
            </Link>
          </div>
        </div>
      </div>
    </StyledHero>
  );
}

export default Hero
