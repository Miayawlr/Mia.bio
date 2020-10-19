import styled from 'styled-components'
import { Row } from '@geist-ui/react'
const StyledProfile = styled.div`
  padding: ${({ theme }) => theme.layout.gap} 0;

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.breakpointMobile}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
  }
`
const RowUser = styled(Row)`
  padding-left: 0;
  max-width: 100%;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.layout.gapQuarter};
`
export default StyledProfile
export { RowUser }
