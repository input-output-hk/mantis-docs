import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Discord } from '@styled-icons/boxicons-logos/Discord'
import Link from './link';
import Loadable from 'react-loadable';

import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import { DarkModeSwitch } from './DarkModeSwitch';

const help = require('./images/help.svg');

const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

import Sidebar from './sidebar';

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const NavBarWrapper = styled('div')`
  @media(max-width:767px) {
    .visibleMobile {
      background: white;
    }
  }
  .navBarBrand img {
    width:253px;
    height: 43px;
  }
  .navBarDefault {
    &.light-header {
      background: #f8f8f8;
      background-image: url('../../images/header-1-01.png');
      background-size: cover;
    }
    &.dark-header {
      background: #33FF99;
    }
  }
`

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${props => (props.isDarkThemeActive ? '#001932' : undefined)};

  @media (max-width: 767px) {
    display: block;
  }
`;

const Header = ({ location, theme, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
          }
        }
      }
    `}
    render={data => {
      const logoImg = require('./images/logo.svg');

      const twitter = require('./images/twitter.svg');

      const discordBrandsBlock = require('./images/discord-brands-block.svg');

      const twitterBrandsBlock = require('./images/twitter-brands-block.svg');

      const {
        site: {
          siteMetadata: { headerTitle, githubUrl, helpUrl, tweetText, logo, headerLinks },
        },
      } = data;

      const finalLogoLink = logo.link !== '' ? logo.link : 'https://hasura.io/';

      return (
        <NavBarWrapper className={'navBarWrapper'}>
          {console.log('theme', theme)}
          <nav className={`${theme.label === 'light' ? 'light-header' : 'dark-header'}  navBarDefault`}>
            <div className={'navBarHeader'}>
              <Link to={finalLogoLink} className={'navBarBrand'}>
                <img
                  className={'img-responsive displayInline'}
                  src={logo.image !== '' ? logo.image : logoImg}
                  alt={'logo'}
                />
              </Link>
              <div dangerouslySetInnerHTML={{ __html: headerTitle }} />
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper hiddenMobile navBarUL'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null}
            <div id="navbar" className={'topnav'}>
              <div className={'visibleMobile'}>
                <Sidebar location={location} />
                <hr />
              </div>
              <ul className={'navBarUL navBarNav navBarULRight'}>
                {helpUrl !== '' ? (
                  <li>
                    <a href={helpUrl}>
                      <img src={help} alt={'Help icon'} />
                    </a>
                  </li>
                ) : null}
                  <li className='btn'>
                    <Twitter
                      size="24"
                      href="https://twitter.com"
                      data-show-count="true"
                      aria-label="Twitter"
                    >
                    </Twitter>
                  </li>
                  <li className='btn'>
                    <Discord
                      size="24"
                      href="https://discord.com"
                      data-show-count="true"
                      aria-label="Discord"
                    >
                    </Discord>
                  </li>
                {githubUrl !== '' ? (
                  <li className='btn'>
                    <Github
                      size="24"
                      href={githubUrl}
                      data-show-count="true"
                      aria-label="Star on GitHub"
                    >
                    </Github>
                  </li>
                ) : null}
                <li>
                  <DarkModeSwitch
                    isDarkThemeActive={isDarkThemeActive}
                    toggleActiveTheme={toggleActiveTheme}
                  />
                </li>
              </ul>
            </div>
          </nav>
          <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
            <div className={'navBarDefault removePadd'}>
              <span
                onClick={myFunction}
                className={'navBarToggle'}
                onKeyDown={myFunction}
                role="button"
                tabIndex={0}
              >
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null}
          </StyledBgDiv>
        </NavBarWrapper>
      );
    }}
  />
);

export default Header;
