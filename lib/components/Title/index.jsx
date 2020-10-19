import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Activity } from '@geist-ui/react-icons'

import StyledTitle, { DateContent } from './style'
import { useTheme } from '@geist-ui/react'
import { useRouter } from 'next/router'
function DateContainer({ date }) {
  const theme = useTheme()
  const { asPath } = useRouter()
  console.log(date)
  const d = useMemo(() => new Date(date), [])
  console.log(d)
  if (`${d}` === 'Invalid Date') return null
  const time = Date.now() - d.getTime()
  return (
    <DateContent>
      <span className={'dot'}>
        <Activity size={20} />
      </span>
      {d.toLocaleString('zh-cn').replace(/\//g, '-')}
      <span className="split"> / </span>
    </DateContent>
  )
}

function Title({ title, date, children, ...rest }) {
  return (
    <StyledTitle {...rest}>
      <h1 className={'title-h1'}>{title}</h1>
      <div className={'date-box'}>
        <DateContainer date={date} />
      </div>
    </StyledTitle>
  )
}

Title.propTypes = {
  children: PropTypes.any,
}

export default Title
