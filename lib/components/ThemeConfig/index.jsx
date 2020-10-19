import React, { memo } from 'react'
import PropTypes from 'prop-types'
import StyledThemeConfig from './style'
import { ThemeConfigContext } from '../../utils/config-context'
const ThemeConfig = memo(({ onChange, children, ...rest }) => {
  return (
    <ThemeConfigContext.Provider value={{ onChange }}>
      {children}
    </ThemeConfigContext.Provider>
  )
})

ThemeConfig.propTypes = {
  children: PropTypes.any,
}

export default ThemeConfig
