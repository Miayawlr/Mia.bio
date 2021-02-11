import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import StyledProfileLinks from './style'
import NextLink from 'next/link'
import { Link } from '@geist-ui/react'
import BLOG from '../../../blog.config'
import metaData from 'lib/data/metaData.json'
const MenuList = (metaData) => {
  console.log(metaData)
  const data = metaData.find((item) => item.name === 'aboveMe')
  return (data || {}).children || []
}

const AfterLinks = ({ data }) => {
  return (
    <NextLink href={data.url} key={data.url}>
      <Link>{data.name}</Link>
    </NextLink>
  )
}

function ProfileLinks({ children, ...rest }) {
  const links = useMemo(() => MenuList(metaData), [])
  return (
    <StyledProfileLinks {...rest}>
      <AfterLinks data={{ url: '/', name: BLOG.labels.default }} />
      {links && links.map((item, i) => <AfterLinks data={item} key={i} />)}
      {children}
    </StyledProfileLinks>
  )
}

ProfileLinks.propTypes = {
  children: PropTypes.any,
}

export default ProfileLinks
