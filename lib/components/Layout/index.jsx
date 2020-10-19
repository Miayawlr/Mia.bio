import React, { useState, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import Profile from '../Profile'
import { Spacer } from '@geist-ui/react'
import StyledLayout, { LayoutContainer } from './style'
import ThemeIcon from '../ThemeIcon'
import Contact from '../Contact'
import Head from 'next/head'
import Title from '../Title'
import BLOG from '../../../blog.config'

function LayoutHeader({ meta }) {
  return (
    <Head>
      {meta.title && (
        <title>
          {meta.title}-{BLOG.title}
        </title>
      )}
    </Head>
  )
}

function Layout({ meta = {}, children, ...rest }) {
  // const [isRender, setIsRender] = useState(false)
  const renderPage = useMemo(() => meta && meta.title, [])
  // useEffect(() => {
  //   setIsRender(true)
  // }, [])
  // if (!isRender) {
  //   return (
  //     <div className={'article-content'}>
  //       <LayoutHeader meta={meta} />
  //       <style jsx>{`
  //         .article-content {
  //           opacity: 0;
  //           display: none;
  //         }
  //       `}</style>
  //     </div>
  //   )
  // }
  return (
    <StyledLayout {...rest}>
      <LayoutHeader meta={meta} />
      <LayoutContainer>
        <Spacer />
        <div className={'themeIcons'}>
          <ThemeIcon />
        </div>
        <Profile />
        {renderPage && <Title date={meta.date} title={meta.title} />}
        {children}
        <Spacer y={4} />
        <Contact />
      </LayoutContainer>
      <style jsx>{`
        .themeIcons {
          margin-left: auto;
        }
      `}</style>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
