import * as React from 'react'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  padding: 20px 40px;
  font-size: 14px;
  border-radius: 8px;
  font-weight: 600;
  border: 0;
  cursor: pointer;
  transition: all .2s ease-in-out;
  width: 200px;
  background-color: ${props => 
    props.primary ? props.theme.colors.primary : ''};
  color: ${props =>
    props.primary ? '#fff' : '#333'};
  svg {
    max-width: 1.6rem;
    height:1.6rem;
  }
`

const Button = (props) => (
  <StyledButton {...props}>
    {props.children}
  </StyledButton>
)

export default Button