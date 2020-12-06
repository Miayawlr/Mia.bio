import styled from 'styled-components'
import BLOG from '../../../blog.config.js'
const StyledContact = styled.div`
  width: ${BLOG.layouts.pageWidth};
  padding: 0 ${({ theme }) => theme.layout.gapQuarter};
  z-index: 1;
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.palette.accents_5};
  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.breakpointMobile}) {
    position: absolute;
    width: ${BLOG.layouts.pageWidthMobile};
  }
`
// 联系
const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > a {
    margin-right: 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
  & > a:hover {
    /* !important */
    color: ${({ theme }) => theme.palette.link} !important;
    text-decoration: underline dashed !important;
    /* cursor: e-resize; */
    transition: all 150ms ease;
  }
`
export default StyledContact
export { Socials }
