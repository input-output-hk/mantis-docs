import * as React from 'react'
import styled from '@emotion/styled'

const StyledGridItem = styled.div`
  /* ${props => props.variant && `border-left: 1px dotted ${props => props.theme.colors.accent};`} */
  padding-left: 1rem;
  border-left: 1px dotted ${props => props.theme.colors.accent};
  ${props => props.flexFactor && `width: ${props.flexFactor}`};
  @media (max-width: 1159px) {
    ${props => props.mobFlexFactor && `width: ${props.mobFlexFactor}`};
  }
  @media (max-width: 767px) {
    width:100%;
    margin-bottom: 3rem;
  }
  ${props => props.single && `border: none; * {
    text-align: center;
    margin: 0 auto 2rem auto;
  }`}
`

const GridItem = (props) => (
  <StyledGridItem {...props}>
    {props.children}
  </StyledGridItem>
)

export default GridItem