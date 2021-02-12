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
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
    </Head>
  )
}

function Layout({ meta = {}, children, ...rest }) {
  const renderPage = useMemo(() => meta && meta.title, [])
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
        <div className={'spacer-may'}></div>
        <Contact />
      </LayoutContainer>
      <style jsx>{`
        .themeIcons {
          margin-left: auto;
        }
        .spacer-may {
          margin-top: 1.3rem;
        }
      `}</style>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
