import * as React from 'react'
import styled from '@emotion/styled'

const StyledGrid = styled.section`
  ${props => props.yspace && `margin: ${props.yspace} 0;`}
  display:flex;
  width:100%;
  flex-wrap:wrap;
  justify-content: space-between;
  @media(max-width:767px) {
    flex-direction:column;
  }
`

const Grid = (props) => (
  <StyledGrid {...props}>
    {props.children}
  </StyledGrid>
)

export default Grid