import styled from 'styled-components'
const StyledArticle = styled.section`
  margin-top: calc(${({ theme }) => theme.layout.gap});
  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.breakpointMobile}) {
    margin-top: 0;
  }
  h2 {
    font-size: 0.89rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: inline-block;
    margin: 0;
    color: ${({ theme }) => theme.palette.accents_6};
    padding: 2px ${({ theme }) => theme.layout.gapQuarter} 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.palette.accents_5};
  }
`
const ArticleContent = styled.div`
  margin: ${({ theme }) => theme.layout.gap} 0;
`

const ArticleItemContainer = styled.div`
  margin-bottom: calc(${({ theme }) => theme.layout.gapHalf}*1.3);
  overflow: hidden;
  max-width: 60vw;
  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.breakpointMobile}) {
    max-width: 90vw;
    .link {
      font-size: 1.15rem;
    }
  }
  .link {
    color: ${({ theme }) => theme.palette.accents_7};
    transition: color 120ms ease;
    font-size: 0.95rem;
    max-width: 95%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
  }
  .link:hover {
    color: ${({ theme }) => theme.palette.accents_3};
  }
  .date {
    color: ${({ theme }) => theme.palette.accents_5};
    font-size: 0.75rem;
    display: block;
    line-height: 1.5rem;
  }
`

export default StyledArticle
export { ArticleContent, ArticleItemContainer }
