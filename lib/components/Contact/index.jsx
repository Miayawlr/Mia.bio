import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import StyledContact, { Socials } from './style'
import { Spacer, Link, Divider } from '@geist-ui/react'
import BLOG from '../../../blog.config'
const linkProps = {
  target: '_blank',
}
function Contact({ children, ...rest }) {
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
      <IcpContainer />
    </StyledContact>
  )
}

const IcpContainer = () => {
  const flag = BLOG.record
  console.log(flag)
  return (
    <div>
      {flag && (
        <>
          <Spacer y={1} />
          <Socials>
            <Link aria-label={'icp'} href={BLOG.recordInfo.gov} {...linkProps}>
              {BLOG.recordInfo.note}
            </Link>
          </Socials>
        </>
      )}
      {!flag && (
        <>
          <Spacer y={1} />
        </>
      )}
    </div>
  )
}

Contact.propTypes = {
  children: PropTypes.any,
}

export default Contact
