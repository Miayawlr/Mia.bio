import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import StyledContact, { Socials } from './style'
import { useTheme, Spacer, Link, Divider } from '@geist-ui/react'
import BLOG from '../../../blog.config'
import useConfigs from '../../utils/config-context'
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
  return (
    <div>
      <Spacer y={1} />
      {/* <span> */}
      <Socials>
        <Link
          aria-label={'icp'}
          href={'http://beian.miit.gov.cn'}
          {...linkProps}
        >
          闽ICP备2020020368号-1
        </Link>
      </Socials>

      {/* <style jsx>{`
        display: flex;
        justify-content: center;
        a:hover {
          color: #0070f3 !important;
          text-decoration: underline dashed !important;
          transition: all 150ms ease;
        }
      `}</style> */}
    </div>
  )
}

Contact.propTypes = {
  children: PropTypes.any,
}

export default Contact
