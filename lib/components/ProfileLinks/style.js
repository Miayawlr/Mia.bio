import styled from 'styled-components'
const StyledProfileLinks = styled.div`
  & > a {
    color: ${({ theme }) => theme.palette.accents_5} !important;
    padding: ${({ theme }) => theme.layout.gapQuarter};
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  & > a:hover {
    color: ${({ theme }) => theme.palette.link} !important;
  }
  & > a::last-of-type {
    margin-right: 0;
  }
`
export default StyledProfileLinks
