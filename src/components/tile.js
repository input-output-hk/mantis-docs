import React from 'react'
import Button from './mdxComponents/button'
import Link from './link'
import styled from '@emotion/styled'

import { Info } from '@styled-icons/icomoon/Info'

const StyledTile = styled.div`
  > * {
    margin-bottom: 1rem;
  }
  height: 100%;
  display:flex;
  flex-direction: column;
  svg {
    max-width:3rem;
    color: ${props => props.theme.colors.link};
  }
  a {
    margin-top: auto;
    button {
      margin: unset;
    }
  }
  p {
    position:relative;
    height: 7.2rem;
    line-height:1.2;
    overflow: hidden;
  }
  span {
    margin-top:-1.5rem;
  }
  p.heightAuto {
    height: auto;
  }
  &.top-divider {
    padding-top: 4rem;
    border-top: 1px dotted ${props => props.theme.colors.accent};
  }
`

const Tile = ({ heading, text, label, ctalink, icon, single }) => {

  return (
    <StyledTile className={`tile ${single && `top-divider`}`}>
      {icon ? icon : <Info/>}
      <h2>{heading}</h2>
      <p className={`truncate ${single && `heightAuto`}`}>{text}</p>
      {!single && <span>&hellip;</span>}
      <Link to={ctalink}>
        {single ?
          <Button primary>{label}</Button>
          :
          <Button>{label}</Button>
        }
      </Link>
    </StyledTile>
  );
}

export default Tile