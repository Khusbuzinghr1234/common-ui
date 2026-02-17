import React from 'react'
import { TamaguiProvider, Theme } from 'tamagui'
import config from '../tamagui.config'

type ThemeName = keyof typeof config.themes

type AppProviderProps = {
  children: React.ReactNode
  defaultTheme?: ThemeName
}

export const AppProvider = ({
  children,
  defaultTheme = 'light',
}: AppProviderProps) => {
  return (
    <TamaguiProvider config={config} defaultTheme={defaultTheme}>
      <Theme name={defaultTheme}>
        {children}
      </Theme>
    </TamaguiProvider>
  )
}
