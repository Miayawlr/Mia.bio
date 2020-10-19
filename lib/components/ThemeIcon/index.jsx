import React, { useMemo } from 'react'
import StyledThemeIcon from './style'
import SunIcon from '@geist-ui/react-icons/sun'
import MoonIcon from '@geist-ui/react-icons/moon'
import { useTheme } from '@geist-ui/react'
import useConfigs from '../../utils/config-context'
function ThemeIcon({ children, ...rest }) {
  const theme = useTheme()
  const configs = useConfigs()
  const isDark = useMemo(() => theme.type === 'dark', [theme.type])
  const switchTheme = () => configs.onChange(theme.type === 'dark')
  const themeTitle = '切换主题'
  return (
    <StyledThemeIcon {...rest}>
      {isDark && (
        <span title={themeTitle}>
          <SunIcon size={16} onClick={switchTheme} />
        </span>
      )}
      {!isDark && (
        <span title={themeTitle}>
          <MoonIcon size={16} onClick={switchTheme} />
        </span>
      )}
    </StyledThemeIcon>
  )
}

export default ThemeIcon
