import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import StyledArticle, { ArticleContent } from './style'
import ArticleItem from './ArticleItem'
import metaData from 'lib/data/metaData.json'

function getAllPage(data) {
  const postNode = data.find((item) => item.name === 'posts')
  const posts = (postNode || {}).children || []
  return posts
}

function Article({ title = '所有', children, ...rest }) {
  const posts = useMemo(() => getAllPage(metaData), [])
  // console.log(posts)
  return (
    <StyledArticle {...rest}>
      <h2>{title}</h2>
      <ArticleContent>
        {posts.map((item, i) => (
          <ArticleItem data={item} key={i} />
        ))}
      </ArticleContent>
    </StyledArticle>
  )
}

Article.propTypes = {
  children: PropTypes.any,
}

export default Article
