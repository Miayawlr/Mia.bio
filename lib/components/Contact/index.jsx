import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import StyledContact, { Socials } from './style'
import { useTheme, Spacer, Link, Divider } from '@geist-ui/react'
import BLOG from '../../../blog.config'
import useConfigs from '../../utils/config-context'
function Contact({ children, ...rest }) {
  const linkProps = {
    target: '_blank',
  }
  return (
    <StyledContact {...rest}>
      <Divider y={0.5} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Socials>
          {BLOG.bio && (
            <Link aria-label={'bio'} href={'/'}>
              Mia.Bio
            </Link>
          )}
          {BLOG.email && (
            <Link
              aria-label={'email'}
              href={`mailto:${BLOG.email}`}
              {...linkProps}
            >
              Email
            </Link>
          )}
          {BLOG.github && (
            <Link aria-label={'github'} href={BLOG.github} {...linkProps}>
              GitHub
            </Link>
          )}
        </Socials>
        <Spacer x={5} />
      </div>
    </StyledContact>
  )
}

Contact.propTypes = {
  children: PropTypes.any,
}

export default Contact
