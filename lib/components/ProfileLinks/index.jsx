import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import StyledProfileLinks from './style'
import NextLink from 'next/link'
import { Link } from '@geist-ui/react'
import BLOG from '../../../blog.config'
import metaData from 'lib/data/metaData.json'
const MenuList = (metaData) => {
  // let labelArr = []
  // let label_path_Arr = []
  // for (let labelKey in labels) {
  //   labelArr = labelArr.concat(labelKey)
  // }
  // for (let labelPathKey in labelsPath) {
  //   label_path_Arr = label_path_Arr.concat(labelPathKey)
  // }
  // if (labelArr.length === label_path_Arr.length) {
  //   for (let jug_key in labelArr) {
  //     if (labelArr[jug_key] === label_path_Arr[jug_key]) {
  //       let datas = {
  //         name: labels[labelArr[jug_key]],
  //         url: labelsPath[label_path_Arr[jug_key]],
  //       }
  //       new_Labels.push(datas)
  //     }
  //   }
  // }
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
  // console.log(links)
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
