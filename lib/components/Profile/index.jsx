import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile, { RowUser } from './style'
import { Row, useTheme, User, Link } from '@geist-ui/react'
import NextLink from 'next/link'
import BLOG from '../../../blog.config.js'
import ProfileLinks from '../ProfileLinks'
import { ThemeProvider } from 'styled-components'
function Profile({ children, ...rest }) {
  // const theme = useTheme()
  // console.log(theme)
  return (
    <StyledProfile {...rest}>
      {children}

      <RowUser align="bottom">
        <NextLink href={'/'} passHref>
          <Link>
            <User src={'/assets/ava.jpg'} name={BLOG.author} altText="avatar">
              {BLOG.summary}
            </User>
            {/* <User.Link href="https://github.com/Miayawlr">@wlr_kanno</User.Link> */}
          </Link>
        </NextLink>
      </RowUser>
      <ProfileLinks />
    </StyledProfile>
  )
}

Profile.propTypes = {
  children: PropTypes.any,
}

export default Profile
