import styled from 'styled-components'
const DateContent = styled.p`
  color: ${({ theme }) => theme.palette.accents_5};
  font-size: 0.83rem;
  display: inline-flex;
  font-family: ${({ theme }) => theme.font.mono};
  span {
    user-select: none;
    font-weight: bold;
  }
  .dot {
    color: ${({ theme }) => theme.palette.accents_7};
    padding-right: 2px;
  }
  .split {
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    padding: 0 0 0.5rem;
    color: ${({ theme }) => theme.palette.successLight};
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.breakpointMobile}) {
    font-size: 0.75rem;
    color: red;
  }
`
const StyledTitle = styled.div`
  margin: ${({ theme }) => theme.layout.gap} 0;
  .title-h1 {
    font-size: 2rem;
  }

  .date-box {
    display: flex;
    width: fit-content;
    align-items: center;
    height: 30px;
    margin: -0.5rem 0 0 0;
    position: relative;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.breakpointMobile}) {
    .title-h1 {
      font-size: 1.12rem;
    }
  }
`
export default StyledTitle
export { DateContent }
