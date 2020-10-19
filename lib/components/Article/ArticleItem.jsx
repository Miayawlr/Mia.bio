import React from 'react'
import { ArticleItemContainer } from './style'
import NextLink from 'next/link'
import PropTypes from 'prop-types'
import { Link } from '@geist-ui/react'
const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
const getDateString = (date) => {
  const d = new Date(date)
  if (`${d}` === 'Invalid Date') return ''
  return new Date(date)
    .toLocaleString('zh-cn', options)
    .replace('日', '日, &nbsp;')
}

function ArticleItem({ data = {} }) {
  return (
    <ArticleItemContainer>
      {/*  passHref */}
      <NextLink href={data.url} as={data.url}>
        <Link href={data.url}>
          {data.name}
          <span
            className={'date'}
            dangerouslySetInnerHTML={{ __html: getDateString(data.meta.date) }}
          ></span>
        </Link>
      </NextLink>
    </ArticleItemContainer>
  )
}

ArticleItem.propTypes = {}

export default ArticleItem
