import React from 'react'
import { ArticleItemContainer } from './style'
import NextLink from 'next/link'
import { Link } from '@geist-ui/react'
import { dateString } from '../../utils/date-conversion'
const getDateString = (date) => {
  const d = new Date(date)
  if (`${d}` === 'Invalid Date') return ''

  return dateString(d)
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
            dangerouslySetInnerHTML={{
              __html: getDateString(data.meta.date),
            }}
          ></span>
        </Link>
      </NextLink>
    </ArticleItemContainer>
  )
}

ArticleItem.propTypes = {}

export default ArticleItem
