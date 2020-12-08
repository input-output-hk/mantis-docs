import styled from '@emotion/styled';

export const StyledHeading = styled('h1')`
  font-size: 34px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing: normal;
  padding: 0 16px;
  flex: 1;
  margin-top: 0;
  margin-bottom: 0.5rem;
  padding-top: 0;
  position: relative;
  z-index: 1;
  color: ${props => props.theme.colors.heading};
  &:before {
    content: "";
    width: 36px;
    height: 87px;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='87' viewBox='0 0 36 87'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233F9' fill-rule='nonzero'%3E%3Cpath d='M462 156.171L487.997 219 498 194.829 472.001 132z' transform='translate(-462 -132)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    position: absolute;
    display: inline-block;
    z-index: -1; 
    top: -0.65rem;
    left: -0.1rem;
  }
`;

export const Edit = styled('div')`
  padding: 1rem 1.5rem;
  text-align: right;

  a {
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    text-decoration: none;
    color: #555;
    border: 1px solid rgb(211, 220, 228);
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    color: #555;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    height: 30px;
    padding: 5px 16px;
    &:hover {
      background-color: rgb(245, 247, 249);
    }
  }
`;

export const StyledMainWrapper = styled.div`
  color: ${props => props.theme.colors.text};

  ul,
  ol {
    -webkit-padding-start: 40px;
    -moz-padding-start: 40px;
    -o-padding-start: 40px;
    margin: 24px 0px;
    padding: 0px 0px 0px 2em;

    li {
      font-size: 16px;
      line-height: 1.8;
      font-weight: 400;
    }
  }

  a {
    transition: color 0.15s;
    color: ${props => props.theme.colors.text};
    text-decoration: underline;
  }
  a:hover {
    color: #32fd98;
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;

    background: ${props => props.theme.colors.background};
  }

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;
