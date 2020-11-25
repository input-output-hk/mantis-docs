import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import Footer from './Footer';
import config from '../../config.js';

const SiteWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display:flex;
  flex-direction:column;
  footer {
    transition: all 0.2s ease;
    opacity:0.4;
    background: transparent;
    border-top: 1px solid ${({ theme }) => theme.colors.panelBackground};
    max-width: 100rem;
    margin: 2rem auto 0 auto;
    * {
      color: ${({ theme }) => theme.colors.text};
    }
    a img {
      display:none;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.link};
    }
    hr {
      margin-bottom: 1.5rem;
    }
    &:hover {
      opacity: 1;
    }
    @media (max-width:767px) {
      opacity: 1;
      padding: 2rem;
      > div > div {
        margin: 0;
      }
      > div > div > div > div:nth-child(2) {
        margin-top:1rem;
      }
      a div {
        padding: 0 !important;
      }
    }
  }
`

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};

  .sideBarUL li a, .sectionHeading, .doc-title {
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: 0.4px;
    padding: 10px 0;
  }

  .showFrontLine .active > a {
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    z-index: 1;
  }

  .showFrontLine .active a {
    font-weight: 900;
  }

  .sideBarUL .item > a:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    z-index: 1;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({theme}) => theme.colors.primary};
      -webkit-transform-origin: 100% 10%;
      -ms-transform-origin: 100% 10%;
      transform-origin: 100% 10%;
      -webkit-transform: skew(23deg);
      -ms-transform: skew(23deg);
      transform: skew(23deg);
      z-index: -1;
    }
    /* background: #F8F8F8 */
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-direction:column;
  flex-grow: 1;
  margin: 0px 88px;
  padding-top: 3rem;
  height:auto;
  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
`;

const MaxWidth = styled('div')`
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const LeftSideBarWidth = styled('div')`
  width: 25rem;
`;

const RightSideBarWidth = styled('div')`
  width: 20rem;
`;

const Layout = ({ children, location, useFwTemplate }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <SiteWrap>
        <Wrapper>
                <LeftSideBarWidth className={'hiddenMobile'}>
                  <Sidebar location={location} />
                </LeftSideBarWidth>
                {config.sidebar.title ? (
                  <div
                    className={'sidebarTitle sideBarShow'}
                    dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
                  />
                ) : null}
                <Content>
                  <MaxWidth>{children}</MaxWidth>
                </Content>
                <RightSideBarWidth className={'hiddenMobile'}>
                  {location &&
                    <RightSidebar location={location} />
                  }
                </RightSideBarWidth>
        </Wrapper>
      </SiteWrap>
      <Footer />
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
