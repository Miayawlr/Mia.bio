import styled from 'styled-components'
import BLOG from '../../../blog.config.js'
const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`
// 博客主题布局
const LayoutContainer = styled.div`
  width: 100%;
  max-width: ${BLOG.layouts.pageWidth};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  @media only screen and (max-width: 767px) {
    max-width: ${BLOG.layouts.pageWidthMobile};
    min-height: 100vh;
  }
`
export default StyledLayout
export { LayoutContainer }
