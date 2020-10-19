import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import StyledArticle, { ArticleContent } from './style'
import ArticleItem from './ArticleItem'
import Head from 'next/head'
import metaData from 'lib/data/metaData.json'
import BLOG from '../../../blog.config'
const Arrs = [
  {
    name: '测试',
    date: '2020-10-17T15:12:32.301Z',
    url: '/write/above',
  },
]

function ArticleTitle() {
  return BLOG.title
}

function getAllPage(data) {
  const postNode = data.find((item) => item.name === 'posts')
  // console.log(postNode)
  const posts = (postNode || {}).children || []
  // return posts.slice(0, 5)
  return posts
}

function Article({ title = '所有', children, ...rest }) {
  const posts = useMemo(() => getAllPage(metaData), [])
  return (
    <StyledArticle {...rest}>
      {/* <Head>
        <title>{ArticleTitle() - BLOG.labels.aboveMe}</title>
      </Head> */}
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
